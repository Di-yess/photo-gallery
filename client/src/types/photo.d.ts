import { IUser } from './user';

export type Photo = {
  id: number;
  name: string;
  src: string;
  x?: number;
  y?: number;
};

export type ImagesInitState = {
  images: Image[] | null;
  counter: number;
  status: string | null;
  error: string | null;
};

export interface Image {
  id: number;
  name: string;
  link: string;
}

export interface IExtendedImage {
  id: number;
  name: string;
  description: string;
  link: string;
  coordX: number;
  coordY: number;
  userId: number;
  createdAt: Date;
  user: IUser;
  comments: IComment[];
  likes: number;
  likedBefore: boolean;
}

export type IFetchExtendedImage = IExtendedImage | 'loading' | 'error';

export interface IComment {
  id: number;
  text: string;
  createdAt: Date;
  user: IUser;
}
