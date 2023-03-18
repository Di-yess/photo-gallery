import { IExtendedImage } from 'src/types/photo';
import { Image } from './user.d';

export interface IUser {
  id: number;
  name: string;
  avatar: { link: string | null };
}

export interface IUserToken {
  id: number;
  name: string;
  email: string;
  avatar: { link: string | null };
  images: Image[];
  token: string;
}

export interface IUserLogin {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

export interface IUserRegister extends IUserLogin {
  name: string;
}

export type UserInitState = {
  id: number | null;
  name: string | null;
  email: string | null;
  avatar: { link: string | null };
  images: IExtendedImage[] | null;
  status: string | null;
  error: string | null;
};
