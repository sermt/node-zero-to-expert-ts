import { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";
export class WssService {
  private static _instance: WssService;

  private wss: WebSocketServer;

  private constructor(option: Option) {
    const { server, path = "/ws" } = option;

    this.wss = new WebSocketServer({ server, path });
    this.start();
  }

  static get instance(): WssService {
    return WssService._instance;
  }
  static initWebSocketServer(option: Option) {
    if (!WssService._instance) {
      WssService._instance = new WssService(option);
    }
    return WssService.instance;
  }

  public start() {

    this.wss.on('connection', (ws: WebSocket ) => {

      console.log('Client connected');

      ws.on('close', () => console.log('Client disconnected') )

    });

  }

  sendMessage(type: string, payload: Object): void {
    this.wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({ type, payload }));
      }
    });
  }
}

interface Option {
  server: Server;
  path?: string;
}
