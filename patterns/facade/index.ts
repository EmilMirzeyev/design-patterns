import { EspressoFacade } from "./entities/coffee/implementation/espresso_facade";
import { LatteFacade } from "./entities/coffee/implementation/latte_facade";
import { CoffeeMachineService } from "./service/coffee_machine_service";

export class FacadeApp {
  private coffeeMachine = new CoffeeMachineService();

  run() {
    this.makeCoffee();
  }

  private makeCoffee() {
    const espresso = new EspressoFacade(this.coffeeMachine);
    const latte = new LatteFacade(this.coffeeMachine);

    latte.create();
    espresso.create();
  }
}
