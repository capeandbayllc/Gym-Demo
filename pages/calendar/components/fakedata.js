let time_interval_minute = 30;
let time_interval_hour = 10;

export const fakeEvent = {
  title: `Body by Brian`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor dui et mi varius, eget aliquam leo rhoncus. Sed non leo urna. Donec maximus cursus mauris, id pharetra Leo. Duis non feugiat augue.",
  event_type_id: 1,
  user_attendees: ["0a6f1214-639c-4298-b9e0-043576de34ba"],
  lead_attendees: ["305b825a-3e8a-43ee-b1b3-74ad981b3d1d"],
  location_id: "27ba8884-2252-4b37-8158-3844c987a572",
  full_day_event: false,
};

export const fakeCalendars = [
  {
    id: 1,
    title: "cool calendar",
    events: [{ ...fakeEvent, ...getTimeCouple() }],
  },
  {
    id: 2,
    title: "cool calendar",
    events: [{ ...fakeEvent, ...getTimeCouple() }],
  },
  {
    id: 3,
    title: "cool calendar",
    events: [{ ...fakeEvent, ...getTimeCouple() }],
  },
  {
    id: 4,
    title: "cool calendar",
    events: [{ ...fakeEvent, ...getTimeCouple() }],
  },
  {
    id: 5,
    title: "cool calendar",
    events: [{ ...fakeEvent, ...getTimeCouple() }],
  },
];

function getTimeCouple() {
  time_interval_hour++;
  time_interval_minute = parseInt(time_interval_minute) >= 30 ? "00" : 30;
  let time_end = parseInt(time_interval_minute) === 0 ? 30 : "00";

  let start = `2023-03-01 ${time_interval_hour}:${time_interval_minute}:00`;
  let end = `2023-03-01 ${time_interval_hour}:${time_end}:00`;

  return { start, end };
}

export const fullNames = [
  "George Hansley",
  "Jeff Raven",
  "Steve Thatcher",
  "Chris Monroe",
  "Carlos West",
  "Joe Ellis",
  "Nick Cassidy",
  "Nate Lopez",
];

export const eventTypes = [
  { id: 0, title: "event" },
  { id: 1, title: "task" },
  { id: 2, title: "service" },
  { id: 3, title: "prospect" },
];
