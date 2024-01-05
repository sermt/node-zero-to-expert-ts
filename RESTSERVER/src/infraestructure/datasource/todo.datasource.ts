import { prisma } from "../../data/postgres";
import { CreateTodoDTO, TodoDatasource, TodoEntity } from "../../domain";
import { UpdateTodosDTO } from "../../domain/dtos/todos/update-todo";

export class TodoDatasourceImpl implements TodoDatasource {
  async getAllTodos(): Promise<TodoEntity[]> {
    return (await prisma.todo.findMany()).map(TodoEntity.fromObject);
  }
  async createTodo(createTodoDTO: CreateTodoDTO): Promise<TodoEntity> {
    return TodoEntity.fromObject(
      await prisma.todo.create({
        data: createTodoDTO,
      })
    );
  }
  async getTodoById(id: number): Promise<TodoEntity> {
    const todo = await prisma.todo.findFirst({
      where: {
        id,
      },
    });
    if (!todo) {
      throw new Error("Todo not found");
    }
    return TodoEntity.fromObject(todo);
  }
  async updateTodo(
    updateTodosDTO: UpdateTodosDTO,
    id: number
  ): Promise<TodoEntity> {
    await this.getTodoById(id);

    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: updateTodosDTO.values,
    });

    return TodoEntity.fromObject(updatedTodo);
  }
  async deleteTodo(id: number): Promise<TodoEntity> {
    await this.getTodoById(id);
    return TodoEntity.fromObject(await prisma.todo.delete({ where: { id } }));
  }
}
