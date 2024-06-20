import { Button } from "@/components/UI/Button/Button.styles.ts";
import { useAuthContext } from "@/features/authentication/hooks/useAuthContext";
import { getLinksByRole } from "./utils/links";
import { ILink } from "@/types/index";
import * as S from "./Header.styles.ts";
import NavLink from "./components/NavLink/NavLink.tsx";

const Header = () => {
  const { logout, user } = useAuthContext();
  const role = user?.role;
  const links: ILink[] = getLinksByRole(role);

  return (
    <S.Header>
      <S.Nav>
        <S.Ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </S.Ul>
      </S.Nav>
      {user && <Button onClick={logout}>Log Out</Button>}
    </S.Header>
  );
};
export default Header;
