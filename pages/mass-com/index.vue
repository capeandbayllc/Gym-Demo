<template>
    <div class="page-mass-com-container">
        <div class="page-content">
            <h2>Overall/Trends</h2>
            <div class="overall-trends">
                <sales-show-ratio class="min-h-96 col-span-2 h-full" />
                <sales-draft-related class="min-h-96 col-span-2 h-full" />
                <build-campaign-card
                    class="min-h-96 col-span-1 h-full flex flex-col"
                />
            </div>
            <campaign-card />
            <h2 class="mb-4">Recent campaigns</h2>
            <new-member-campaigns class="mb-4" />
            <marketing />
        </div>
    </div>
</template>
<style scoped>
.page-mass-com-container {
    @apply py-4 w-full h-fit;
    .page-content {
        /* @apply px-32; */
        @apply block border border-secondary bg-neutral rounded p-7;
        h2 {
            @apply text-xl font-bold pt-6;
        }
        .overall-trends {
            @apply grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-rows-1 lg:grid-flow-col -lg:gap-y-5 lg:gap-5 py-4;
            @screen lg {
                grid-template-columns: auto auto auto auto max-content;
            }
        }
    }
}
</style>
<script setup>
import SalesShowRatio from '@/pages/components/sales-show-ratio/index.vue';
import SalesDraftRelated from '@/pages/components/sales-draft-related/index.vue';
import BuildCampaignCard from './components/build-campaign-card/index';
import CampaignCard from './components/campaign-card/index.vue';
import newMemberCampaigns from './components/new-member-campaigns.vue';
import marketing from './components/marketing.vue';

onMounted(async () => {
    await nextTick();
    window.dispatchEvent(new Event('resize'))
});

</script>
