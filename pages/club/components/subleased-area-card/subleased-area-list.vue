<template>
    <div class="subleased-area-container">
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
        <div class="subleased-area-list">
            <div class="text-left">
                <label class="text-[14px]">Building Manager</label>
                <div class="subleased-area-row flex justify-between items-center">
                    <div>{{ clubItems.building_manager }}</div>
                    <span><ClubButton :btn_type='default' :label="'Contact'"></ClubButton></span>
                </div>
            </div>
            <div class="text-left mt-3">
                <label class="text-[14px]">Assistant Building Manager</label>
                <div class="subleased-area-row flex justify-between items-center">
                    <div>{{ clubItems.assistant_building_manager }}</div>
                    <span><ClubButton :btn_type='default' :label="'Contact'"></ClubButton></span>
                </div>
            </div>
            <div class="text-left mt-3">
                <label class="text-[14px] text-white">Location Information</label>
                <div class="border-2 border-white rounded-xl text-white mt-4 p-4 text-[14px]">
                    <div class="flex items-center gap-2">
                        <img class="rounded-lg h-20 w-20 object-cover bg-gray-300" :src="clubItems.location_info.subleased_thumb" alt="{{ clubItems.location_info.club_number }}" />
                        <div class="ml-4 font-medium">
                            <div class="flex gap-4">
                                <div class="text-[16px]">Club Number:</div>
                                <div>{{ clubItems.location_info.club_number }}</div>
                            </div>
                            <div class="flex gap-4">
                                <div class="text-[16px]">Address:</div>
                                <div>{{ clubItems.location_info.address }}</div>
                            </div>
                            <div class="flex justify-between items-center gap-4">
                                <div>
                                    <div class="flex gap-1">
                                        <div class="text-[16px]">City:</div>
                                        <div>{{ clubItems.location_info.city }}</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex gap-1">
                                        <div class="text-[16px]">State:</div>
                                        <div>{{ clubItems.location_info.state }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mt-4">
                        <img class="rounded-lg object-cover bg-gray-300 w-full" :src="clubItems.location_info.map_img" alt="{{ clubItems.location_info.club_number }}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .subleased-area-container {
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
    .subleased-area-list{
        margin-top: 5px;
        overflow-y: auto;
        max-height : 240px;
    }
    .subleased-area-list::-webkit-scrollbar{
        display: none;
    }
    .subleased-area-row{
        display : flex;
        margin-top: 8px;
        background : #181916;
        border : 3px solid #0077cb;
        border-radius: 10px;
        padding: 8px 15px;
        color : lightgrey;
    }
    .subleased-area-row .img-avatar{
        border-radius : 15px;
        width: 40px;
        height: 40px;
        border : 2px solid #0077ac;
        box-shadow : 0px 3px 15px #0077ac;
    }
    .subleased-area-row label{
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