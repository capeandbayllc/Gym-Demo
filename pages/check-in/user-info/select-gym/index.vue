<template>
    <simple-card class="select-gym">
        <div class="flex p-4 justify-between">
            <p>Select a Gym </p>
            <select class="select select-sm bg-white text-black w-fit max-w-xs rounded-sm text-black" v-model="city">
                <option value="" selected>Select City</option>
                <option v-for="opt in cities" :value="opt.value" :key="opt.value">{{opt.label}}</option>
            </select>
        </div>
        <div class="w-[600px] gap-4 grid grid-cols-2 p-4 h-[400px] overflow-auto m-2">
            <div class="bg-white p-4 rounded-md text-black" v-for="(gym, index) in gyms" :key="index">
                <p class="font-semibold mb-4">{{gym.name}}</p>
                <p class="font-light mb-4">{{gym.address}}</p>
                <p class="font-light mb-4">{{gym.phone}}</p>
                <div class="flex font-normal justify-between"> <a href="#">More Information</a> <Button size="sm" secondary>Join Now</Button> </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import {ref} from 'vue';

const city = ref("")
const cities = ref([
    {
        label:"Florida",
        value:"florida"
    },
    {
        label:"California",
        value:"california"
    }
])

const gyms = ref([
    {
        name:"Fitness Club 1",
        address: "1753 Main Ave Petes Park, FI.89543",
        phone:"123-555-3654"
    },
    {
        name:"Fitness Club 1",
        address: "1753 Main Ave Petes Park, FI.89543",
        phone:"123-555-3654"
    },
    {
        name:"Fitness Club 1",
        address: "1753 Main Ave Petes Park, FI.89543",
        phone:"123-555-3654"
    },
    {
        name:"Fitness Club 1",
        address: "1753 Main Ave Petes Park, FI.89543",
        phone:"123-555-3654"
    },
    {
        name:"Fitness Club 1",
        address: "1753 Main Ave Petes Park, FI.89543",
        phone:"123-555-3654"
    },
    {
        name:"Fitness Club 1",
        address: "1753 Main Ave Petes Park, FI.89543",
        phone:"123-555-3654"
    }
])

</script>

<style>
    .select-gym{
        background-image: linear-gradient(to bottom, #0074c8b5 -40%, #000 90%);
    }
</style>