<template>
    <simple-card :rounded-md="true" class="select-gym">
        <div class="flex px-4 pt-4 ml-2 mr-4 justify-between">
            <p class="text-xl">Select a Gym</p>
            <!-- <select class="select select-sm bg-white text-black w-fit max-w-xs rounded-sm text-black" v-model="city">
                <option value="" selected>Select City</option>
                <option v-for="opt in cities" :value="opt.value" :key="opt.value">{{opt.label}}</option>
            </select> -->
            <select-box
                :items="cities"
                label="Florida"
                :showSearch="false"
                :showClearList="false"
                :bgSecondaryOpened="false"
                @onChange=""
                classButton="my-[5px] mx-[10px]"
                class="bg-[#5a5a5a] text-white rounded-[10px]  max-w-[200px]">
            </select-box>
        </div>
        <div class="w-[600px] gap-4 grid grid-cols-2 p-4 my-5 h-[400px] overflow-auto m-2 width-full">
            <div class="card-gym" v-for="(gym, index) in gyms" :key="index">
                <p class="font-semibold mb-[6px]">{{gym.name}}</p>
                    <div class="min-h-[61px] flex justify-between">
                        <p class="font-light mb-4 max-w-[154px] text-[18.5px]">{{gym.address}}</p>
                        <div class="h-auto flex items-end">
                            <Button size="sm" class="rounded-[10px]" secondary>Join Now</Button> 
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-[19px] pb-[5px]">
                        <p class="font-light text-[18.5px]">{{gym.phone}}</p>
                        <div class="flex font-light justify-between text-[14px]"> <a href="#">More Information</a> 
                    </div>
                </div>
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

<style scoped>
    .select-gym{
        background-image: linear-gradient(to bottom, #0074c8b5 -40%, #000 90%);
    }
    .card-gym{
        @apply bg-gradient-to-b from-secondary to-black bg-secondary bg-blend-darken py-[14px] px-[16px] rounded-[14px] border border-secondary;
    }
</style>