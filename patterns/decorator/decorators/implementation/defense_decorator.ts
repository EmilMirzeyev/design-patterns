import { CharacterDecorator } from "../abtsraction/base_character_decorator";

export class DefenseDecorator extends CharacterDecorator {
  getDefense(): number {
    return this.character.getDefense() + 10;
  }

  describe(): string {
    return `${this.character.describe()} [Defense Boost +10]`;
  }
}
