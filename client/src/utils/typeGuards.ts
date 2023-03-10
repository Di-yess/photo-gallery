import axios, { AxiosError } from 'axios';

export const errorGuard = (err: unknown) => {
  if (axios.isAxiosError(err)) return err as AxiosError
  else if (err instanceof Error) return err as Error;
  return 'Unknown error';
};
