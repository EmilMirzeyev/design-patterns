import { Car } from "../../entities/vehicle/implementation/car";
import { BaseVehicleBuilder } from "../abstraction/base_vehicle_builder";

export class CarBuilder extends BaseVehicleBuilder<Car> {
  public setSeats(seats: number): this {
    this.seats = seats;
    return this;
  }

  public setEngine(engine: string): this {
    this.engine = engine;
    return this;
  }

  public build(): Car {
    if (this.seats === undefined || this.engine === undefined) {
      throw new Error("Both seats and engine must be specified");
    }
    const car = new Car(this.seats, this.engine);
    this.reset();
    return car;
  }
}
