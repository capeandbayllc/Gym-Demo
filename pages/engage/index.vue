<template>
    <div class="page-engage-container">
        <div class="page-content">
            <tab-list v-model="activeTab" />
            <div class="tab-view">
                <component
                    :is="tabViews[activeTab]"
                    v-if="activeTab > -1"
                />
                <div
                    class="w-64 h-56"
                    v-else
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-engage-container {
    @apply py-4 pr-5 w-full h-fit -md:px-6;
    .page-content {
        @apply flex flex-col items-center;
        /* margin-top: -2.25rem; */
        .tab-view {
            @apply grid grid-cols-3 grid-rows-3 gap-4 border-2 border-secondary rounded py-5 px-4 bg-neutral max-w-[1120px] w-full;
        }
    }
}
</style>
<script setup>
import {ref} from 'vue';
import TabList from './components/tab-list.vue';
import EmployeeTab from './components/employee-tab/index.vue';
import LeadTab from './components/lead-tab.vue';
import MemberTab from './components/member-tab.vue';
import FitnessTab from './components/fitness-tab.vue';

const activeTab = ref(0);
const tabViews = [
    EmployeeTab,
    LeadTab,
    MemberTab,
    FitnessTab,
    FitnessTab,
    FitnessTab,
    FitnessTab,
];
</script>
