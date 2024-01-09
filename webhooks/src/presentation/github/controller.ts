import { Request, Response } from "express";
import { GithubService } from "../services/github.service";

export class GithubController {
  constructor(private readonly githubService = new GithubService()) {}
  webHookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header("x-gitHub-event");
    const payload = req.body;
    let message = "";

    switch (githubEvent) {
      case "star":
        message = this.githubService.onStar(payload);
        break;
      default:
        message = "Unknown event";
    }

    res.status(200).send(message);
  };
}
