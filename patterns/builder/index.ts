import { CarBuilder } from "./builder/implementation/car_builder";
import { MotorcycleBuilder } from "./builder/implementation/motorcycle_builder";
import { Car } from "./entities/vehicle/implementation/car";
import { Motorcycle } from "./entities/vehicle/implementation/motorcycle";

export class BuilderApp {
  private carBuilder: CarBuilder;
  private motorcycleBuilder: MotorcycleBuilder;

  private ferrari: Car;
  private toyota: Car;
  private honda: Motorcycle;
  private yamaha: Motorcycle;

  constructor() {
    this.carBuilder = new CarBuilder();
    this.motorcycleBuilder = new MotorcycleBuilder();

    this.ferrari = this.carBuilder.setSeats(2).setEngine("V-12").build();
    this.toyota = this.carBuilder.setSeats(7).setEngine("V-6").build();
    this.honda = this.motorcycleBuilder.setSeats(2).setEngine("V-4").build();
    this.yamaha = this.motorcycleBuilder.setSeats(1).setEngine("V-2").build();
  }

  run() {
    this.showResults();
  }

  private showResults() {
    console.log(this.ferrari.toString());
    console.log(this.toyota.toString());
    console.log(this.honda.toString());
    console.log(this.yamaha.toString());
  }
}
