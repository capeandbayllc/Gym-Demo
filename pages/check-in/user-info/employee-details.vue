<template>
    <simple-card>
        <div class="grid grid-cols-3 gap-6 py-4 px-10 -lg:grid-cols-2 -md:grid-cols-1">
            <h2 class="text-center leading-10 text-lg col-span-3 -lg:col-span-2 -md:col-auto">Employee Details</h2>
            <div v-for="(item, index) in employeeFields" :key="item.key" class="-lg:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">{{item.label}}</div>
                <input :class="item.class" class="w-full p-1 rounded-sm" v-model="employeeForm[item.key]"/>
            </div>
            <div class="divider"></div>
            <profileRelation></profileRelation>
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
                    <h4 class="mb-1 inline-block font-bold w-full">Availability</h4>
                    <label class="mr-3">Daily Times Set:</label>
                    <span class="mx-2 inline-block"> <ClockIcon class="inline-block mr-1"/> 10:20 am </span>
                    <span class="mx-2 inline-block"> <ClockIcon class="inline-block mr-1"/> 1:00 pm </span>
                    <span class="mx-2 inline-block"> <ClockIcon class="inline-block mr-1"/> 3:00 pm </span>
                </div>
                <Button secondary size="sm" class="float-right capitalize">+ New</Button>
                <Button ghost size="sm" class="float-right mr-2 capitalize">Edit</Button>
            </div>
        </div>
    </simple-card>
</template>
<script setup>
import {ref} from 'vue';
import {ClockIcon} from '~~/components/icons';
import profileRelation from './profile-relation.vue';
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

<style scoped>
    .secondary-input {
        @apply bg-secondary;
    }
    .neutral-input {
        @apply bg-base-content/20;
    }
    .readonly-input {
        @apply bg-transparent text-base-content/50;
    }
    .outline-input {
        @apply bg-transparent border border-secondary;
    }
    .divider {
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:!col-span-2 -md:!col-auto;
    }
</style>