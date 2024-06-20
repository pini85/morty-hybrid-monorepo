import React from "react";
import * as S from "./Title.styles";
import { CategoryTitleProps } from "./Title.types";

const Title: React.FC<CategoryTitleProps> = ({ children }) => {
  const firstLetter = children.charAt(0).toUpperCase();
  const restOfTitle = children.slice(1);
  return (
    <S.Container>
      <S.FirstLetter>{firstLetter}</S.FirstLetter>
      <S.RestOfTitle>{restOfTitle}</S.RestOfTitle>
    </S.Container>
  );
};

export default Title;
