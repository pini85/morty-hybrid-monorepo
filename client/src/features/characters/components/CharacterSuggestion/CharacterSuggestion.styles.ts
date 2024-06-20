import styled from "styled-components";

export const Container = styled.li`
  justify-content: flex-start;
  width: 18rem;
  background: var(--primary-color);
  border-left: 1px solid white;
  border-right: 1px solid white;
  padding: 0 3px;
  font-size: 1.5rem;
  color: var(--text-white);
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: var(--text-dark);
    background-color: var(--secondary-color-light);
  }
`;
