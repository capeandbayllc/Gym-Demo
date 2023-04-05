import {InputInterface} from "~/api/mutations/resolvers/ResolverInterfaces";
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";

export function apply(args: InputInterface, { mirageSchema }: any, info: any) {
  
    const id = uuidv4();

    const date = dateFormat(new Date(), "yyyy-mm-dd'T'HH:MM:ss.l'000Z'");
  
    const user = {
      id,
      ...args.input,
      created_at: date,
      updated_at: date,
    };

    const newUser = mirageSchema.users.create(user);

    return newUser;
  }

export function onError() {
    console.log(arguments)
}