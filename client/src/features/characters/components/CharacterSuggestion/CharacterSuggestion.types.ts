export interface ICharacterSuggestion {
  name: string;
  cb: (name: string) => void;
}
