<template>
    <dashboard-card :title-icon="CalendarIcon" title="March" class="flex flex-col justify-between">
        <!-- <Datepicker v-model="date" inline auto-apply dark/> -->
        <mock-calendar class="m-6"/>
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
            <div class="-md:text-xs">Configure…</div>
        </div>
    </dashboard-card>
</template>
<style scoped>
.calendar-footer {
    @apply h-12 bg-secondary flex justify-between items-center px-5;
    .calendar-footer-labels {
        @apply flex items-center gap-5;
    }
}
</style>
<script setup>
import { CalendarIcon } from '~~/components/icons'
import DashboardCard from '../dashboard-card.vue'
import MockCalendar from './mock-calendar.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());
</script>
