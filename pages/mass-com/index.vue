<template>
    <div class="page-mass-com-container">
        <div class="page-title">Campaigns/Drip Creator</div>
        <div class="page-content">
            <h2>Overall/Trends</h2>
            <div class="overall-trends">
                <sales-show-ratio class="h-96 col-span-2"/>
                <sales-draft-related class="h-96 col-span-2" />
                <build-campaign-card class="h-96 col-span-1" />
            </div>
            <campaign-card />
        </div>
    </div>
</template>
<style scoped>
.page-mass-com-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply px-32;
        h2 {
            @apply text-xl font-bold pt-6;
        }
        .overall-trends {
            @apply grid lg:grid-cols-5 grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-rows-1 md:grid-flow-col gap-5 py-4;
        }
    }
}
</style>
<script setup>
import SalesShowRatio from '@/pages/components/sales-show-ratio/index.vue';
import SalesDraftRelated from '@/pages/components/sales-draft-related/index.vue';
import BuildCampaignCard from './components/build-campaign-card/index'
import CampaignCard from './components/campaign-card/index.vue';
</script>