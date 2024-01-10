import { Request, Response } from "express";
import { TicketService } from "../services/ticket.service";

export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  getTickets = (req: Request, res: Response) => {
    const tickets = this.ticketService.todayTickets;
    res.json({ tickets });
  };

  getLastTicketNumber = (req: Request, res: Response) => {
    const lastTicket = this.ticketService.lastTicketNumber;
    res.json({ number:lastTicket });
  };

  createTicket = (req: Request, res: Response) => {
    const ticket = this.ticketService.createTicket();
    res.status(201).json({ ticket });
  };

  pendingTickets = (req: Request, res: Response) => {
    const pendingTickets = this.ticketService.pedingTickets;
    res.json({ pendingTickets });
  };

  ticketFinished = (req: Request, res: Response) => {
    const { ticketId } = req.params;

    res.json({ ...this.ticketService.ticketFinished(ticketId) });
  };

  workingOn = (req: Request, res: Response) => {
    const workingOnTickets = this.ticketService.lastWorkingOnTickets;
    res.json({ workingOnTickets });
  };

  drawTicket = (req: Request, res: Response) => {
    const { desk } = req.params;
    if ( isNaN(parseInt(desk))) {
      res.status(400).json({ message: "Desk id must be a number" });
      return;
    }
    const ticket = this.ticketService.drawTicket(parseInt(desk));
    res.json({ ticket });
  };
}
