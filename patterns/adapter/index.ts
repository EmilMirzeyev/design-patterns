import { UserAdapter } from "./entities/user/adapter/user_adapter";
import type { User } from "./entities/user/model/user";
import { ApiError } from "./model/api_error";
import { ApiData } from "./services/implementation/api_data";

export class AdapterApp {
  private apiData: ApiData;
  private userAdapter: UserAdapter;

  constructor() {
    this.apiData = new ApiData();
    this.userAdapter = new UserAdapter(this.apiData);
  }

  async run(): Promise<void> {
    try {
      const user = await this.fetchUser();
      this.logUser(user);
    } catch (error) {
      this.handleError(error);
    }
  }

  private async fetchUser(): Promise<User> {
    return this.userAdapter.getUser();
  }

  private logUser(user: User): void {
    console.log(user);
  }

  private handleError(error: unknown): void {
    if (error instanceof ApiError) {
      console.error(
        `Error fetching user: ${error.message} (Status: ${error.status})`
      );
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
