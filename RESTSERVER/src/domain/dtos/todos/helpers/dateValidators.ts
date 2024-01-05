function DateValidator(completedAt?: Date): [string?, Date?] {
  if (completedAt) {
    if (!isDateValid(completedAt)) {
      return ["Invalid date format for completedAt", undefined];
    }

    if (isDateBeforeToday(completedAt)) {
      return ["Completed at must be in the future", undefined];
    }
  }
  return [undefined, undefined];
}

export function isDateValid(date: Date): boolean {
  return !isNaN(Date.parse(date.toString()));
}

export function isDateBeforeToday(date: Date): boolean {
  return date < new Date();
}

export default DateValidator;
