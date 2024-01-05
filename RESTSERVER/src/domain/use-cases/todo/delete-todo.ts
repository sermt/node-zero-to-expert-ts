import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export class DeleteTodo implements DeleteTodouseCase {
  constructor(private readonly repositoy: TodoRepository) {}
  public async execute(id: number): Promise<TodoEntity> {
    return this.repositoy.deleteTodo(id);
  }
}

export interface DeleteTodouseCase {
  execute(id: number): Promise<TodoEntity>;
}
