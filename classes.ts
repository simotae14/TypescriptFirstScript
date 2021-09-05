class Vehicle {
  constructor(public color: string) {
  }
  protected honk(): void {
    console.log('beep');
  }
}

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// create instance of car
// const car = new Car();
// car.startDrivingProcess();

