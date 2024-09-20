import { CharacterDecorator } from "../abtsraction/base_character_decorator";

export class StrengthDecorator extends CharacterDecorator {
  getStrength(): number {
    return this.character.getStrength() + 15;
  }

  describe(): string {
    return `${this.character.describe()} [Strength Boost +15]`;
  }
}
