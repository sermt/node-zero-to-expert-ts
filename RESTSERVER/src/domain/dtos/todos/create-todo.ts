import DateValidator from "./helpers/dateValidators";
import textValidators from "./helpers/textValidators";

export class CreateTodoDTO {
  constructor(
    public readonly text: string,
    public readonly completedAt?: Date
  ) {}

  static create(props: ICreateTodoDTO): [string?, CreateTodoDTO?] {
    const { text, completedAt } = props;

    const [textError, checkedText] = textValidators(text);
    if (textError) {
      return [textError, undefined];
    }

    const [dateAtError, formatedCompletedAt] = DateValidator(completedAt);
    if (dateAtError) {
      return [dateAtError, undefined];
    }
    console.log(formatedCompletedAt);
    return [undefined, new CreateTodoDTO(checkedText!, formatedCompletedAt)];
  }
}

interface ICreateTodoDTO {
  text: string;
  completedAt?: Date;
}
