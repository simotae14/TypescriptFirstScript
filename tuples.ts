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
