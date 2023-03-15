export interface GraphQLMutationInterface<M> {
    mutation: M
}

export enum UserTypesEnum {
    EMPLOYEE = 'employee',
    MEMBER = 'member',
    CUSTOMER = 'customer',
    LEAD = 'lead',
}
