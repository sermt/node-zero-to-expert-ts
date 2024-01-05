import { Request, Response } from "express";
import { CreateTodoDTO } from "../../domain/dtos/todos/";
import { UpdateTodosDTO } from "../../domain/dtos/todos/update-todo";
import { TodoRepository } from "../../domain";

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {}
  async getAllTodos(req: Request, res: Response) {
    try {
      const todos = await this.todoRepository.getAllTodos();
      res.json(todos); // Assuming getAllTodos returns an array of todos
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  // By using arrow functions, we don't have to bind this
  getTodoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const todo = await this.todoRepository.getTodoById(+id);
      if (!todo) {
        res.sendStatus(404);
      } else {
        res.json(todo);
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };

  async createTodo(req: Request, res: Response) {
    const [error, createTodoDto] = CreateTodoDTO.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    try {
      const newTodo = await this.todoRepository.createTodo(createTodoDto!);
      res.json(newTodo);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const [error, updateTodoDto] = UpdateTodosDTO.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    try {
      const todo = await this.todoRepository.updateTodo(
        updateTodoDto!.values as UpdateTodosDTO,
        +id
      );
      res.json(todo);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await this.todoRepository.deleteTodo(+id);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  }
}
