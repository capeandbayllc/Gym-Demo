import {InputInterface} from "~/api/mutations/resolvers/ResolverInterfaces";
import { v4 as uuidv4 } from "uuid";
import dateFormat from "dateformat";

export function apply(args: InputInterface, { mirageSchema }: any, info: any) {

    console.log('CRETING USER')
  
    const id = uuidv4();

    const date = dateFormat(new Date(), "yyyy-mm-dd'T'HH:MM:ss.l'000Z'");
  
    const user = {
      id,
      ...args.input,
      created_at: date,
      updated_at: date,
    };

    console.log(user)

    const tableName: string = `users`;
    const schema: any = mirageSchema[tableName];
    const payload: any = user;
    const newUser = schema.create(Object.assign({}, payload, { userId: user.id }));
    // const newUser = mirageSchema.users.create(user);

    return newUser;
  }

export function onError() {
    console.log(arguments)
}