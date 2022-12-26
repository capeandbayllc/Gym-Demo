<template>
    <simple-card class="mb-8">
        <div class="grid grid-cols-3 gap-6 py-4 px-10">
            <Button class="text-white capitalize" :class="isActiveMember ? 'bg-slate-400 hover:bg-slate-500' : 'bg-lime-500 hover:bg-lime-600'" @click="isActiveMember = !isActiveMember" >{{isActiveMember ? "In-Active" : "Active"}}</Button>
            <h2 class="text-center leading-10 text-lg">Member Information</h2>
            <Button class="ml-auto bg-[#0074C8] text-white capitalize">Create New Agreement</Button>

            <div v-for="item in memberInformation" :key="item.key" class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">{{item.label}}</div>
                <input :class="item.class" class="w-full p-1 rounded-sm" v-model="memberInfo[item.key]"/>
            </div>
        </div>
    </simple-card>
</template>
<script setup>
import {ref} from 'vue';
const isActiveMember = ref(false);

const memberInfo = ref({});

const memberInformation = [{
    key: "first-name",
    label: "First Name",
    class: "secondary-input"
}, {
    key: "middle-name",
    label: "Middle Name",
    class: "secondary-input"
}, {
    key: "last-name",
    label: "Last Name",
    class: "secondary-input"
}, {
    key: "birthday",
    label: "Date of Birth",
    class: "neutral-input"
}, {
    key: "gender",
    label: "Gender",
    class: "neutral-input"
}, {
    key: "social-security-number",
    label: "Social Security Number",
    class: "neutral-input"
}, {
    key: "occupation",
    label: "Occupation",
    class: "neutral-input"
}, {
    key: "employer",
    label: "Employer",
    class: "neutral-input"
}, {
    key: "barcode",
    label: "Barcode",
    class: "neutral-input"
}, {
    key: "previous-agreement-number",
    label: "Previous Agreement Number",
    class: "neutral-input"
}, {
    key: "wellness-program-id",
    label: "Wellness Program ID",
    class: "neutral-input"
},{
    key: "membership-type",
    label: "Membership Type",
    class: "neutral-input"
},{
    key: "group",
    label: "Group",
    class: "neutral-input"
},{
    key: "member-misc-1",
    label: "Member Misc. 1",
    class: "neutral-input"
},{
    key: "member-misc-2",
    label: "Member Misc. 2",
    class: "neutral-input"
}]

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
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
    }
</style>