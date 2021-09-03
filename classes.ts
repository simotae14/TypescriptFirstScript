class Vehicle {
  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

// create instance of car
const car = new Car();
car.startDrivingProcess();
car.honk();
