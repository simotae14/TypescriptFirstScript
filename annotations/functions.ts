const add = (a: number, b: number) => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (msg: string): void => {
  console.log(msg);
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
}

const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
}
