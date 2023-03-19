import {GraphQLResolveInfo} from "graphql/type/definition";

export interface IdentifiableInput {
    id?: string
}

export interface InputInterface {
    input?: IdentifiableInput
}

export interface UpdateMutationResolver {
    apply: (args: InputInterface, context: object, info: GraphQLResolveInfo) => any
    onError?: (error: string, args: InputInterface, context: object, info: GraphQLResolveInfo) => void,
    onCompleted?: (data: object, args: InputInterface, context: object, info: GraphQLResolveInfo) => void,
}
