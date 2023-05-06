import { ApolloServer, gql } from 'apollo-server';
import pino from 'pino';
import dotenv from 'dotenv';

dotenv.config();

const logger = pino();

const typeDefs = gql`
  type Query {
    getEmails: [String!]!
  }
  type Mutation {
    addEmail(email: String!): String!
  }
`;

const emails: string[] = [];

const server = new ApolloServer({
  typeDefs,
  cache: 'bounded',
  persistedQueries: false,
  resolvers: {
    Query: {
      getEmails: () => emails,
    },
    Mutation: {
      addEmail: (_, { email }) => {
        emails.push(email);
        logger.info(`Added email: ${email}`);

        return email;
      },
    },
  },
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
