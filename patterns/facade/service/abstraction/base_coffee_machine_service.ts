export abstract class BaseCoffeeMachineService {
  abstract on(): void;
  abstract off(): void;
  abstract grindCoffeeBean(amount: number): boolean;
  abstract addWater(amount: number): boolean;
  abstract addMilk(amount: number): boolean;
  abstract cleaning(): void;
  abstract reFill(): void;
  abstract getCoffee(): void;
}
