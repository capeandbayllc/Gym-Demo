import {InputInterface} from "~/api/mutations/resolvers/ResolverInterfaces";

export function onCompleted(user: any, args: InputInterface, {mirageSchema}: any) {
    const tableName: string = `${user.user_type}s`;
    const schema: any = mirageSchema[tableName];
    const reflectData = schema.findBy({ userId: user.id });

    if (reflectData === null) {
        schema.create(Object.assign({}, args.input, { userId: user.id, id: void 0 }));
    } else {
        reflectData.update(args.input);
    }
}

export {apply} from "~/api/mutations/resolvers/update.default";
