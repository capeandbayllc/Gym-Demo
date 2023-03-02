import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export const MemberFactory = Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  email: faker.internet.email,
  phone: faker.phone.number('+1-###-###-####'),
  status: true,
});
