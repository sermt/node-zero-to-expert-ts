// Referencias HTML
const lblPending = document.querySelector('#lbl-pending');
const deskHeader = document.querySelector('h1');
const noMoreAlert = document.querySelector('.alert');
const lblCurrentTicket = document.querySelector('small')

const btnDraw = document.querySelector('#btn-draw');
const btnDone = document.querySelector('#btn-done');


const searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has('escritorio') ) {
  window.location = 'index.html';
  throw new Error('Escritorio es requerido');
}

const deskNumber = searchParams.get('escritorio');
let workingTicket = null;

deskHeader.innerText = deskNumber;


function checkTicketCount( currentCount = 0 ) {
  if ( currentCount === 0 ) {
    noMoreAlert.classList.remove('d-none');
  } else {
    noMoreAlert.classList.add('d-none');
  }

  lblPending.innerHTML = currentCount;
}


async function loadInitialCount() {
  const data = await fetch('/api/ticket/pending').then(resp => resp.json());

  const { pendingTickets } = data;
  checkTicketCount(pendingTickets.length);
}

async function getTicket() {
  await finishTicket();

  const response = await fetch(`/api/ticket/draw/${ deskNumber }`);
  const data = await response.json();   
  
  const { status, ticket, message } = data.ticket;


  if ( status === 'error' ) {
    lblCurrentTicket.innerText = message;
    return;
  }
  workingTicket = ticket;
  lblCurrentTicket.innerText = ticket.ticketNumber;
}

async function finishTicket() {
  if ( !workingTicket ) return;

  const data = await fetch(`/api/ticket/done/${ workingTicket.id }`, {
    method: 'PUT'
  }).then( resp => resp.json() );


  const { status, message } = data;
  console.log( { status, message } );

  if ( status === 'ok' ) {
    workingTicket = null;
    lblCurrentTicket.innerText = 'Nadie';
  }

}





function connectToWebSockets() {

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    // console.log(event.data); // on-ticket-count-changed
    const { type, payload } = JSON.parse( event.data );
    if ( type !== 'on-ticket-count-changed' ) return;
    checkTicketCount(payload);
  };

  socket.onclose = ( event ) => {
    console.log( 'Connection closed' );
    setTimeout( () => {
      console.log( 'retrying to connect' );
      connectToWebSockets();
    }, 1500 );

  };

  socket.onopen = ( event ) => {
    console.log( 'Connected' );
  };

}



// Listeners
btnDraw.addEventListener('click', getTicket );
btnDone.addEventListener('click', finishTicket );



// Init
loadInitialCount();
connectToWebSockets();