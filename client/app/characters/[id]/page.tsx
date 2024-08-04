"use client";

import { useCharacter } from "@/hooks/useCharacter";

const Character = ({ params: { id } }: { params: { id: string } }) => {
  const { loading, error, data } = useCharacter(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.character.name}</h1>
    </div>
  );
};

export default Character;

// ** Server Component
// ** Client Client useParams
