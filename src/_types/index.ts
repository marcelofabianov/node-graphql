export type UserInput = {
  name: string;
  email: string;
  password: string;
};

export type CreateUserMutationArgs = {
  input: UserInput;
};

export type ApiStatusQueryResult = {
  status: string;
};
