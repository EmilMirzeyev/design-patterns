import { BaseCharacter } from "../abstraction/base_character";

export class Character extends BaseCharacter {
  constructor(name: string) {
    super(name, 100, 20, 10, 15);
  }
}
