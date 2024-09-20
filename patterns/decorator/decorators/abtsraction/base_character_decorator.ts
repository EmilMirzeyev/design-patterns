import { ICharacter } from "../../entities/character/interfaces/i_character";

export abstract class CharacterDecorator implements ICharacter {
  protected character: ICharacter;

  constructor(character: ICharacter) {
    this.character = character;
  }

  get name(): string {
    return this.character.name;
  }

  getHealth(): number {
    return this.character.getHealth();
  }

  getStrength(): number {
    return this.character.getStrength();
  }

  getDefense(): number {
    return this.character.getDefense();
  }

  getAgility(): number {
    return this.character.getAgility();
  }

  describe(): string {
    return this.character.describe();
  }
}
