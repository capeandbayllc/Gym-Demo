<template>
    <div class="select-templates-container">
        <h1 class="title">Select a Template</h1>
        <h5 class="subtitle">Start your campaign</h5>

        <div class="tabs">
            <div class="tab tab-bordered" v-for="tab in tabs" :class="{'tab-active': activeTab == tab.id}">{{ tab.title }}</div>
        </div>

        <div class="tab-content">
            <tab-layouts v-if="activeTab == 'layouts'"></tab-layouts>
            <tab-saved v-if="activeTab == 'saved'"></tab-saved>
            <tab-campaigns v-if="activeTab == 'campaigns'"></tab-campaigns>
            <tab-search v-if="activeTab == 'search'"></tab-search>
        </div>
    </div>
</template>

<style scoped>
.select-templates-container {
    .title {
        @apply text-xl;
    }
    .subtitle {
        @apply text-xs;
    }
}
.tabs {
    @apply flex mt-3;
    > :last-child {
        @apply flex flex-grow flex-col content-end;
    }
    .tab {
        @apply text-xs text-white border-white;
    }
    .tab-active:not(:disabled) {
        @apply text-secondary border-secondary;
    }
}
</style>

<script setup>
import TabLayouts from "./select-templates-layouts.vue";
import TabSaved from "./select-templates-saved.vue";
import TabCampaigns from "./select-templates-campaigns.vue";
import TabSearch from "./select-templates-search.vue";

const props = defineProps({
    data: Object
});

const tabs = [{
    id: 'layouts',
    title: 'Layouts'
}, {
    id: 'saved',
    title: 'Saved Templates'
}, {
    id: 'campaigns',
    title: 'Campaigns'
}, {
    id: 'search',
    title: 'Search'
}];

let activeTab = 'layouts';

</script>