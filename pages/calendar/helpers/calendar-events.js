const formatRandomEventTime = (offsets = {}, date = new Date()) => {
  let dateTimeString = "year-month-dayThour:00:00";
  const dateTimeStringObject = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    // minute: date.getMinutes(),
  };

  for (let part in offsets) {
    dateTimeStringObject[part] = dateTimeStringObject[part] + offsets[part];
  }

  for (let part in dateTimeStringObject) {
    dateTimeString = dateTimeString.replace(
      part,
      parseDateTimeValue(dateTimeStringObject[part])
    );
  }

  return dateTimeString;
};

const parseDateTimeValue = (value) => (value < 10 ? `0${value}` : value);

export const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/** keeps track of ids, if you assign an id with an auto-increment they will all be unique */
let idStore = 1;

/**
 * Returns a random number between the minimum and maximum
 * @param {Number=0} min lower threshold
 * @param {Number=8} max upper threshold
 * @returns {Number} random number between thresholds
 */
const randomNumberBetween = (min = 0, max = 8) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const calendarEvents = [
  {
    title: "Class",
    start: formatRandomEventTime({ day: -1, hour: -3 }),
    end: formatRandomEventTime({ day: -1, hour: -2 }),
    backgroundColor: "#123456",
    extendedProps: {
      department: "BioChemistry",
      users: [
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
      ],
      description: "Lecture",
    },

    data: {
      foo: "bar",
    },
  },
  {
    title: "Priority One",
    start: formatRandomEventTime({ day: 1, hour: 3 }),
    end: formatRandomEventTime({ day: 1, hour: 7 }),
    backgroundColor: "#12345",
    extendedProps: {
      department: "BioChemistry",
      users: [
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
      ],
      description: "Lecture",
    },

    data: {
      foo: "bar",
    },
  },
  {
    title: "To Do Two",
    start: formatRandomEventTime({ day: 2, hour: -2 }),
    end: formatRandomEventTime({ day: 2, hour: 1 }),
    backgroundColor: "#123456",
    baal: "baal",
    extendedProps: {
      users: [],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
  {
    title: "To Do Three",
    start: formatRandomEventTime({ day: 3, hour: -1 }),
    extendedProps: {
      status: "done",
    },
    backgroundColor: "#123456",
    extendedProps: {
      foo: "bar",
      users: [
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
      ],
    },
  },
  {
    title: "Birthday Party",
    start: formatRandomEventTime({ day: -1 }),
    end: formatRandomEventTime({ day: -1, hour: 2 }),
    backgroundColor: "#6E40CF",
    extendedProps: {
      users: [
        { name: "lalala", image: "" },
        { name: "lalala", image: "" },
      ],
      foo: "bar",
      description: "Lecture",
    },
  },
];
