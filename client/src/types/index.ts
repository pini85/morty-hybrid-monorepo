export interface ILink {
  name: string;
  path: string;
}
export interface IRoleLinks {
  [key: string]: ILink[];
}
