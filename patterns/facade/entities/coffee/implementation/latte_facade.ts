import { CoffeeMachineService } from "../../../service/coffee_machine_service";
import { Coffee } from "../abstraction/coffee";

export class LatteFacade implements Coffee {
  private service: CoffeeMachineService;

  constructor(service: CoffeeMachineService) {
    this.service = service;
  }

  public create(): void {
    if (
      this.service.grindCoffeeBean(15) &&
      this.service.addWater(0.1) &&
      this.service.addMilk(0.3)
    ) {
      this.service.getCoffee();
      console.log("Facade: Your latte is ready!");
      this.service.cleaning();
    } else {
      console.log("Facade: Could not create latte, check ingredients.");
    }
  }
}
