const currentTicketLabel = document.getElementById("lbl-new-ticket");
const newTicketButton = document.querySelector(".btn");

async function getLastTicket() {
  try {
    const response = await fetch("/api/ticket/last");
    const lastTicket = await response.json();

    currentTicketLabel.innerText = lastTicket.number;
  } catch (error) {
    console.error("Error fetching last ticket:", error);
  }
}

async function createNewTicket() {
  try {
    const response = await fetch("/api/ticket", { method: "POST" });
    const ticketData = await response.json();

    currentTicketLabel.innerText = ticketData.ticket.ticketNumber;
  } catch (error) {
    console.error("Error creating new ticket:", error);
  }
}
newTicketButton.addEventListener("click", createNewTicket);
getLastTicket();
