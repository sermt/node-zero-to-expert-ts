import { uuidAdapter } from "../../config/uuid.adapter";
import { Ticket } from "../../domain/interfaces/ticket.interface";
import { WssService } from "./wss.service";

export class TicketService {
  constructor(private readonly wssService = WssService.instance) {}
  private  tickets: Ticket[] = [
    {
      id: uuidAdapter.v4(),
      ticketNumber: 1,
      created_at: new Date(),
      done: false,
    },
    {
      id: uuidAdapter.v4(),
      ticketNumber: 2,
      created_at: new Date(),
      done: false,
    },
    {
      id: uuidAdapter.v4(),
      ticketNumber: 3,
      created_at: new Date(),
      done: false,
    },
    {
      id: uuidAdapter.v4(),
      ticketNumber: 4,
      created_at: new Date(),
      done: false,
    },
    {
      id: uuidAdapter.v4(),
      ticketNumber: 5,
      created_at: new Date(),
      done: false,
    },
    {
      id: uuidAdapter.v4(),
      ticketNumber: 6,
      created_at: new Date(),
      done: false,
    },
  ];

  private readonly workingOnTickets: Ticket[] = [];

  get pedingTickets(): Ticket[] {
    return this.tickets.filter((ticket) => ticket.desk === undefined);
  }

  get lastTicketNumber(): number {
    return this.tickets.length > 0
      ? this.tickets[this.tickets.length - 1].ticketNumber
      : 0;
  }

  createTicket(): Ticket {
    const newTicket = {
      id: uuidAdapter.v4(),
      ticketNumber: this.lastTicketNumber + 1,
      created_at: new Date(),
      done: false,
    };

    this.tickets.push(newTicket);
    this.onTicketNumberChanged();

    return newTicket;
  }

  drawTicket(deskId: number) {
    const ticket = this.tickets.find((ticket) => ticket.desk === undefined);

    if (!ticket) {
      return { status: "error", message: "No hay tickets pendientes" };
    }

    ticket.desk = deskId;
    ticket.handled_at = new Date();
    this.workingOnTickets.unshift({ ...ticket });
    this.onTicketNumberChanged();
    this.onWorkingOnChanged();
    return { status: 200, message: "Ticket asignado", ticket };
  }

  ticketFinished(ticketId: string) {
    const ticket = this.tickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
      return { status: "error", message: "No existe el ticket" };
    }

    ticket.done = true;

    return { status: "success", message: "Ticket finalizado", ticket };
  }

  get lastWorkingOnTickets(): Ticket[] {
    return this.workingOnTickets.slice(0, 4);
  }

  get todayTickets(): Ticket[] {
    return this.tickets;
  }

  private onWorkingOnChanged() {
    this.wssService.sendMessage(
      "on-working-changed",
      this.lastWorkingOnTickets
    );
  }

  private onTicketNumberChanged() {
    this.wssService.sendMessage(
      "on-ticket-count-changed",
      this.pedingTickets.length
    );
  }
}
