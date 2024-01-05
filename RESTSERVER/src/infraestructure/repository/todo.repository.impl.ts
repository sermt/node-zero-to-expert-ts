import {
  CreateTodoDTO,
  TodoDatasource,
  TodoEntity,
  TodoRepository,
} from "../../domain";
import { UpdateTodosDTO } from "../../domain/dtos/todos/update-todo";

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly datasource: TodoDatasource) {}
  getAllTodos(): Promise<TodoEntity[]> {
    return this.datasource.getAllTodos();
  }
  createTodo(createTodoDTO: CreateTodoDTO): Promise<TodoEntity> {
    return this.datasource.createTodo(createTodoDTO);
  }
  getTodoById(id: number): Promise<TodoEntity> {
    return this.datasource.getTodoById(id);
  }
  updateTodo(updateTodosDTO: UpdateTodosDTO, id: number): Promise<TodoEntity> {
    return this.datasource.updateTodo(updateTodosDTO, id);
  }
  deleteTodo(id: number): Promise<TodoEntity> {
    return this.datasource.deleteTodo(id);
  }
}
