import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";
import {getRandomInt} from "~/api/utils/number";
import {FactoryDefinition} from "miragejs/-types";

const infoTypes: Array<string> = ['info', 'default', 'success', 'warning', 'error'];

// https://miragejs.com/docs/main-concepts/factories/
export const NotificationFactory: FactoryDefinition = Factory.extend({
    state: infoTypes[getRandomInt(infoTypes.length)],
    text: faker.lorem.sentence(getRandomInt(5, 1)),
});
