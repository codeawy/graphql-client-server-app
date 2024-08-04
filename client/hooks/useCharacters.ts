import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

export const useCharacters = () => {
  return useQuery(GET_CHARACTERS);
};
