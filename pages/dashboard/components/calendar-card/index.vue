<template>
    <dashboard-card :title-icon="CalendarIcon" title="March" class="flex flex-col justify-between">
        <mock-calendar class="mx-5 my-6"/>
        <div class="calendar-footer">
            <div class="calendar-footer-labels">
                <div>
                    <span class="text-accent-focus mr-2">●</span>
                    Deposit
                </div>
                <div>
                    <span class="text-info mr-2">●</span>
                    DirectDebit
                </div>
            </div>
            <div>Configure…</div>
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
</script>
