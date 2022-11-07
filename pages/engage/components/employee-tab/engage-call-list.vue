<template>
    <div class="engage-call-list-container">
        <h3>Call List</h3>
        <data-table
            :columns="columns"
            :data="data"
            :row-component="CallListItem"
            class="h-44 overflow-y-auto text-xs"
        />
    </div>
</template>
<style scoped>
.engage-call-list-container {
    @apply col-span-2 border border-secondary rounded p-3 pb-1;
    h3 {
        @apply text-base font-semibold;
    }
}
</style>
<script setup>
import CallListItem from './call-list-item.vue';

const columns = ["Name", "Location", "Call Type", "Membership Type", ""]
const data = [{
    id: 1,
    avatar: "/account.png",
    name: "Sandy Lin",
    location: "Location",
    call_type: "Call Type",
    membership: "premimum",
}, {
    id: 2,
    avatar: "/account.png",
    name: "Randy Portis",
    location: "Location",
    call_type: "Call Type",
    membership: "basic",
}, {
    id: 3,
    avatar: "/account.png",
    name: "Tess Hightower",
    location: "Location",
    call_type: "Call Type",
    membership: "gold",
}]
</script>
