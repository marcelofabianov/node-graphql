import { ApolloServer, gql } from 'apollo-server';
import pino from 'pino';
import dotenv from 'dotenv';

dotenv.config();

const logger = pino();

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => 'Hello, world!',
    },
  },
  cache: 'bounded',
  persistedQueries: false,
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
