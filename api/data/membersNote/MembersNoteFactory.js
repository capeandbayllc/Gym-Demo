import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export const MembersNoteFactory = Factory.extend(
    {
        title(i) {
            return `Note# ${i+1}`
          },
        month:faker.date.month() + " " + faker.random.numeric() + " " + "2023",
        time(i) {
            const hours = Math.floor(Math.random() * 12) + 1;
            const minutes = Math.floor(Math.random() * 60);
            const ampm = Math.random() < 0.5 ? 'AM' : 'PM';

            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

            return `${formattedHours}:${formattedMinutes} ${ampm}`
            
          },
        alert(i) {
            return i % 2 == 0 ? true : false 
          },
        userName: faker.name.firstName,
    }
    
    
    
)

