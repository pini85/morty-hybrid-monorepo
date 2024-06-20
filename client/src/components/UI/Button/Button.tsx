import { FC } from "react";

import { ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};
export default Button;
