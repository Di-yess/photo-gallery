import { Image } from './user.d';

export interface IUserToken {
  id: number;
  name: string;
  email: string;
  avatar: { link: string } | null;
  images: Image[];
  token: string;
}

export interface IUserInfo {
  email: string;
  password: string;
}

export type UserInitState = {
  id: number | null;
  name: string | null;
  email: string | null;
  avatar: { link: string | null } | null;
  images: Image[] | null;
  status: string | null;
  error: string | null;
};
