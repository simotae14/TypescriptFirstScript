class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

// create instance of car
const car = new Car();
car.drive();
car.honk();
