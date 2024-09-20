import { CharacterDecorator } from "../abtsraction/base_character_decorator";

export class HealthDecorator extends CharacterDecorator {
  getHealth(): number {
    return this.character.getHealth() + 30;
  }

  describe(): string {
    return `${this.character.describe()} [Health Boost +30]`;
  }
}
