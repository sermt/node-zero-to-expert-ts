import { Router } from "express";
import { TicketController } from "./controller";
import { TicketService } from "../services/ticket.service";

export class TicketRoutes {
  static get routes() {
    const router = Router();
    const ticketService = new TicketService();
    const ticketController = new TicketController(ticketService);
    // Definir las rutas
    router.get("/", ticketController.getTickets);
    router.get("/last", ticketController.getLastTicketNumber);
    router.get("/pending", ticketController.pendingTickets);
    router.get("/draw/:desk", ticketController.drawTicket);
    router.get("/working-on", ticketController.workingOn);

    router.post("/", ticketController.createTicket);
    router.put("/done/:ticketId", ticketController.ticketFinished);

    return router;
  }
}
