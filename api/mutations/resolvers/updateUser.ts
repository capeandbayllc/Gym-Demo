import {InputInterface} from "~/api/mutations/resolvers/ResolverInterfaces";

export function onCompleted(user: any, args: InputInterface, {mirageSchema}: any) {
    const tableName: string = `${user.user_type}s`;
    const schema: any = mirageSchema[tableName];
    const reflectData = schema.findBy({ user_id: user.id });
    const payload: any = args.input;

    if (reflectData === null) {
        schema.create(Object.assign({}, payload, { userId: user.id, id: void 0 }));
    } else {
        console.log(111, reflectData, reflectData.update(payload))
    }

    user.homeLocation.update({
        address1: payload.address1,
        address2: payload.address2,
        city: payload.city,
        state: payload.state,
        phone: payload.phone,
    });
}

export function onError() {
    console.log(arguments)
}

export {apply} from "~/api/mutations/resolvers/update.default";
