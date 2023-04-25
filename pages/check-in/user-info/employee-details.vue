<template>
    <user-info-card class="mb-0">
        <h2>Employee Details</h2>
        <div class="divider"></div>
        <div v-for="(item, index) in employeeFields" :key="item.key" class="-lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">{{item.label}}</div>
            <input :class="item.class" class="w-full p-1 rounded-sm" v-model="employeeForm[item.key]"/>
        </div>
        <div class="divider"></div>
        <profile-relation></profile-relation>
        <div class="divider"></div>
        <div>
            <h4 class="mb-4 inline-block">Calendar Access <LockIcon class="inline-block"/></h4>
            <multi-select
                :options="departments"
                label="Department(s)"
                v-model="employeeForm.departments"
            />
        </div>
        <div class="col-span-2 3xl:col-span-3 -lg:col-span-1 -md:col-auto">
            <div class="border border-secondary rounded p-4 w-full mb-4 bg-transparent">
                <availability-clocks title="Availability" />
            </div>
            <Button secondary size="sm" class="float-right capitalize">+ New</Button>
            <Button ghost size="sm" class="float-right mr-2 capitalize">Edit</Button>
        </div>
    </user-info-card>
</template>
<script setup>
import {ref} from 'vue';
import AvailabilityClocks from '~/pages/setting/components/availability-clocks.vue';
import ProfileRelation from './profile-relation.vue';
import UserInfoCard from './user-info-card.vue';
const employeeForm = ref({})
const employeeFields = [{
    key: "employee-id-number",
    label: "Employee I.D. Number",
    class: "neutral-input"
},{
    key: "manager",
    label: "Manager",
    class: "outline-input"
},{
    key: "username",
    label: "Username",
    class: "readonly-input",
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
}];
</script>