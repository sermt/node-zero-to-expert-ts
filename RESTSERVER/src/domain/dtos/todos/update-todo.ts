import { isDateValid, isTextValid } from "./helpers";

export class UpdateTodosDTO {
  constructor(private _text?: string, private _completedAt?: Date) {}

  static create(props: IUpdateTodosDTO): [string?, UpdateTodosDTO?] {
    const { text, completedAt } = props;

    

    if (text && isTextValid(text)) {
      return ["Text must be at least 3 characters", undefined];
    }

    if (completedAt && isDateValid(completedAt)) {
      return ["CompletedAt must be a valid date", undefined];
    }

    return [undefined, new UpdateTodosDTO(text, completedAt)];
  }

  get values() {
    const result: { [key: string]: any } = {};

    // add properties to result object if they are not undefined
    if (this._text) {
      result.text = this._text;
    }

    if (this._completedAt) {
      result.completedAt = this._completedAt;
    }

    

    return result;
  }
}

interface IUpdateTodosDTO {
  text?: string;
  completedAt?: Date;
}
