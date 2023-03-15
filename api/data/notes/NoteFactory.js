import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export const NoteFactory = Factory.extend(
    {  
        title(i) {
          return `Note# ${i+1}`
        },
        note:faker.company.catchPhrase(),
        active(i) {
          return i % 2 == 0 ? true : false 
        },
        entity_type:'members',
    }   
)

