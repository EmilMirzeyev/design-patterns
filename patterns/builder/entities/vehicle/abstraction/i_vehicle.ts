export abstract class BaseVehicle {
  protected seats: number;
  protected engine: string;

  constructor(seats: number, engine: string) {
    this.seats = seats;
    this.engine = engine;
  }

  public abstract toString(): string;
}
