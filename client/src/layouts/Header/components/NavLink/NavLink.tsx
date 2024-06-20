import { FC } from "react";
import { INavLinkProps } from "./NavLink.types";
import * as S from "./NavLink.styles";

const NavLink: FC<INavLinkProps> = ({ children, to, ...props }) => {
  return (
    <S.Link to={to} {...props}>
      {children}
    </S.Link>
  );
};
export default NavLink;
