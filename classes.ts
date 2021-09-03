class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

// create instance
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
