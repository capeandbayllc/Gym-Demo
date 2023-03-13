import {DocumentNode, print} from "graphql/language";
import axios from "axios";

export function request(query: DocumentNode, parameters: object = {}, uri: string = '/graphql'): Promise<any> {
    return axios.post(uri, { query: print(query), variables: parameters });
}
