import express from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";

(() => {
  main();
})();

function main() {
  const app = express();
  const githubController = new GithubController();

  // Read and parse body
  app.use(express.json());

  app.post("/api/github", githubController.webHookHandler);

  app.listen(envs.PORT, () => {
    console.log(`Server started on port ${envs.PORT}`);
  })
}
