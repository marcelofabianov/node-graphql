export const typeDefs = `#graphql
  type Query {
    apiStatus: ApiStatus
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type User {
    name: String!
    email: String!
    password: String!
  }

  type ApiStatus {
    status: String
  }
`;
