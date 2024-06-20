import styled from "styled-components";

export const Button = styled.button`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-dark);
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s;
  outline: transparent;

  &:hover {
    background-color: var(--secondary-color-light);
    transform: translateY(-3px);
  }
`;
