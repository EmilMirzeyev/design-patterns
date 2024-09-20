import { CharacterDecorator } from "./decorators/abtsraction/base_character_decorator";
import { AgilityDecorator } from "./decorators/implementation/agility_decorator";
import { DefenseDecorator } from "./decorators/implementation/defense_decorator";
import { HealthDecorator } from "./decorators/implementation/health_decorator";
import { StrengthDecorator } from "./decorators/implementation/strength_decorator";
import { Character } from "./entities/character/implementation/character";

export class DecoratorApp {
  private warrior: Character;
  private strongWarrior: CharacterDecorator;
  private healthyStrongWarrior: CharacterDecorator;
  private fullyEquippedWarrior: CharacterDecorator;
  private ultimateWarrior: CharacterDecorator;

  constructor() {
    this.warrior = new Character("Warrior");
    this.strongWarrior = new StrengthDecorator(this.warrior);
    this.healthyStrongWarrior = new HealthDecorator(this.strongWarrior);
    this.fullyEquippedWarrior = new DefenseDecorator(this.healthyStrongWarrior);
    this.ultimateWarrior = new AgilityDecorator(this.fullyEquippedWarrior);
  }

  run() {
    this.describe();
  }

  private describe() {
    console.log(this.warrior.describe());
    console.log(this.strongWarrior.describe());
    console.log(this.healthyStrongWarrior.describe());
    console.log(this.fullyEquippedWarrior.describe());
    console.log(this.ultimateWarrior.describe());
  }
}
