import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";
import {getRandomInt} from "~/api/utils/number";

export const KIOSK_EMAIL = 'kiosk@gymrevenue.com';
// https://miragejs.com/docs/main-concepts/factories/
export const UserFactory = Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  email: (i) => {
    if (i === 0) {
      return 'admin@gymrevenue.com'
    } else if (i === 1) {
      return KIOSK_EMAIL;
    }

    return faker.internet.email();
  },
  phone: faker.phone.number("###-###-###"),
  // created_at: faker.date.past, //DISABLED BC IT BREAKS MUTATIONS.
  afterCreate(user, server) {
    user.update({
      notifications: server.createList("notification", getRandomInt(10)),
    })
  },
});
