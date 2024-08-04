import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
    }
  }
`;

export const useCharacter = (id: string) => {
  return useQuery(GET_CHARACTER, {
    variables: { id },
  });
};
