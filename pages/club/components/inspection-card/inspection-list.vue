<template>
    <div class="inspection-container">
        <div class="flex items-center justify-between mb-6 h-full">
            <div class="relative h-full flex flex-col justify-center text-left text-white">
                <label class="text-xs">Location:</label>
                <label class="text-lg">{{clubItems.club_name}}</label>
            </div>
            <div  class="absolute right-5 flex items-center">
                <FormFilterButton>
                    <template v-slot:filters>
                        <div class="flex space-x-5">
                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.location" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.location ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.location ? 'text-[#0275c9]': 'text-[#bababa]'">Location</span>
                                </SwitchLabel>
                            </SwitchGroup>

                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.type" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.type ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.type ? 'text-[#0275c9]': 'text-[#bababa]'">Type</span>
                                </SwitchLabel>
                            </SwitchGroup>

                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.alert" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.alert ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.alert ? 'text-[#0275c9]': 'text-[#bababa]'">Alert</span>
                                </SwitchLabel>
                            </SwitchGroup>

                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.segments" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.segments ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.segments ? 'text-[#0275c9]': 'text-[#bababa]'">Segments</span>
                                </SwitchLabel>
                            </SwitchGroup>
                        </div>
                    </template>
                </FormFilterButton>
            </div>
        </div>
        <ul class="inspection-list">
            <li v-for="item in clubItems.items" :key="item.id" class="inspection-row">
                <div class="text-left w-[50%]">
                    <label>{{ item.name }}</label>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type="'bg-primary bg-opacity-60'" :label="item.quantity"></ClubButton>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .inspection-container {
        @apply py-[30px] px-[20px]
    }
    .columns-header {
        color : #0077ac;
        border-bottom : 3px solid #0077ac;
        padding: 8px 15px;
        margin-top: 15px;
        display: flex;
    }
    .column-item{
        font-size: 12px;
    }
    .inspection-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 240px;
    }
    .inspection-list::-webkit-scrollbar{
        display: none;
    }
    .inspection-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .inspection-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .inspection-row label{
        margin : auto;
    }
</style>
<script setup>
    import ClubButton from '../club-button.vue';
    import {ref} from "vue";
    import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
    const filters = ref({
        location: false,
        type: false,
        alert: false,
        segments: false
    })
    const props = defineProps({
        clubItems: {
            type: Object,
            default: null,
        }
    });
</script>