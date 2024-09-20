import { ApiError } from "../../../model/api_error";
import type { ApiData } from "../../../services/implementation/api_data";
import { UserDTOGuard } from "../guard/user_dto_guard";
import { User } from "../model/user";

export class UserAdapter {
  constructor(private apiData: ApiData) {}

  async getUser(): Promise<User> {
    console.log("Fetching user data from API...");
    const fetchedData = await this.apiData.fetchData();
    console.log("Data fetched:", fetchedData);

    if (UserDTOGuard.isUserDTO(fetchedData)) {
      return new User({
        id: fetchedData.data.id,
        name: fetchedData.data.name,
        email: fetchedData.data.social.email,
      });
    } else {
      throw new ApiError(fetchedData.status, fetchedData.message);
    }
  }
}
