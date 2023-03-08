import { Request } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createAt?: Date;
}

export interface IUserRequest extends Request {
  user: {
    id: number;
    email: string;
    name: string;
  };
}
