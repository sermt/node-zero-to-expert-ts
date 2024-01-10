function renderTickets(tickets = []) {
  for (let i = 0; i < tickets.length; i++) {
    if (i >= 4) break;

    const ticket = tickets[i];
    if (!ticket) continue;

    const lblTicket = document.querySelector(`#lbl-ticket-0${i + 1}`);
    const lblDesk = document.querySelector(`#lbl-desk-0${i + 1}`);

    lblTicket.innerText = `Ticket ${ticket.ticketNumber}`;
    lblDesk.innerText = ticket.desk;
  }
}
async function loadCurrentTickets() {
  const tickets = await fetch("/api/ticket/working-on").then((resp) =>
    resp.json()
  );
  console.log(tickets.workingOnTickets)
  renderTickets(tickets.workingOnTickets);
}

function connectToWebSockets() {
  const socket = new WebSocket("ws://localhost:3000/ws");

  socket.onmessage = (event) => {
    const { type, payload } = JSON.parse(event.data);
    if (type !== "on-working-changed") return;
    renderTickets(payload);
  };

  socket.onclose = (event) => {
    setTimeout(() => {
      connectToWebSockets();
    }, 1500);
  };

  socket.onopen = (event) => {
    console.log("Connected");
  };
}

loadCurrentTickets();
connectToWebSockets();
