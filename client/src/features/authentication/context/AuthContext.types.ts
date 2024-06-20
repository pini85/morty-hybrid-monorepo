import { IAuthResponse, IUser, UserRoles } from "@shared/types/index";
export interface IAuthContextType {
  user: IUser | null;
  role: UserRoles;
  isAuthenticated: boolean;
  login: (userData: IAuthResponse) => void;
  logout: () => void;
}
