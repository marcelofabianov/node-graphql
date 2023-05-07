import {
  UserInput,
  CreateUserMutationArgs,
  ApiStatusQueryResult,
} from './_types';

export const resolvers = {
  Query: {
    apiStatus: (): ApiStatusQueryResult => ({
      status: 'The API is working correctly.',
    }),
  },
  Mutation: {
    createUser: (_: any, { input }: CreateUserMutationArgs): UserInput => {
      return {
        name: input.name,
        email: input.email,
        password: input.password,
      };
    },
  },
};
