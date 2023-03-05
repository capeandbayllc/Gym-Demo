import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

// https://miragejs.com/docs/main-concepts/factories/
export const LocationFactory = Factory.extend({
  name(){ return  faker.company.name() },
  state(){ return ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT'][Math.floor(Math.random() * 7)] },
  // state: faker.address.stateAbbr,
  city(){ return ['Seattle', 'New York', 'Los Angeles', 'London'][Math.floor(Math.random() * 4)] },
  zip(){ return  faker.address.zipCode() },
  address1: faker.address.street,
  phone(){ return  faker.phone.number("###-###-###") },
  // created_at: faker.date.past, //DISABLED BC IT BREAKS MUTATIONS.
});
