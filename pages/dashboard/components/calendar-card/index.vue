<template>
    <dashboard-card :title-icon="CalendarIcon" :title="month" class="flex flex-col justify-between bg-black">
        <Datepicker
            v-model="date"
            inline
            menu-class-name="dp-custom-menu bg-black"
            calendar-class-name="dp-custom-calendar bg-black"
            :day-class="getDayClass"
            auto-apply
            disable-month-year-select
            :enable-time-picker="false"
            :day-names="dayNames"
            @update-month-year="handleMonthYear" 
            arrownavigation
            dark
        />
        <div class="calendar-footer">
            <div class="calendar-footer-labels">
                <div class="-md:text-xs">
                    <span class="text-accent-focus mr-2">●</span>
                    PT
                </div>
                <div class="-md:text-xs">
                    <span class="text-info mr-2">●</span>
                    Yoga
                </div>
                <div class="-md:text-xs">
                    <span class="text-warning mr-2">●</span>
                    Cycle
                </div>
            </div>
            
        </div>
    </dashboard-card>
</template>
<style scoped>
.calendar-footer {
    @apply h-12 bg-black flex justify-between items-center px-5 rounded-b-xl;
    .calendar-footer-labels {
        @apply flex items-center gap-5;
    }
}
</style>
<style>
.dp-custom-menu {
    @apply bg-black grid p-6 border-none;
}
.dp-custom-calendar {
    .dp__calendar_header {
        @apply text-base-content/80 font-light w-full mt-2;
    }
    .dp__calendar_header_separator {
        @apply bg-transparent;
    }
    .dp__calendar {
        @apply w-[20rem];
    }
    .dp__calendar_item {
        @apply text-base-content flex flex-col items-center w-full;
        &::after {
            content: "";
            @apply w-1.5 h-1.5 rounded-full;
            @apply mt-1;
        }
        &:has(.event-yoga)::after {
            @apply bg-secondary;
        }
        &:has(.event-pt)::after {
            @apply bg-accent-focus;
        }
        &:has(.event-cycle)::after {
            @apply bg-warning;
        }
    }

}
</style>
<script setup>
import { CalendarIcon } from '~~/components/icons'
import DashboardCard from '../dashboard-card.vue'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());

const yoga = ["2023-02-01", "2023-02-02", "2023-02-05"]
const pt = ["2023-02-17", "2023-02-18"]
const cycle = ["2023-03-01", "2023-02-10"]
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const page = ref(new Date());

const handleMonthYear = ({ instance, month, year }) => {
    page.value = new Date(year, month, 1)
}
const month = computed(() => {
    const options = { month: "long" };
    return Intl.DateTimeFormat("en-US", options).format(page.value);
})

const getDayClass = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = (month + "").padStart(2, "0");
    let day = date.getDate();
    day = (day + "").padStart(2, "0");
    let str = `${year}-${month}-${day}`;
    if (yoga.indexOf(str) > -1) {
        return 'event-yoga'
    }
    if (pt.indexOf(str) > -1) {
        return 'event-pt'
    }
    if (cycle.indexOf(str) > -1) {
        return 'event-cycle'
    }
    return ''
};
</script>
