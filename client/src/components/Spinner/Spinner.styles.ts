import styled, { keyframes } from "styled-components";
import { device } from "@/styles/breakpoints";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  animation: ${rotate} 3s linear infinite;

  //just showing an example how would you use media queries
  @media ${device.xs} {
    max-width: 150px; //
  }

  @media ${device.sm} {
    max-width: 200px;
  }

  @media ${device.md} {
    max-width: 250px;
  }

  @media ${device.lg} {
    max-width: 300px;
  }

  @media ${device.xl} {
    max-width: 350px;
  }

  @media ${device.xxl} {
    max-width: 400px;
  }
`;
