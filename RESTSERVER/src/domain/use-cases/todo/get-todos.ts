import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export class GetAllTodos implements GetAllTodosUseCase {
  constructor(private readonly repository: TodoRepository) {}
  public async execute(): Promise<TodoEntity[]> {
    return this.repository.getAllTodos();
  }
}

export interface GetAllTodosUseCase {
  execute(): Promise<TodoEntity[]>;
}
