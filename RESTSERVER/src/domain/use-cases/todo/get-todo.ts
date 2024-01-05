import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export class GetTodoById implements GetTodoByIdUseCase {
  constructor(private readonly repository: TodoRepository) {}
  public async execute(id: number): Promise<TodoEntity> {
    return this.repository.getTodoById(id);
  }
}

export interface GetTodoByIdUseCase {
  execute(id: number): Promise<TodoEntity>;
}
