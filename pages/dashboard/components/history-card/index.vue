<template>
    <dashboard-card
        :title-icon="CheckInIcon"
        title="Member History Check-In"
    >
        <div class="member-history-container">
            <div class="flex flex-row w-full justify-between -sm:block">
                <div class="flex flex-row gap-5 -sm:mb-4 -sm:gap-0 justify-between">
                    <div class="history-meta bg-base-content/30 -sm:mr-2">
                        Gym Location 1
                    </div>
                    <div class="history-meta bg-secondary/50">
                        Active Members: <span class="text-secondary font-bold">54</span>
                    </div>
                </div>
                <!-- <search-input size="md" neutral border="neutral" class="place-end -sm:!w-full "/> -->
                <div class="flex"  >
                    <input type="text" :placeholder="search" class="help-search " @mouseenter="replacePlaceholder" @mouseleave="getBackSearch">
                </div>
            </div>
            <data-table
                :columns="columns"
                :row-component="HistoryTableRow"
                :data="mock"
                class="h-44 w-full mt-2 overflow-y-auto text-sm max-h-44"
            />
        </div>
    </dashboard-card>
</template>
<style scoped>
.member-history-container {
    @apply pt-6 px-5;
    .history-meta {
        @apply rounded-xl text-sm py-1 px-3;
    }
}
.help-search{
        @apply rounded-md w-full m-auto text-base pl-3 hover:placeholder-opacity-0 mt-2;
        background-color: #0075C9;
}
</style>
<script setup>
import DashboardCard from '../dashboard-card.vue'
import { CheckInIcon } from '@/components/icons'
import HistoryTableRow from './history-table-row.vue';
import {ref} from 'vue'

let search=ref('search');
const columns = ["Date and Time", "Member Name", "Event", "Membership Status", ""]
const mock = [{
    id: 1,
    date: "December 1",
    time: "10:00am",
    name: "Donna Alafonzo",
    event: "PT",
    membership: 'platinum',
    notification: true,
    image:'images/profile/customers_7.jpg'

}, {
    id: 2,
    date: "December 1",
    time: "11:00am",
    name: "Chris Italianzo",
    event: "Group Class",
    membership: 'bronze',
    image:'images/profile/customers_8.jpg'
}, {
    id: 3,
    date: "December 1",
    time: "1:00pm",
    name: "Tyler Andrezano",
    event: "PT",
    membership: 'silver',
    notification: true,
    image:'images/profile/customers_9.jpg'
}, {
    id: 4,
    date: "December 1",
    time: "11:15am",
    name: "Chris Italianzo",
    event: "Group Class",
    membership: 'bronze',
    image:'images/profile/customers_10.jpg'
}, {
    id: 5,
    date: "December 1",
    time: "10:00am",
    name: "Tyler Andrezano",
    event: "PT",
    membership: 'gold',
    image:'images/profile/customers_11.jpg'
}]

const replacePlaceholder = ()=>{
	search.value ='';
}
const getBackSearch=()=>{
	search.value='search';
}
</script>
