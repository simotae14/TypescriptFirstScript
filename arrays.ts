// with Type Inference
const carMakers = ['ford', 'toyota', 'chevy'];

// with Explicit annotations
const carMakers2: string[] = ['opel', 'fiat'];

const carMakers3: string[] = [];

const dates = [new Date(), new Date()];

// two dimentional arrays
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// with empty initialization
const carsByMakeEmpty: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map' and other arrays methods
carMakers.map((car: string): string => car.toUpperCase());

// Flexible Types
const importantDates = [new Date(), '2030-10-10'];

const importantDatesExplicit: (Date | string)[] = [new Date()];
importantDatesExplicit.push('2030-10-10');
importantDatesExplicit.push(new Date());
importantDatesExplicit.push(100);
