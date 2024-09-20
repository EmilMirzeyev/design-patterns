export interface IUserDTO {
  data: {
    id: number;
    name: string;
    age: number;
    social: {
      email: string;
      facebook: string;
      phone: string;
    };
  };
}
