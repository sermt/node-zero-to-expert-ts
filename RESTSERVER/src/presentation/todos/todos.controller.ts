import { Request, Response } from "express";
const todos = [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
  { id: 3, title: "Todo 3" },
];
export class TodosController {
  getTodos(req: Request, res: Response) {
    res.json(todos);
  }
  getTodoById(req: Request, res: Response) {
    const todo = todos.find((t) => t.id === +req.params.d);
    if (!todo) {
      res.sendStatus(404);
    } else {
      res.json(todo);
    }
  }

  createTodo(req: Request, res: Response) {
    const { title } = req.body;
    if (!title) {
      res.status(400).json({ error: "Title is required" });
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title,
    };
    todos.push(newTodo);
    res.json(newTodo);
  }

  updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { title } = req.body;
    const todo = todos.find((t) => t.id === +id);
    if (!todo) {
      res.sendStatus(404);
    } else {
      todo.title = title;
      res.json(todo);
    }
  }
  deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === +id);
    if (!todo) {
      res.sendStatus(404);
    } else {
      todos.splice(todos.indexOf(todo), 1);
      res.status(204).json({
        message: "Todo deleted",
      });
    }
  }
}
