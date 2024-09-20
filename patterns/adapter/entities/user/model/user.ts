import type { IUser } from "../interfaces/i_user";

export class User implements IUser {
  public id: number;
  public name: string;
  public email: string;

  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
