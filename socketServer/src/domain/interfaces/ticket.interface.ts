export interface Ticket {
  id: string;
  ticketNumber: number;
  created_at: Date;
  handled_at?: Date;
  done: boolean;
  desk?: number;
}
