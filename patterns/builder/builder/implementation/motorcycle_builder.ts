import { Motorcycle } from "../../entities/vehicle/implementation/motorcycle";
import { BaseVehicleBuilder } from "../abstraction/base_vehicle_builder";

export class MotorcycleBuilder extends BaseVehicleBuilder<Motorcycle> {
  public setSeats(seats: number): this {
    this.seats = seats;
    return this;
  }

  public setEngine(engine: string): this {
    this.engine = engine;
    return this;
  }

  public build(): Motorcycle {
    if (this.seats === undefined || this.engine === undefined) {
      throw new Error("Both seats and engine must be specified");
    }
    const motorcycle = new Motorcycle(this.seats, this.engine);
    this.reset();
    return motorcycle;
  }
}
