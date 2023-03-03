import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";
import {getRandomInt} from "~/api/utils/number";
import {FactoryDefinition} from "miragejs/-types";

const infoTypes: Array<string> = ['info', 'default', 'success', 'warning', 'error'];
const notifyTypes: Array<string> = [
    'CALENDAR_EVENT_REMINDER',
    'NEW_CONVERSATION',
    'NEW_CHAT_MESSAGE',
    'UPDATED_CHAT_MESSAGE',
    'DEFAULT_NOTIFICATION',
    'TASK_OVERDUE',
    'PROFILE_UPDATE'
]

// https://miragejs.com/docs/main-concepts/factories/
export const NotificationFactory: FactoryDefinition = Factory.extend({
    state: infoTypes[getRandomInt(infoTypes.length)],
    text: faker.lorem.sentence(getRandomInt(5, 1)),
});
