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
                                <Switch v-model="filters.location" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.location ? 'translate-x-5 bg-secondary border-secondary' : 'translate-x-0 bg-base-content/80 border-base-content/80', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.location ? 'text-secondary': 'text-neutral-content'">Location</span>
                                </SwitchLabel>
                            </SwitchGroup>

                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.type" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.type ? 'translate-x-5 bg-secondary border-secondary' : 'translate-x-0 bg-base-content/80 border-base-content/80', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.type ? 'text-secondary': 'text-neutral-content'">Type</span>
                                </SwitchLabel>
                            </SwitchGroup>

                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.alert" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.alert ? 'translate-x-5 bg-secondary border-secondary' : 'translate-x-0 bg-base-content/80 border-base-content/80', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.alert ? 'text-secondary': 'text-neutral-content'">Alert</span>
                                </SwitchLabel>
                            </SwitchGroup>

                            <SwitchGroup as="div" class="flex items-center">
                                <Switch v-model="filters.segments" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2">
                                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span aria-hidden="true" :class="['bg-base-content pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                                    <span aria-hidden="true" :class="[filters.segments ? 'translate-x-5 bg-secondary border-secondary' : 'translate-x-0 bg-base-content/80 border-base-content/80', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
                                </Switch>
                                <SwitchLabel as="span" class="ml-3 text-sm">
                                    <span class="font-medium" :class="filters.segments ? 'text-secondary': 'text-neutral-content'">Segments</span>
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
                    <ClubButton :btn_type="'bg-secondary'" :label="item.quantity"></ClubButton>
                </div>
                <div class="w-[25%]">
                    <ClubButton :btn_type='default' :label='View'></ClubButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="postcss">
    .inspection-container {
        @apply py-[30px] px-[20px];
    }
    .columns-header {
        @apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
    }
    .column-item{
        @apply text-[12px];
    }
    .inspection-list{
        @apply mt-[5px] overflow-y-auto max-h-[240px];
    }
    .inspection-list::-webkit-scrollbar{
        @apply hidden;
    }
    .inspection-row{
        @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
    }
    .inspection-row .img-avatar{    
        @apply shadow shadow-secondary shadow-lg w-[40px] h-[40px] rounded-[15px] border-[2px] border-solid border-secondary;
    }
    .inspection-row label{
        @apply m-auto;
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