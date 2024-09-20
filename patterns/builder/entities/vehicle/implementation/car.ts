import { BaseVehicle } from "../abstraction/i_vehicle";

export class Car extends BaseVehicle {
  public toString(): string {
    return `Car with ${this.seats} seats and engine: ${this.engine}`;
  }
}
