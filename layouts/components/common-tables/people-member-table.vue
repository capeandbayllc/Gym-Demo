<template>
    <div class="people-member-table">
        <data-table
            :columns="columns"
            :data="members"
            :row-component="PeopleMemberTableRow"
            class="h-56 overflow-y-auto"
        />
    </div>
</template>
<script setup>
import PeopleMemberTableRow from "~~/components/data-table/common/people-member-table-row.vue"

const columns = [
    {
        label: "Created",
        class: "text-secondary"
    }, {
        label: "First Name",
        class: "text-secondary"
    }, {
        label: "Last Name",
        class: "text-secondary"
    },  {
        label: "mobile",
        class: "text-secondary"
    }, {
        label: "email",
        class: "text-secondary"
    },{
        label: "Location",
        class: "text-secondary"
    }, {
        label: "Type",
        class: "text-secondary"
    }, {
        label: "Add-ons",
        class: "text-secondary"
    }
]
const members = [{
    id: 1,
    created: "5/5 2002, 12:24:44PM",
    first_name: "Caleb",
    last_name: "Sauer",
    phone: "(123) 456-7890",
    email: "email@email.com",
    location: "1",
    type: "platinum",
    addOns: true
}, {
    id: 2,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "error",
    first_name: "Nathan",
    last_name: "Sipes",
    phone: "(123) 456-7890",
    email: "email@email.com",
    location: "1",
    type: "bronze",
    addOns: false
}, {
    id: 3,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "warning",
    first_name: "Nathan",
    last_name: "Sipes",
    phone: "(123) 456-7890",
    email: "email@email.com",
    location: "1",
    type: "silver",
    addOns: true
}, {
    id: 4,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "warning",
    first_name: "Nathan",
    last_name: "Sipes",
    phone: "(123) 456-7890",
    email: "email@email.com",
    location: "1",
    type: "gold",
    addOns: true
},  {
    id: 5,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "warning",
    first_name: "Nathan",
    last_name: "Sipes",
    phone: "(123) 456-7890",
    email: "email@email.com",
    location: "1",
    type: "platinum",
    addOns: false
}]
</script>