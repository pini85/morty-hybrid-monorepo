import { ICharacter } from "@/types/character";
export interface CardProps {
  character: ICharacter;
  handleOnClick?: () => void;
}
