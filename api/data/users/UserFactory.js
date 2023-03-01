import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

// https://miragejs.com/docs/main-concepts/factories/

export const UserFactory = Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  email: faker.internet.email,
  phone: faker.phone.number("###-###-###"),
  // created_at: faker.date.past, //DISABLED BC IT BREAKS MUTATIONS.
});
