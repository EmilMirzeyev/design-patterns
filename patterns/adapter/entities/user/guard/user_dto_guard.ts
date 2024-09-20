import type { IUserDTO } from "../interfaces/i_user_dto";

export class UserDTOGuard {
  static isUserDTO(data: any): data is IUserDTO {
    return data && typeof data.data === "object" && "id" in data.data;
  }
}
