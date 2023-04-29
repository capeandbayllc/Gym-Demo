import { GraphQLResolveInfo } from "graphql/type/definition";

interface User {
  id: string;
}

export type IdentifiableInput<T, K extends keyof T> = {
  [k in K]: T[K];
};

export interface InputInterface {
  input: IdentifiableInput<User, "id">;
}

export interface UpdateMutationResolver {
  apply: (
    args: InputInterface,
    context: object,
    info: GraphQLResolveInfo
  ) => any;
  onError?: (
    error: string,
    args: InputInterface,
    context: object,
    info: GraphQLResolveInfo
  ) => void;
  onCompleted?: (
    data: object,
    args: InputInterface,
    context: object,
    info: GraphQLResolveInfo
  ) => void;
}
