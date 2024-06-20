import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "18rem")};
  height: 2.5rem;
  padding: 1.5rem;
  font-size: 1.3rem;
  border: 3px solid var(--secondary-color);
  &:focus {
    outline: none;
  }
`;
