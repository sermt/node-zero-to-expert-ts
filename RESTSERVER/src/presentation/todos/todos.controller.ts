import { Request, Response } from "express";
import { CreateTodoDTO } from "../../domain/dtos/todos/";
import { UpdateTodosDTO } from "../../domain/dtos/todos/update-todo";
import {
  CreateTodo,
  DeleteTodo,
  GetAllTodos,
  GetTodoById,
  TodoRepository,
  UpdateTodos,
} from "../../domain";

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {}
  getAllTodos(req: Request, res: Response) {
    new GetAllTodos(this.todoRepository)
      .execute()
      .then((todos) => {
        res.json(todos);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }

  // By using arrow functions, we don't have to bind this
  getTodoById = (req: Request, res: Response) => {
    const { id } = req.params;
    new GetTodoById(this.todoRepository)
      .execute(+id)
      .then((todo) => {
        res.json(todo);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(404);
      });
  };

  createTodo(req: Request, res: Response) {
    const [error, createTodoDto] = CreateTodoDTO.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    new CreateTodo(this.todoRepository)
      .execute(createTodoDto!)
      .then((todo) => {
        res.json(todo);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }

  updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const [error, updateTodoDto] = UpdateTodosDTO.create(req.body);
    console.log(error);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    new UpdateTodos(this.todoRepository)
      .execute(updateTodoDto!, +id)
      .then((todo) => {
        res.json(todo);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }

  deleteTodo(req: Request, res: Response): void {
    const { id } = req.params;
    new DeleteTodo(this.todoRepository)
      .execute(+id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(400);
      });
  }
}
