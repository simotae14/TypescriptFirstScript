class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
vehicle.honk(); // give error

// create instance of car
const car = new Car();
car.startDrivingProcess();
car.honk();
