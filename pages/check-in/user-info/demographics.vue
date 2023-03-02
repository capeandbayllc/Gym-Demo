<template>
    <user-info-card>
        <h2>Demographics</h2>
        <div
            v-for="(item, index) in demographics"
            :key="item.key"
            :class="index == 0 ? 'col-span-3 -lg:col-span-2' :''"
            class="demographic-item"
        >
            <div class="mb-2">{{item.label}}</div>
            <input :class="item.class" class="w-full p-1 rounded-sm" v-model="demographicsObj[item.key]"/>
        </div>
    </user-info-card>
</template>

<script setup>
import {ref} from 'vue';
import UserInfoCard from './user-info-card.vue';
const demographicsObj = ref({})
const demographics = ref([{
    key: "street-address",
    label: "Street Address",
    class: "col-span-3 neutral-input"
},{
    key: "city",
    label: "City",
    class: "neutral-input"
},{
    key: "state",
    label: "State",
    class: "neutral-input"
},{
    key: "zip-code",
    label: "Zip Code",
    class: "neutral-input"
},{
    key: "email-address",
    label: "Email Address",
    class: "neutral-input"
},{
    key: "drivers-license",
    label: "Driver's License",
    class: "neutral-input"
},{
    key: "primary-phone",
    label: "Primary Phone",
    class: "neutral-input"
},{
    key: "mobile-phone",
    label: "Mobile Phone",
    class: "neutral-input"
},{
    key: "work-phone",
    label: "Work Phone",
    class: "neutral-input"
},{
    key: "fax-number",
    label: "Fax Number",
    class: "neutral-input"
},{
    key: "emergency-contact",
    label: "Emergency Contact",
    class: "neutral-input"
},{
    key: "emergency-contact-phone",
    label: "Emergency Contact Phone",
    class: "neutral-input"
},{
    key: "emergency-availability",
    label: "Emergency Availability",
    class: "neutral-input"
}
]);
</script>