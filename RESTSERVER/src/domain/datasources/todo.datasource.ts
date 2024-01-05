import { TodoEntity } from "../entities/todo.entity";
import { CreateTodoDTO } from "../dtos/todos/create-todo";
import { UpdateTodosDTO } from "../dtos/todos/update-todo";

export abstract class TodoDatasource {
  abstract getAllTodos(): Promise<TodoEntity[]>;
  abstract createTodo(createTodoDTO: CreateTodoDTO): Promise<TodoEntity>;
  abstract getTodoById(id: number): Promise<TodoEntity>;
  abstract updateTodo(
    updateTodosDTO: UpdateTodosDTO,
    id: number
  ): Promise<TodoEntity>;
  abstract deleteTodo(id: number): Promise<TodoEntity>;
}
