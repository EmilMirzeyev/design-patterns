import { ICharacter } from "../interfaces/i_character";

export abstract class BaseCharacter implements ICharacter {
  name: string;
  protected health: number;
  protected strength: number;
  protected defense: number;
  protected agility: number;

  constructor(
    name: string,
    health: number,
    strength: number,
    defense: number,
    agility: number
  ) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
    this.agility = agility;
  }

  getHealth(): number {
    return this.health;
  }

  getStrength(): number {
    return this.strength;
  }

  getDefense(): number {
    return this.defense;
  }

  getAgility(): number {
    return this.agility;
  }

  describe(): string {
    return `${this.name} - Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}, Agility: ${this.agility}`;
  }
}
