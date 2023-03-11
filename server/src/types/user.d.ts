import { Request } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserRequest extends Request {
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface IUserImage extends Express.Multer.File {
  user: {
    id: number;
    email: string;
    name: string;
    iat: number;
    exp: number;
  };
}
