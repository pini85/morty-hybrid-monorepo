import { ICharacter } from "@/types/character";
export interface ISearchProps {
  onSearchChange: (name: string) => void;
  characters: ICharacter[];
}
