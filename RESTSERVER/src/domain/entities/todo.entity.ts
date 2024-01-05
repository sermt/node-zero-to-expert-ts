export class TodoEntity {
  constructor(
    public readonly id: number,
    public readonly text: string,
    public readonly completedAt: Date | null
  ) {}

  get isCompleted(): boolean {
    return Boolean(this.completedAt);
  }

  static fromObject({
    id,
    text,
    completedAt,
  }: {
    id: number;
    text: string;
    completedAt: Date | null;
  }): TodoEntity {
    if (!id) throw new Error("Id is required");
    if (!text) throw new Error("Text is required");

    let newCompletedAt;
    if (completedAt) {
      newCompletedAt = new Date(completedAt);
    }
    if (newCompletedAt && isNaN(newCompletedAt.getTime())) {
      throw new Error("Invalid completedAt");
    }
    return new TodoEntity(id, text, completedAt);
  }
}
