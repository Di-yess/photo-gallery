export type Photo = {
  id: number;
  name: string;
  src: string;
  x?: number;
  y?: number;
};

export type Image = {
  id: number;
  name: string;
  description: string;
  coordX: number;
  coordY: number;
  userId: number;
  createdAt: Date;
  // user, comments, likes <----write all types
};
