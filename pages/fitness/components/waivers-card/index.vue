<template>
    <fitness-card :title-icon="WaiversIcon" title="Signed Waivers" >
        <div class="page-container">
            <div class="search-bar grid grid-cols-4">
                <div class="col-span-1">
                    <FitnessPlusButton :label="'Waiver'" />
                </div>
                <div class="col-span-1"></div>
                <div class="col-span-2">
                    <input class="search-input" type="text" placeholder="Search">
                </div>
            </div>
            <div class="slide-docs flex">
                <ScrollableDocs :docs="doc_data"/>
            </div>
        </div>
    </fitness-card>
</template>
<style scoped lang="postcss">
.page-container{
    @apply py-[10px] px-[20px];
}
.search-input{
    @apply min-h-[36px] text-[16px] w-full rounded-[10px] bg-primary m-auto text-base-content float-right mt-[4px] py-[2px] px-[10px] transition-all duration-300;
}
.search-input:hover,
.search-input:focus{
    @apply bg-secondary;
}
.search-input:focus{
    box-shadow: none;
    outline: none;
}
.slide-docs{
    @apply border-[2px] border-solid border-secondary rounded-[8px] px-[10px] py-[18px] mt-[15px];
}
</style>
<script setup>
import { WaiversIcon } from '~~/components/icons'
import FitnessCard from '../fitness-card.vue';
import FitnessPlusButton from '../fitness-plus-button.vue';
import ScrollableDocs from '../scrollable-docs.vue';

const doc_data = [
    {
        id: 1,
        name: "Waiver Type1",
        date: "April 1, 2023"
    },{
        id: 2,
        name: "Waiver Type2",
        date: "April 2, 2023"
    },{
        id: 3,
        name: "Waiver Type3",
        date: "April 3, 2023"
    },{
        id: 4,
        name: "Waiver Type4",
        date: "April 4, 2023"
    },{
        id: 5,
        name: "Waiver Type5",
        date: "April 5, 2023"
    },{
        id: 6,
        name: "Waiver Type6",
        date: "April 6, 2023"
    },{
        id: 7,
        name: "Waiver Type7",
        date: "April 7, 2023"
    },{
        id: 8,
        name: "Waiver Type8",
        date: "April 8, 2023"
    },
]
</script>