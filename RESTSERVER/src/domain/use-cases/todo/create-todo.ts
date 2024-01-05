import { CreateTodoDTO } from "../../dtos/todos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export class CreateTodo implements CreateTodouseCase {
  constructor(private readonly repository: TodoRepository) {}
  public async execute(dto: CreateTodoDTO): Promise<TodoEntity> {
    return this.repository.createTodo(dto);
  }
}

export interface CreateTodouseCase {
  execute(dto: CreateTodoDTO): Promise<TodoEntity>;
}
