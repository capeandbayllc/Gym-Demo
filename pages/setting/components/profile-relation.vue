<template>
    <multi-select
        :options="locations"
        label="Home Location(s)"
        v-model="form.location"
    />
</template>
<script setup>
import {ref} from 'vue'

const form = ref({
    location: []
})
const locations = new Array(6).fill({value: 1}).map((_, ndx) => ({value: ndx, label: "Club " + ndx}))
const teams = new Array(6).fill({value: 1}).map((_, ndx) => ({value: ndx, label: "Team " + ndx}))
const security_roles = new Array(6).fill({value: 1}).map((_, ndx) => ({value: ndx, label: "Role " + ndx}))
const roles = [{
    value: 1,
    label: "Front Desk"     
}, {
    value: 2,
    label: "Trainer"     
}, {
    value: 3,
    label: "Trash"     
}]
const departments = [{
    value: 1,
    label: "Operations"     
}, {
    value: 2,
    label: "Memberships"     
}, {
    value: 3,
    label: "Group Fitness"     
}]
</script>
