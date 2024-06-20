import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Link = styled(NavLink)`
  color: var(--text-white);
  text-decoration: none;

  &.active {
    color: var(--secondary-color);
    font-weight: bold;
  }

  &:hover {
    color: var(--secondary-color);
  }
`;
