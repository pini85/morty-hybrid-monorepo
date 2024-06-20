import styled from "styled-components";
import { device } from "@/styles/breakpoints";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media ${device.sm} {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  margin: 1rem 1rem;
`;

export const ButtonWrapper = styled.div`
  margin-left: 2rem;
  @media ${device.sm} {
    margin-left: 0;
    margin-top: 1rem;
  }
`;
