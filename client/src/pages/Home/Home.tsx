// src/pages/Home.tsx
import { useState } from "react";
import * as S from "./Home.styles";

import Title from "@/components/UI/Title";
import Card from "@/features/characters/components/Card";
import Search from "@/features/characters/components/Search/Search";
import Spinner from "@/components/Spinner";
import useGetCharactersByQuery from "@/features/characters/hooks/queries/useGetCharactersByQuery";
import AnimateChildren from "@/features/characters/components/AnimateChildren";
import { ICharacter } from "@/types/character";

//If I would see a performance bottle neck, I would potentially use the useMemo hook to memoize the the characters. Also useCallbacks for functions But in React 19, dont need to care about these things.
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useGetCharactersByQuery(searchQuery);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <S.Container>
      <Title>Morty Fun</Title>

      <Search onSearchChange={handleSearchChange} characters={data?.results} />
      {isLoading && <Spinner delay={0} />}

      {data && data.results.length > 0 && (
        <S.CardsContainer>
          <AnimateChildren>
            {data.results.map((character: ICharacter) => (
              <Card key={character.id} character={character} />
            ))}
          </AnimateChildren>
        </S.CardsContainer>
      )}
    </S.Container>
  );
};

export default Home;
