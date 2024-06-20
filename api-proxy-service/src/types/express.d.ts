import { IUser } from "@shared/types/index";

declare namespace Express {
  export interface Request {
    user?: IUser;
  }
}
