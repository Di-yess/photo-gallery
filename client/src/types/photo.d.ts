import { IUser } from './user';

export type Photo = {
  id: number;
  name: string;
  src: string;
  x?: number;
  y?: number;
};

export interface Image {
  id: number;
  link: string;
}

export interface IExtendedImage {
  id: number;
  name: string;
  description: string;
  coordX: number;
  coordY: number;
  userId: number;
  createdAt: Date;
  user: IUser;
  comments: IComment[];
  likes: number;
  likedBefore: boolean;
}

export interface IComment {
  id: number;
  text: string;
  createdAt: Date;
  user: IUser;
}
