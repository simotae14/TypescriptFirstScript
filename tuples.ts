const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = [ 'brown', true, 20 ];
pepsi[0] = 40; // give error
pepsi[2] = 'brown'; // give error

// using alias
type Drink = [string, boolean, number];

const cola: Drink = [ 'brown', true, 30 ];
const sprite: Drink = ['clear', true, 20];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
