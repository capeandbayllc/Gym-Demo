<template>
  <club-card :title-icon="CalendarIcon" title="Calendars">
    <div class="calendar-container">
      <div class="col-span-1 -lg:col-span-2 m-10 mb-0">
        <div
          class="flex flex-col space-y-4 justify-center items-center border rounded-lg border-base-content"
        >
          <date-picker
            dark
            inline
            :auto-apply="true"
            :enable-time-picker="false"
            disable-month-year-select
            menu-class-name="club-calender-card-menu"
            v-model="selectedDate"
            @change="onDateChange"
            :disabled="true"
          />
        </div>
      </div>
      <div class="col-span-1 -lg:col-span-2">
        <div class="calendar-list-container">
          <div>
            <div class="flex items-center justify-between h-full">
              <div
                class="relative w-1/2 flex flex-col justify-left text-left text-base-content"
              >
                <div class="grid grid-cols-3 gap-1 items-center">
                  <div class="col-span-1 flex items-center justify-center">
                    <arrow-icon
                      direction="left"
                      class="h-fit cursor-pointer"
                      @click="previousMonth"
                    />
                  </div>
                  <div class="col-span-1 flex items-center justify-center">
                    <span>{{ monthNames[selectedMonth] }}</span>
                  </div>
                  <div class="col-span-1 flex items-center justify-center">
                    <arrow-icon
                      direction="right"
                      class="h-fit cursor-pointer"
                      @click="nextMonth"
                    />
                  </div>
                </div>
              </div>
              <div class="absolute right-5 flex items-center">
                <FormFilterButton>
                  <template v-slot:filters>
                    <div class="flex space-x-5">
                      <SwitchGroup as="div" class="flex items-center">
                        <Switch
                          v-model="filters.location"
                          class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                        >
                          <span
                            aria-hidden="true"
                            class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              'bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                            ]"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              filters.location
                                ? 'translate-x-5 bg-secondary border-secondary'
                                : 'translate-x-0 bg-base-content/80 border-base-content/80',
                              'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                            ]"
                          />
                        </Switch>
                        <SwitchLabel as="span" class="ml-3 text-sm">
                          <span
                            class="font-medium"
                            :class="
                              filters.location
                                ? 'text-secondary'
                                : 'text-neutral-content'
                            "
                            >Location</span
                          >
                        </SwitchLabel>
                      </SwitchGroup>

                      <SwitchGroup as="div" class="flex items-center">
                        <Switch
                          v-model="filters.type"
                          class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                        >
                          <span
                            aria-hidden="true"
                            class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              'bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                            ]"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              filters.type
                                ? 'translate-x-5 bg-secondary border-secondary'
                                : 'translate-x-0 bg-base-content/80 border-base-content/80',
                              'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                            ]"
                          />
                        </Switch>
                        <SwitchLabel as="span" class="ml-3 text-sm">
                          <span
                            class="font-medium"
                            :class="
                              filters.type
                                ? 'text-secondary'
                                : 'text-neutral-content'
                            "
                            >Type</span
                          >
                        </SwitchLabel>
                      </SwitchGroup>

                      <SwitchGroup as="div" class="flex items-center">
                        <Switch
                          v-model="filters.alert"
                          class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                        >
                          <span
                            aria-hidden="true"
                            class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              'bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                            ]"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              filters.alert
                                ? 'translate-x-5 bg-secondary border-secondary'
                                : 'translate-x-0 bg-base-content/80 border-base-content/80',
                              'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                            ]"
                          />
                        </Switch>
                        <SwitchLabel as="span" class="ml-3 text-sm">
                          <span
                            class="font-medium"
                            :class="
                              filters.alert
                                ? 'text-secondary'
                                : 'text-neutral-content'
                            "
                            >Alert</span
                          >
                        </SwitchLabel>
                      </SwitchGroup>

                      <SwitchGroup as="div" class="flex items-center">
                        <Switch
                          v-model="filters.segments"
                          class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                        >
                          <span
                            aria-hidden="true"
                            class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              'bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                            ]"
                          />
                          <span
                            aria-hidden="true"
                            :class="[
                              filters.segments
                                ? 'translate-x-5 bg-secondary border-secondary'
                                : 'translate-x-0 bg-base-content/80 border-base-content/80',
                              'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                            ]"
                          />
                        </Switch>
                        <SwitchLabel as="span" class="ml-3 text-sm">
                          <span
                            class="font-medium"
                            :class="
                              filters.segments
                                ? 'text-secondary'
                                : 'text-neutral-content'
                            "
                            >Segments</span
                          >
                        </SwitchLabel>
                      </SwitchGroup>
                    </div>
                  </template>
                </FormFilterButton>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <calendar-list :columns="columns" :items="items"></calendar-list>
          </div>
        </div>
      </div>
    </div>
  </club-card>
</template>
<script setup>
import { ref, computed, watch, reactive } from "vue";
import { CalendarIcon } from "~~/components/icons";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ArrowIcon } from "~~/components/icons";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import ClubCard from "../club-card.vue";
import CalendarList from "./calendar-list";
import { request } from "~/api/utils/request";
import location from "~/api/queries/location";

onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});

const filters = ref({
  location: false,
  type: false,
  alert: false,
  segments: false,
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();
const selectedMonth = ref(today.getMonth());
const selectedDate = computed(
  () => new Date(today.getFullYear(), selectedMonth.value)
);
const year = computed(() => selectedDate.value.getFullYear());

const columns = [
  {
    label: "Event",
    class: "text-secondary text-center w-[30%]",
  },
  {
    label: "Time",
    class: "text-secondary text-center w-[30%]",
  },
  {
    label: "Location",
    class: "text-secondary text-center w-[40%]",
  },
];

const items = ref([
  {
    id: 1,
    event_name: "PT Class",
    event_time: "1:00 PM",
    event_location: "",
  },
  {
    id: 2,
    event_name: "PT Class",
    event_time: "1:00 PM",
    event_location: "",
  },
  {
    id: 3,
    event_name: "PT Class",
    event_time: "1:00 PM",
    event_location: "",
  },
  {
    id: 4,
    event_name: "PT Class",
    event_time: "1:00 PM",
    event_location: "",
  },
  {
    id: 5,
    event_name: "PT Class",
    event_time: "1:00 PM",
    event_location: "",
  },
]);

const locationData = ref(null);
request(location.query.browse, { first: 1 }).then(({ data }) => {
  locationData.value = data.data.locations.data[0];
  items.value.forEach((e) => {
    e.event_location = locationData.value.name;
  });
});

function previousMonth() {
  selectedMonth.value--;
  if (selectedMonth.value < 0) {
    selectedMonth.value = 11;
  }
}

function nextMonth() {
  selectedMonth.value++;
  if (selectedMonth.value > 11) {
    selectedMonth.value = 0;
  }
}

function onDateChange(date) {
  selectedMonth.value = date.getMonth();
}

watch(selectedMonth, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    const newDate = new Date(today.getFullYear(), selectedMonth.value);
    selectedDate.value.setMonth(selectedMonth.value);
    selectedDate.value = reactive(new Date(newDate));
  }
});
</script>
<style scoped lang="postcss">
:deep(.dp__calendar) {
  @apply w-full;
}

:deep(.club-calender-card-menu) {
  @apply bg-transparent border-0;
}

:deep(.dp__menu_disabled) {
  @apply bg-transparent cursor-default;
}

.calendar-container {
  @apply grid grid-cols-2 gap-2;
}

.calendar-list-container {
  @apply py-[30px] pb-[0] px-[20px];
}
</style>
