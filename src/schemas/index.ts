export const typeDefs = `#graphql
  type Query {
    apiStatus: ApiStatus
  }

  type ApiStatus {
    status: String
  }
`;
