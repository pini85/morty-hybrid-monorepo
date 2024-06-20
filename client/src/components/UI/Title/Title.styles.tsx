import styled from "styled-components";

export const Container = styled.h1`
  text-align: center;
  padding: 2rem 0;
`;

export const FirstLetter = styled.span`
  position: relative;
  text-transform: capitalize;
  font-size: var(--font-size-extra-large);
  color: var(--secondary-color);
  letter-spacing: 5px;

  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    left: -3px;
    height: 2px;
    width: 100%;
    background: var(--secondary-color);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 2px;
    height: 2px;
    width: 70%;
    background: var(--text-white);
  }
`;
export const RestOfTitle = styled.span`
  color: var(--text-white);
  font-size: var(--font-size-extra-large);
  letter-spacing: 3px;
`;
