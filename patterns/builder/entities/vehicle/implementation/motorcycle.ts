import { BaseVehicle } from "../abstraction/i_vehicle";

export class Motorcycle extends BaseVehicle {
  public toString(): string {
    return `Motorcycle with ${this.seats} seats and engine: ${this.engine}`;
  }
}
