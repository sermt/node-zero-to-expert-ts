import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";
import { UpdateTodosDTO } from "../../dtos/todos/update-todo";

export class UpdateTodos implements UpdateTodouseCase {
  constructor(private readonly repository: TodoRepository) {}
  public async execute(dto: UpdateTodosDTO, id: number): Promise<TodoEntity> {
    return this.repository.updateTodo(dto, id);
  }
}

export interface UpdateTodouseCase {
  execute(UpdateTodosDTO: UpdateTodosDTO, id: number): Promise<TodoEntity>;
}
