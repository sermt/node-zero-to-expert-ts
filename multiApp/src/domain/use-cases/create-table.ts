export class CreateTable implements CreateTableUseCase {
  //constructor() {}
  execute({ base, limit = 10 }: CreateTableOptions) {
    let messageContent = "";
    for (let i = 1; i <= limit; i++) {
      messageContent += `${base} x ${i} = ${base * i}\n`;
    }
    return messageContent;
  }
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}
