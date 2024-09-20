import { CharacterDecorator } from "../abtsraction/base_character_decorator";

export class AgilityDecorator extends CharacterDecorator {
  getAgility(): number {
    return this.character.getAgility() + 5;
  }

  describe(): string {
    return `${this.character.describe()} [Agility Boost +5]`;
  }
}
