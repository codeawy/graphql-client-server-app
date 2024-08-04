"use client";

import { useCharacters } from "@/hooks/useCharacters";
import { CharacterCard } from "./CharacterCard";
import { Character } from "@/types/Character";

const CharacterList = () => {
  const { loading, error, data } = useCharacters();
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full my-20">
      {data.characters.results.map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </div>
  );
};

export default CharacterList;
