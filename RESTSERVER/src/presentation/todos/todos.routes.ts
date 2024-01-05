import { Router } from "express";
import { TodosController } from "./todos.controller";
import { TodoDatasourceImpl } from "../../infraestructure/datasource/todo.datasource";
import { TodoRepositoryImpl } from "../../infraestructure/repository/todo.repository.impl";

export class TodosRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl(datasource);
    const controller = new TodosController(todoRepository);

    router.get("/", controller.getAllTodos.bind(controller));
    router.get("/:id", controller.getTodoById);
    router.post("/", controller.createTodo.bind(controller));
    router.put("/:id", controller.updateTodo.bind(controller));
    router.delete("/:id", controller.deleteTodo.bind(controller));
    return router;
  }
}
