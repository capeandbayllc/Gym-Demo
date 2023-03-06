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

export const calendarEvents = [
    {
        title: "Priority One",
        start: formatRandomEventTime({ day: -1, hour: -3 }),
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
        parth: "jasani",
        data: {
            foo: "bar",
        },
    },
    {
        title: "Priority One",
        start: formatRandomEventTime({ day: 1, hour: 3 }),
        backgroundColor: "#12345",
        extendedProps: {
            department: "BioChemistry",
            users: [
                { name: "lalala", image: "" },
                { name: "lalala", image: "" },
            ],
            description: "Lecture",
        },
        parth: "jasani",
        data: {
            foo: "bar",
        },
    },
    {
        title: "To Do Two",
        start: formatRandomEventTime({ day: 2, hour: 2 }),
        backgroundColor: "#123456", baal: 'baal',
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
        },
    },
];