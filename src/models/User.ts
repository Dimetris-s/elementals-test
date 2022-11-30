import { Color } from 'shared/types/color';

interface IUser {
  color: Color;
  name: string;
  speed: number;
  time: number;
}

export type User = IUser & {id: number};
