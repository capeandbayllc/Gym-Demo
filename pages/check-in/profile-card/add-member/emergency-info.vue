<template>
    <simple-card class="text-center w-[650px]">
        <h2 class="text-2xl font-semibold my-2">Emergency Contact Information</h2>
        <div class="w-full text-left">
            <div v-for="(field,index) in emergencyInfo" :key="index" class="inline-block w-2/4 px-4 mb-4">
                <label class="mb-2 inline-block">{{field.label}}</label>
                <input :type="field.type" class="bg-white p-2 rounded w-full text-black" v-model="field.value">
            </div>
        </div>
    </simple-card>
</template>
<script setup>
import {PersonAddIcon, PersonIcon} from '@/components/icons';

const emergencyInfo = ref([
    {
        label:"First Name*",
        value:"",
        type:"text",
        placeholder:"Name"
    },
    {
        label:"Last Name*",
        value:"",
        type:"text",
        placeholder:"Last Name"
    },
    {
        label:"Phone*",
        value:"",
        type:"text",
        placeholder:"xxx-xxx-xxxx"
    }
])



</script>
<style setup>

</style>