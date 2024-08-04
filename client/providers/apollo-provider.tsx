"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
