function textValidators(text: string): [string?, string?] {
  if (isTextEmpty(text)) {
    return ["Text is required", undefined];
  }
  if (!isTextValid(text)) {
    return ["Text must be at least 3 characters", undefined];
  }
  return [undefined, text];
}

export function isTextValid(text: string): boolean {
  return text.trim().length >= 3;
}

export function isTextEmpty(text: string): boolean {
  return text === "" || text === undefined || text === null;
}

export default textValidators;
