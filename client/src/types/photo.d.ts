import { IUser } from './user';

export type Photo = {
  id: number;
  name: string;
  src: string;
  x?: number;
  y?: number;
};

export type ImageUploadInfo = {
  name: string;
  description: string;
  x: string;
  y: string;
};

export type ImagesInitState = {
  images: Image[];
  status: string | null;
  error: string | null;
  uploadImage: {
    status: string | null;
    error: string | null;
  };
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
  _count: { likes: number };
  likedBefore: boolean;
}

export type IFetchExtendedImage = IExtendedImage | 'loading' | 'error';

export interface IComment {
  id: number;
  text: string;
  createdAt: Date;
  user: IUser;
}
