export abstract class BaseVehicleBuilder<T> {
  protected seats?: number;
  protected engine?: string;

  public abstract setSeats(seats: number): this;
  public abstract setEngine(engine: string): this;
  public abstract build(): T;
  public reset(): this {
    this.seats = undefined;
    this.engine = undefined;
    return this;
  }
}
