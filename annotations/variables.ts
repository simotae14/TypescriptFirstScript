let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in Object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car();

// Object Literale
let point: { x: number, y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Explicit Annotations
// 1) For functions that returns the 'any' Type
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2) when we declare a variable in one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let funWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    funWord = true;
  }
}
