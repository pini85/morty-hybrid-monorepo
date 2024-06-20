import { useState, FC } from "react";
import * as S from "./Search.styles.ts";
import showAlert from "@/utils/showAlert";
import { useAuthContext } from "@/features/authentication/hooks/useAuthContext";
import FormInput from "@/components/Form/FormInput";
import CharacterSuggestion from "../CharacterSuggestion/CharacterSuggestion";
import { ICharacter } from "@/types/character";
import { ISearchProps } from "./Search.types.ts";

const MAX_SUGGESTIONS = 5;

/**
 * Search component allows users to search for characters and displays suggestions.
 *
 * @component
 * @example
 * const handleSearchChange = (query: string) => { ... };
 * const characters = [{ id: 1, name: "Rick" }, { id: 2, name: "Morty" }];
 * return (
 *   <Search onSearchChange={handleSearchChange} characters={characters} />
 * );
 *
 * @param {ISearchProps} props - The properties for the component.
 * @param {function} props.onSearchChange - Callback function to handle search input changes.
 * @param {ICharacter[]} props.characters - Array of character objects to display as suggestions.
 *
 * @returns {JSX.Element} The rendered Search component.
 */
const Search: FC<ISearchProps> = ({ onSearchChange, characters }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated } = useAuthContext();

  /**
   * Handles change in search input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input element.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAuthenticated) {
      return showAlert("You need to be logged in to search for characters");
    }
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  /**
   * Handles click on a suggestion.
   *
   * @param {string} suggestion - The clicked suggestion.
   */
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    onSearchChange(suggestion);
  };

  const shouldShowSuggestions =
    characters && characters.length > 0 && characters[0].name !== searchQuery;

  return (
    <S.Container>
      <form>
        <FormInput
          name="search"
          type="search"
          value={searchQuery}
          handleOnChange={handleChange}
          placeholder="Search for Characters"
        />
      </form>
      {shouldShowSuggestions && (
        <ul>
          {characters
            .slice(0, MAX_SUGGESTIONS)
            .map((suggestion: ICharacter) => (
              <CharacterSuggestion
                key={suggestion.id}
                name={suggestion.name}
                cb={handleSuggestionClick}
              />
            ))}
        </ul>
      )}
    </S.Container>
  );
};

export default Search;
