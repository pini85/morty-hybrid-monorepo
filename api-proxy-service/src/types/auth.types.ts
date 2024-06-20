import { Request } from "express";
import { IUser } from "@shared/types/index";

export interface AuthRequest extends Request {
  user?: IUser;
}
