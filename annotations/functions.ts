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

// DESTRUCTURING ANNOTATIONS
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logsWeather = (forecast: {
  date: Date,
  weather: string
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES 2015 Destructuring
const logsWeatherES2015 = ({date, weather}: {
  date: Date,
  weather: string
}): void => {
  console.log(date);
  console.log(weather);
};

logsWeatherES2015(todaysWeather);
