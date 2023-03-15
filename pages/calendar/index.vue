<template>
    <div class="px-8 w-full h-fit">
        <!-- event details -->
        <div
            v-if="eventDetailsVisibibility"
            class="z-50 fixed h-screen w-screen flex items-center justify-center pointer-events-none"
        >
            <EventDetails
                :event="eventDetails"
                @outclick="resetState"
                @seemore="
                    () => {
                        eventDetailsVisibibility = false;
                        eventInformationVisibibility = true;
                    }
                "
            />
        </div>
        <!-- more in depth event information -->
        <div
            v-if="eventInformationVisibibility"
            class="z-50 fixed h-screen w-screen flex items-center justify-end right-0 top-16 pointer-events-none"
        >
            <EventInformation :event="eventDetails" @outclick="resetState" />
        </div>
        <!-- offer-up panel -->
        <div
            v-if="offerUpVisibibility"
            class="z-50 fixed h-screen w-screen flex items-center justify-end right-0 top-16 pointer-events-none"
        >
            <OfferUp :event="eventDetails" @outclick="resetState" />
        </div>

        <div
            class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center pointer-events-none bg-[#fff]/[0.1] backdrop-blur-sm calendar-style-transition"
            :class="{
                'z-50 opacity-100': eventFormVisibility,
                '-z-50 opacity-0': !eventFormVisibility,
            }"
        >
            <EventForm
                @cancel="resetState"
                @createEvent="handleCreateEvent"
                :members="members"
                :employees="employees"
                :nodeContext="emptyNodeContext"
            />
        </div>

        <!-- main content wrapper  -->
        <div
            class="border border-secondary bg-[#202020]/[0.9] rounded-3xl p-7 max-w-none flex gap-4"
        >
            <!-- left sidebar -->
            <aside class="flex flex-col gap-5 font-light !text-[0.8rem]">
                <Datepicker
                    class="calendar-date-picker"
                    menu-class-name="!bg-transparent !border-none"
                    :day-class="getDayClass"
                    month-name-format="long"
                    inline
                    auto-apply
                    :enable-time-picker="false"
                    dark
                />
                <CalendarFilterLayout
                    :title="'Locations'"
                    :isOpen="filterOptions.locations.isOpen"
                    :selected="filterOptions.locations.selected"
                    :filter_id="`locations`"
                    :options="locations"
                    :selectOption="selectOption"
                    :toggleFilterOption="toggleFilterOption"
                />
                <CalendarFilterLayout
                    :title="'Employees'"
                    :isOpen="filterOptions.employees.isOpen"
                    :selected="filterOptions.employees.selected"
                    :filter_id="`employees`"
                    :options="employees"
                    :selectOption="selectOption"
                    :toggleFilterOption="toggleFilterOption"
                />
                <CalendarFilterLayout
                    :title="'Events'"
                    :isOpen="filterOptions.event_types.isOpen"
                    :selected="filterOptions.event_types.selected"
                    :filter_id="`event_types`"
                    :options="event_types"
                    :selectOption="selectOption"
                    :toggleFilterOption="toggleFilterOption"
                />
            </aside>

            <section class="w-full !font-light !tracking-wider">
                <!-- main section heading area -->
                <div class="flex justify-between items-center w-full">
                    <h1 class="font-light text-3xl w-full">January 2088</h1>
                    <!-- filters/page actions -->
                    <div class="flex gap-2 w-full justify-end">
                        <button
                            @click="handleAddNew"
                            class="hover:bg-secondary px-5 py-1.5 rounded-xl border-2 border-secondary flex items-center gap-2 font-light text-[0.8rem] calendar-style-transition"
                        >
                            <span class="!font-light !tracking-wider"
                                >Add New
                            </span>
                            <PlusIcon class="w-4 fill-white" />
                        </button>
                        <input
                            placeholder="Search"
                            class="search-input"
                            type="text"
                        />
                    </div>
                </div>
                <GrCalendar
                    :events="getFormattedEvents"
                    @clickEventNode="handleCalendarEvent"
                    @clickEmptyNode="handleAddNew"
                    v-if="
                        (getFormattedEvents.length || events.length) &&
                        showCalendar
                    "
                />
                <div
                    class="h-[76vh] flex flex-col justify-center"
                    v-if="events.length === 0"
                >
                    <spinner />
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
import { PlusIcon, BiCaretIcon } from "~~/components/icons";
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import { isEqual, set } from "date-fns";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import "@vuepic/vue-datepicker/dist/main.css";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import CalendarFilterLayout from "./components/partials/calendar-filter-layout.vue";

import EventDetails from "./components/partials/event-details.vue";
import EventInformation from "./components/partials/event-information.vue";
import Datepicker from "@vuepic/vue-datepicker";
import EventForm from "./components/event-form.vue";

// import "@vuepic/vue-datepicker/dist/main.css";
// import { calendarEvents as events } from "./helpers/calendar-events";
import GrCalendar from "./components/gr-calendar.vue";
import OfferUp from "./components/partials/offer-up.vue";

/** Component State */
const activeEventsList = ref([]);
const initialized = ref(false);
const eventDetails = ref(null); // Currently selected event context
const emptyNodeContext = ref(null); // information about the empty node that was most recently clicked

/** Component Visibility State */
const eventDetailsVisibibility = ref(false);
const eventInformationVisibibility = ref(false);
const offerUpVisibibility = ref(false);
const eventFormVisibility = ref(false);

const filterOptions = ref({
    employees: {
        isOpen: false,
        selected: [],
    },
    locations: {
        isOpen: false,
        selected: [],
    },
    event_types: {
        isOpen: false,
        selected: [],
    },
});

const showCalendar = ref(true);
const eventTypes = ref([]);
const employees = ref([]);
const members = ref([]);
const leads = ref([]);
const locations = ref([]);
const event_types = ref([]);
const events = ref([]);

const resetState = () => {
    eventDetailsVisibibility.value = false;
    eventInformationVisibibility.value = false;
    offerUpVisibibility.value = false;
    eventFormVisibility.value = false;
};

/** sets up state for form entry */
const handleAddNew = (node) => {
    if (eventDetailsVisibibility.value || eventInformationVisibibility.value) {
        return;
    } else {
        const startTime = new Date(node.date);
        emptyNodeContext.value = {
            start: startTime,
            dateStr: node.dateStr,
            allDay: node.allDay,
            dayEl: node.dayEl,
            jsEvent: node.jsEvent,
            view: node.view,
        };
        resetState();
        eventFormVisibility.value = true;
        console.log("node context", emptyNodeContext.value);
    }
};

const query = gql`
    query CalendarEventsQuery {
        calendarEventTypes {
            data {
                id
                name
                description
                color
                type
            }
        }
        locations(page: 0) {
            data {
                id
                name
            }
        }
        employee {
            data {
                id
                first_name
                last_name
                email
            }
        }
        users {
            data {
                id
                first_name
                last_name
                email
                profile_photo_path
            }
        }
        members {
            data {
                id
                first_name
                last_name
                email
                profile_photo_path
            }
        }
        leads {
            data {
                id
                first_name
                last_name
                email
                profile_photo_path
            }
        }
        calendarEvents {
            id
            title
            ownerId
            start
            end
            title
            description
            full_day_event
            eventTypeId
            locationId
            location {
                id
                name
            }
            type {
                id
                name
                description
                color
                type
            }
            attendees {
                id
                entity_type
                entity_data {
                    name
                    profile_photo_url
                    email
                }
            }
        }
    }
`;

const { result } = useQuery(query);

const handleCreateEvent = (form) => {
    console.log("create new event with info:", form);
    console.log("current events", activeEventsList.value);
    // activeEventsList.value = [...activeEventsList.value, { ...form }];
    const newEventObj = {
        title: form.title,
        description: form.description,
        start: form.time.start,
        end: form.time.end,
        backgroundColor: "#123456",
        eventType: form.eventType,
        instructor: form.instructor,
        member: form.member,
        notify: form.notify,
        recurring: form.recurring,
    };
    console.log("new event", newEventObj);
    activeEventsList.value.push(newEventObj);
    eventFormVisibility.value = false;
};

/** handles clicking calendar event */
const handleCalendarEvent = (e) => {
    if (eventFormVisibility.value) return; // don't proceed if something else is in context
    let eventInfo = {
        ...e._def,
        start: e._instance.range.start,
        end: e._instance.range.end,
    };
    console.log("event info", eventInfo);
    eventDetails.value = eventInfo;
    eventDetailsVisibibility.value = true;
};

/** differentiate today's date from other dates on the sidebar calendar */
const getDayClass = (date) => {
    if (
        isEqual(
            date,
            set(new Date(), {
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            })
        )
    )
        return "!rounded-full bg-secondary";
    return "";
};

watch(result, (ov, nv) => {
    if (initialized.value) return;
    initialized.value = true;
    let { calendarEvents } = result.value;
    activeEventsList.value.push(...calendarEvents);
    console.log(result.value);
});

let timeout = null;

const selectOption = (filter_id, option) => {
    showCalendar.value = false;

    if (filterOptions.value[filter_id].selected.includes(option)) {
        filterOptions.value[filter_id].selected.splice(
            filterOptions.value[filter_id].selected.indexOf(option),
            1
        );
    } else {
        filterOptions.value[filter_id].selected.push(option);
    }

    setTimeout(() => {
        showCalendar.value = true;
    }, 100);
};

const toggleFilterOption = (filter_id) => {
    filterOptions.value[filter_id].isOpen =
        !filterOptions.value[filter_id].isOpen;
};

const getFormattedEvents = computed(() => {
    const colors = ["#E4463C", "#4E3474", "#004570", "#5D5D5D"];
    let formattedEvents = [];
    for (let event of getFilteredEvents.value) {
        formattedEvents.push({
            title: event.title,
            start: event.start,
            end: event.end,
            allDay: event.full_day_event,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            extendedProps: {
                users: [...event.attendees],
                description: event.description,
            },
        });
    }

    return formattedEvents;
});

const getFilteredEvents = computed(() => {
    if (
        filterOptions.value.employees.selected.length === 0 &&
        filterOptions.value.locations.selected.length === 0 &&
        filterOptions.value.event_types.selected.length === 0
    ) {
        return events.value;
    }

    let filteredEvents = [];

    for (let event of events.value) {
        if (
            filterOptions.value.employees.selected.includes(
                event.eventTypeId
            ) ||
            filterOptions.value.locations.selected.includes(event.ownerId) ||
            filterOptions.value.event_types.selected.includes(event.locationId)
        ) {
            filteredEvents.push(event);
        }
    }

    return filteredEvents;
});

onMounted(async () => {
    if (!timeout) {
        timeout = setTimeout(() => {
            console.log("GQL Result:", result.value);
            eventTypes.value = result.value.calendarEvents.data;
            employees.value = result.value.employee.data;
            // members.value = result.value.members.data;
            leads.value = result.value.leads.data;
            locations.value = result.value.locations.data;
            event_types.value = result.value.calendarEventTypes.data;
            events.value = result.value.calendarEvents;
        }, 2000);
    }
    //   await nextTick();
    //   window.dispatchEvent(new Event("resize"));
});

onUnmounted(() => clearTimeout(timeout));
</script>

<style scoped>
.search-input {
    @apply !text-white py-1 p-2 rounded-xl border-2 border-transparent text-[0.8rem] !font-light !tracking-wider w-[50%] bg-secondary/[0.4] placeholder:!text-white/[0.8] calendar-style-transition;
}

.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
