/** TIME CONSTANTS */
const MS_IN_SECONDS = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MS_IN_MINUTE = MS_IN_SECONDS * SECONDS_IN_MINUTE;
const MS_IN_HOUR = MS_IN_MINUTE * MINUTES_IN_HOUR;

export const formatRandomEventTime = (offsets = {}, date = new Date()) => {
  let dateTimeString = "year-month-dayThour:00:00";
  const dateTimeStringObject = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
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

export const parseHour = (date) => {
  const time = new Date(date).getHours();

  return time < 10 ? `0${time}` : time;
};

export const parseMinutes = (date) => {
  const time = new Date(date).getMinutes();

  return time < 10 ? `0${time}` : time;
};

/**
 * Returns a random number between the minimum and maximum
 * @param {Number=0} min lower threshold
 * @param {Number=8} max upper threshold
 * @returns {Number} random number between thresholds
 */
export const randomNumberBetween = (min = 0, max = 8) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Adds the specified number of minutes to the passed date
 * @param {Date} date operator
 * @param {Number} minutes amount of minutes to add
 * @returns {Date} with specified minutes added
 */
export const addMinutesToDate = (date = new Date(), minutes = 30) => {
  return new Date(date.getTime() + minutes * MS_IN_MINUTE);
};

/**
 *  Format date to a standard format - all arguments are optional
 * @param {Date} date date to format
 * @param {String|Number} deliminator delimination character
 * @returns {String} formatted YYYY-MM-DD but with specified deliminator instead of dash (if specified)
 */
export const formatYYYYMMDD = (date = new Date(), deliminator = "-") => {
  let year = parseInt(date.getFullYear());
  let month = parseInt(date.getMonth() + 1);
  let day = parseInt(date.getDate());
  return [year, month, day].join(deliminator);
};

export const formatHHMM = (date = new Date(), deliminator = ":") => {
  let hour = date.getHours();
  let minute = date.getMinutes();
  return [hour, minute].join(deliminator);
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

export const getDiffToEndDate = (endDate) => {
  let prepend = null,
    append = null;

  if (endDate) {
    endDate = new Date(endDate);
    const dateString = `${getDateString(endDate.getDate())} of ${months[
      endDate.getMonth()
    ]
      .slice(0, 1)
      .toUpperCase()}${months[endDate.getMonth()].slice(
      1
    )}, ${endDate.getFullYear()}`;
    const today = new Date();
    const diff = endDate - today;
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (diffDays < -2) {
      prepend = "finished on";
      append = dateString;
    } else if (diffDays === -2) {
      prepend = "finished";
      append = "day before yesterday";
    } else if (diffDays === -1) {
      prepend = "finished";
      append = "yesterday";
    } else if (diffDays === 0) {
      prepend = diff > 0 ? "finished" : "finishes";
      append = "today";
    } else if (diffDays === 1) {
      prepend = "finishes";
      append = "tomorrow";
    } else if (diffDays === 2) {
      prepend = "finishes";
      append = "day after tomorrow";
    } else {
      prepend = "finishes on";
      append = dateString;
    }
  }

  return { prepend, append };
};

export const getDateString = (date) => {
  let dateStr = `${date}`;
  if (dateStr[dateStr.length - 1] === "1" && (date < 10 || date > 19)) {
    dateStr = `${dateStr}st`;
  } else if (dateStr[dateStr.length - 1] === "2" && (date < 10 || date > 19)) {
    dateStr = `${dateStr}nd`;
  } else if (dateStr[dateStr.length - 1] === "3" && (date < 10 || date > 19)) {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

export const getTimeString = (time) => {
  time = new Date(time);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const ampm = hour < 12 ? "AM" : "PM";

  return `${hour <= 12 ? hour : hour - 12}:${
    minute < 10 ? `0${minute}` : minute
  } ${ampm}`;
};
