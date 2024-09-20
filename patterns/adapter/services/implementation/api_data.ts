import type { IUserDTO } from "../../entities/user/interfaces/i_user_dto";
import type { IApiData } from "../abstraction/i_api_data";

export class ApiData implements IApiData<IUserDTO> {
  async fetchData(): Promise<IUserDTO | { message: string; status: number }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: 1,
            name: "John Doe",
            age: 25,
            social: {
              email: "john@gmail.com",
              facebook: "JohnDoe",
              phone: "+123456789",
            },
          },
        });
      }, 1000);
    });
  }
}
