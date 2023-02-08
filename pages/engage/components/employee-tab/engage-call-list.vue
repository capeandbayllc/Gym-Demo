<template>
    <div class="engage-call-list-container">
        <!-- <h3>Call List</h3> -->
        <h3 class="text-secondary">Upgrades:</h3>
        <data-table
            :columns="columns"
            :data="data"
            :row-component="CallListItem"
            class="h-80 overflow-y-auto text-xs"
        />
    </div>
</template>
<style scoped>
.engage-call-list-container {
    @apply col-span-2 pb-1 -md:col-span-3;
    h3 {
        @apply text-base;
    }
}
</style>
<script setup>
import CallListItem from './call-list-item.vue';

const columns = ["Name", "Location", "Date Upgraded", "Contacted", "Membership Type", ""]
const data = [{
    id: 1,
    avatar: "/account.png",
    name: "Sandy Lin",
    location: "Location",
    date: "1.02.22",
    membership: "Premimum",
    call_type: 'Call'
}, {
    id: 2,
    avatar: "/account.png",
    name: "Randy Portis",
    location: "Location",
    date: "1.02.22",
    membership: "Premimum",
    call_type: 'Email'
}, {
    id: 3,
    avatar: "/account.png",
    name: "Tess Hightower",
    location: "Location",
    date: "1.02.22",
    membership: "Premimum",
    call_type: 'In-Club'
}, {
    id: 4,
    avatar: "/account.png",
    name: "Sandy Lin",
    location: "Location",
    date: "1.02.22",
    membership: "Premimum",
    call_type: 'Call'
}, {
    id: 5,
    avatar: "/account.png",
    name: "Randy Portis",
    location: "Location",
    date: "1.02.22",
    membership: "Premimum",
    call_type: 'Email'
}, {
    id: 6,
    avatar: "/account.png",
    name: "Tess Hightower",
    location: "Location",
    date: "1.02.22",
    membership: "Premimum",
    call_type: 'In-Club'
}]
</script>
