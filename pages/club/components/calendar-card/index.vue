<template>
    <club-card :title-icon="CalendarIcon" title="Calendars">
        <div class="calendar-container">
            <div class="col-span-1 -lg:col-span-2">
                <div class="flex flex-col space-y-4 p-5">
                    <date-picker
                            dark
                            inline
                            :auto-apply="true"
                            :enable-time-picker="false"
                            disable-month-year-select
                            calendar-cell-class-name="club-calender-card-cell"
                            menu-class-name="club-calender-card-menu"
                            v-model="selectedDate"
                            @change="onDateChange"
                            :disabled=true
                    />
                </div>
            </div>
            <div class="col-span-1 -lg:col-span-2">
                <div class="calendar-list-container">
                    <div>
                        <div class="flex items-center justify-between h-full">
                            <div class="relative w-fit flex flex-col justify-center text-left text-white">
                                <div class="grid grid-cols-3 gap-1 items-center">
                                    <div class="col-span-1 flex items-center justify-center">
                                        <arrow-icon direction="left" class="h-fit cursor-pointer" @click="previousMonth"/>
                                    </div>
                                    <div class="col-span-1 flex items-center justify-center">
                                        <span class="flex">{{ monthNames[selectedMonth] }}</span>
                                    </div>
                                    <div class="col-span-1 flex items-center justify-center">
                                        <arrow-icon direction="right" class="h-fit cursor-pointer" @click="nextMonth"/>
                                    </div>
                                </div>
                            </div>
                            <div  class="absolute right-5 flex items-center">
                                <FormFilterButton>
                                    <template v-slot:filters>
                                        <div class="flex space-x-5">
                                            <SwitchGroup as="div" class="flex items-center">
                                                <Switch v-model="filters.location" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                                    <span aria-hidden="true" :class="[filters.location ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                                </Switch>
                                                <SwitchLabel as="span" class="ml-3 text-sm">
                                                    <span class="font-medium" :class="filters.location ? 'text-[#0275c9]': 'text-[#bababa]'">Location</span>
                                                </SwitchLabel>
                                            </SwitchGroup>

                                            <SwitchGroup as="div" class="flex items-center">
                                                <Switch v-model="filters.type" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                                    <span aria-hidden="true" :class="[filters.type ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                                </Switch>
                                                <SwitchLabel as="span" class="ml-3 text-sm">
                                                    <span class="font-medium" :class="filters.type ? 'text-[#0275c9]': 'text-[#bababa]'">Type</span>
                                                </SwitchLabel>
                                            </SwitchGroup>

                                            <SwitchGroup as="div" class="flex items-center">
                                                <Switch v-model="filters.alert" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                                    <span aria-hidden="true" :class="[filters.alert ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                                </Switch>
                                                <SwitchLabel as="span" class="ml-3 text-sm">
                                                    <span class="font-medium" :class="filters.alert ? 'text-[#0275c9]': 'text-[#bababa]'">Alert</span>
                                                </SwitchLabel>
                                            </SwitchGroup>

                                            <SwitchGroup as="div" class="flex items-center">
                                                <Switch v-model="filters.segments" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                                    <span aria-hidden="true" :class="[filters.segments ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                                </Switch>
                                                <SwitchLabel as="span" class="ml-3 text-sm">
                                                    <span class="font-medium" :class="filters.segments ? 'text-[#0275c9]': 'text-[#bababa]'">Segments</span>
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
    import { ref, computed, watch, reactive } from 'vue';
    import { CalendarIcon } from '~~/components/icons'
    import '@fullcalendar/core/vdom'; // solves problem with Vite
    import FullCalendar from '@fullcalendar/vue3';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import interactionPlugin from '@fullcalendar/interaction';
    import listPlugin from '@fullcalendar/list';
    import DatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import { ArrowIcon } from '~~/components/icons';
    import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
    import ClubCard from '../club-card.vue';
    import CalendarList from './calendar-list';

    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });

    const filters = ref({
        location: false,
        type: false,
        alert: false,
        segments: false
    });

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const today = new Date();
    const selectedMonth = ref(today.getMonth());
    const selectedDate = computed(() => new Date(today.getFullYear(), selectedMonth.value));
    const year = computed(() => selectedDate.value.getFullYear());

    const columns = [
        {
            label: 'Event',
            class: 'text-secondary text-center w-[30%]'
        },
        {
            label: 'Time',
            class: 'text-secondary text-center w-[30%]',
        },
        {
            label: 'Location',
            class: 'text-secondary text-center w-[40%]'
        },
    ];

    const items = [
        {
            id:1,
            event_name: 'PT Class',
            event_time: '1:00 PM',
            event_location: 'Club #1234',
        },
        {
            id:2,
            event_name: 'PT Class',
            event_time: '1:00 PM',
            event_location: 'Club #1234',
        },
        {
            id:3,
            event_name: 'PT Class',
            event_time: '1:00 PM',
            event_location: 'Club #1234',
        },
        {
            id:4,
            event_name: 'PT Class',
            event_time: '1:00 PM',
            event_location: 'Club #1234',
        },
        {
            id:5,
            event_name: 'PT Class',
            event_time: '1:00 PM',
            event_location: 'Club #1234',
        }
    ];

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
<style scoped>
    :deep(.club-calender-card-cell) {
        padding: 20px 32px;
    }

    :deep(.dp__calendar_header) div {
        margin: 15px 15px 5px 15px;
    }

    :deep(.club-calender-card-menu) {
        background: transparent;
        border: 1px solid white;
        border-radius: 20px;
    }

    :deep(.dp__menu_disabled) {
        background: transparent;
        cursor: default;
    }

    .calendar-container {
        @apply grid grid-cols-2 gap-2;
    }

    .calendar-list-container {
        @apply py-[30px] pb-[0] px-[20px]
    }
</style>