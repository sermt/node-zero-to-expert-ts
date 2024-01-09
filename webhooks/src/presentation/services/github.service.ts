import { GitHubStarPayload } from "../../config/interfaces";

export class GithubService {
  onStar(payload: GitHubStarPayload): string {
    let message = "";
    const { action, sender, repository, starred_at } = payload;

    message = `${sender.login} ${action} ${repository.name} at ${starred_at}`;

    return message;
  }
}
