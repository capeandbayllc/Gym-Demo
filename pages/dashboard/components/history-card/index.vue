<template>
    <dashboard-card
        :title-icon="CheckInIcon"
        title="Member History Check-In"
    >
        <div class="member-history-container">
            <div class="flex flex-row w-full justify-between">
                <div class="flex flex-row gap-5">
                    <div class="history-meta bg-base-content/30">
                        Gym Location 1
                    </div>
                    <div class="history-meta bg-secondary/50">
                        Active Members: <span class="text-secondary font-bold">54</span>
                    </div>
                </div>
                <search-input size="md" neutral border="neutral" class="place-end"/>
            </div>
            <data-table
                :columns="columns"
                :row-component="HistoryTableRow"
                :data="mock"
                class="h-40 overflow-y-auto mt-6 text-xs"
            />
        </div>
    </dashboard-card>
</template>
<style scoped>
.member-history-container {
    @apply pt-6 px-5;
    .history-meta {
        @apply rounded text-base py-2 px-3;
    }
}
</style>
<script setup>
import DashboardCard from '../dashboard-card.vue'
import { CheckInIcon } from '@/components/icons'
import HistoryTableRow from './history-table-row.vue';

const columns = ["Date and Time", "Member Name", "Event", "Membership Status", ""]
const mock = [{
    id: 1,
    date: "August 1",
    time: "10:00am",
    name: "Donna Alafonzo",
    event: "PT",
    membership: 'premimum'
}, {
    id: 2,
    date: "August 1",
    time: "10:00am",
    name: "Chris Italianzo",
    event: "Group Class",
    membership: 'basic'
}, {
    id: 3,
    date: "August 1",
    time: "10:00am",
    name: "Tyler Andrezano",
    event: "PT",
    membership: 'gold'
}, {
    id: 4,
    date: "August 1",
    time: "10:00am",
    name: "Chris Italianzo",
    event: "Group Class",
    membership: 'basic'
}, {
    id: 5,
    date: "August 1",
    time: "10:00am",
    name: "Tyler Andrezano",
    event: "PT",
    membership: 'gold'
}]
</script>
