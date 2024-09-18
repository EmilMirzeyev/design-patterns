export class CoffeeMachineService {
  private power: boolean;
  private waterLevel: number;
  private milkLevel: number;
  private coffeeBeans: number;

  constructor() {
    this.power = false;
    this.waterLevel = 2.0;
    this.milkLevel = 1.0;
    this.coffeeBeans = 17;
  }

  private ensurePowerOn(): void {
    if (!this.power) {
      console.log("Coffee Machine: Power on!");
      this.power = true;
    }
  }

  public on(): void {
    this.ensurePowerOn();
  }

  public off(): void {
    console.log("Coffee Machine: Power off!");
    this.power = false;
  }

  public grindCoffeeBean(amount: number): boolean {
    this.ensurePowerOn();
    if (this.coffeeBeans >= amount) {
      this.coffeeBeans -= amount;
      console.log(`Coffee Machine: ${amount}g of coffee beans grinded!`);
      return true;
    } else {
      console.log("Coffee Machine: Not enough coffee beans!");
      return false;
    }
  }

  public addWater(amount: number): boolean {
    this.ensurePowerOn();
    if (this.waterLevel >= amount) {
      this.waterLevel -= amount;
      console.log(`Coffee Machine: ${amount}L of water added!`);
      return true;
    } else {
      console.log("Coffee Machine: Not enough water!");
      return false;
    }
  }

  public addMilk(amount: number): boolean {
    this.ensurePowerOn();
    if (this.milkLevel >= amount) {
      this.milkLevel -= amount;
      console.log(`Coffee Machine: ${amount}L of milk added!`);
      return true;
    } else {
      console.log("Coffee Machine: Not enough milk!");
      return false;
    }
  }

  public cleaning(): void {
    this.ensurePowerOn();
    console.log("Coffee Machine: Cleaning complete.");
  }

  public reFill(): void {
    this.ensurePowerOn();
    console.log("Coffee Machine: Refilling.");
    this.waterLevel = 2.0;
    this.milkLevel = 1.0;
    this.coffeeBeans = 200;
    console.log("Coffee Machine: Refilled.");
  }

  public getCoffee(): void {
    this.ensurePowerOn();
    console.log("Coffee Machine: Here is your coffee!");
  }
}
