import { UserRoles } from "@shared/types/index";
import { Paths } from "@/constants/paths";
import { ILink, IRoleLinks } from "@/types/index";

const links: IRoleLinks = {
  [UserRoles.ADMIN]: [
    { name: "Home", path: Paths.HOME },
    { name: "Admin Dashboard", path: Paths.ADMIN },
    { name: "User Dashboard", path: Paths.USER_DASHBOARD },
  ],
  [UserRoles.USER]: [
    { name: "Home", path: Paths.HOME },
    { name: "User Dashboard", path: Paths.USER_DASHBOARD },
  ],
  [UserRoles.GUEST]: [
    { name: "Home", path: Paths.HOME },
    { name: "Login", path: Paths.LOGIN },
  ],
};

export const getLinksByRole = (role: UserRoles | undefined): ILink[] => {
  if (role && links[role]) {
    return links[role];
  }
  return links[UserRoles.GUEST];
};
