import { CoffeeMachineService } from "../../../service/coffee_machine_service";
import { Coffee } from "../abstraction/coffee";

export class EspressoFacade implements Coffee {
  private service: CoffeeMachineService;

  constructor(service: CoffeeMachineService) {
    this.service = service;
  }

  public create(): void {
    if (this.service.grindCoffeeBean(20) && this.service.addWater(0.2)) {
      this.service.getCoffee();
      console.log("Facade: Your espresso is ready!");
      this.service.cleaning();
    } else {
      console.log("Facade: Could not create espresso, check ingredients.");
    }
  }
}
