import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

// https://miragejs.com/docs/main-concepts/factories/
export const LocationFactory = Factory.extend({
  name: faker.company.name(),
  state: faker.address.stateAbbr,
  city: faker.address.city(),
  zip: faker.address.zipCode(),
  address1: faker.address.street,
  phone: faker.phone.number("###-###-###"),
  // created_at: faker.date.past, //DISABLED BC IT BREAKS MUTATIONS.
});
