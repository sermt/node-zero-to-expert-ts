import { Request, Response } from "express";
import { prisma } from "../../data/postgres/index";
import { CreateTodoDTO } from "../../domain/dtos/todos/";
import { UpdateTodosDTO } from "../../domain/dtos/todos/update-todo";

export class TodosController {
  async getTodos(req: Request, res: Response) {
    res.json(await prisma.todo.findMany());
  }
  async getTodoById(req: Request, res: Response) {
    const todo = await prisma.todo.findUnique({
      where: {
        id: +req.params.id,
      },
    });
    if (!todo) {
      res.sendStatus(404);
    } else {
      res.json(todo);
    }
  }

  async createTodo(req: Request, res: Response) {
    const [error, createTodoDto] = CreateTodoDTO.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    try {
      const newTodo = await prisma.todo.create({
        data: createTodoDto!,
      });
      res.json(newTodo);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const [error,updateTodoDto] = UpdateTodosDTO.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }
    const todo = await prisma.todo.findFirst({
      where: {
        id: +id,
      },
    });
    if (!todo) {
      res.sendStatus(404);
    } else {
      try {
        await prisma.todo.update({
          where: {
            id: +id,
          },
          data: updateTodoDto!.values,
        });
        res.json(todo);
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
    }
  }
  deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      prisma.todo.delete({
        where: {
          id: +id,
        },
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
