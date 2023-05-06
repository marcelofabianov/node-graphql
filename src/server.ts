import dotenv from 'dotenv';
import pino, { Logger } from 'pino';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const API_PORT = parseInt(process.env.API_PORT || '4000');
const API_URL = process.env.API_URL || 'http://localhost';

const logger: Logger = pino();

async function main() {
  await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: API_PORT },
  });

  logger.info(`🚀 Server ready`);
  logger.info(`Query at: ${API_URL}:${API_PORT}`);
}

main();
