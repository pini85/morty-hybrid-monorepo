import React, { FC } from "react";
import { Container } from "./CharacterSuggestion.styles";
import { ICharacterSuggestion } from "./CharacterSuggestion.types";
const CharacterSuggestion: FC<ICharacterSuggestion> = ({ name, cb }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    cb(e.currentTarget.innerText);
  };
  return <Container onClick={handleClick}>{name}</Container>;
};

export default CharacterSuggestion;
