export interface ICharacter {
  name: string;
  getHealth(): number;
  getStrength(): number;
  getDefense(): number;
  getAgility(): number;
  describe(): string;
}
