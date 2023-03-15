<template>
    <div class="page-mass-com-container">
        <div class="page-topbar flex flex-1">
            <div class="flex flex-auto">Mass Comms</div>
            <div class="flex gap-2 items-end pb-2 pr-10">
                <Button outline size="xs" @click.stop="$router.push('/mass-com')" class="rounded-full">
                    Drip Campaigns
                </Button>
                <Button secondary size="xs" @click.stop="$router.push('/mass-com/scheduled')" class="rounded-full">
                    Scheduled Campaigns
                </Button>
            </div>
        </div>

        <div class="page-content card-gradient-bg">
            <h3 class="mt-4">Future Campaigns</h3>
            <div class="page-content-block">
                <p class="text-sm p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida est eget quam tincidunt, 
                    nec aliquet magna porttitor. In ac mi finibus, posuere nibh in, facilisis sem.
                </p>
                <div class="max-h-[25vw] overflow-y-auto px-2">
                    <campaign-table type="future" />
                </div>
            </div>

            <h3 class="mt-4">Recent Campaigns</h3>
            <div class="page-content-block">
                <p class="text-sm p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida est eget quam tincidunt, 
                    nec aliquet magna porttitor. In ac mi finibus, posuere nibh in, facilisis sem.
                </p>
                <div class="max-h-[25vw] overflow-y-auto px-2">
                    <campaign-table type="current" />
                </div>
            </div>

            <h3 class="mt-4">Recent Campaign</h3>
            <div class="mt-3">
                <recent-campaign-details :data="recentCampaign" :fixed-height="false" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-mass-com-container {
    @apply pb-4 w-full h-fit pr-5;
    .page-topbar {
        @apply pl-10 pr-4 mb-2
    }
    .page-content {
        /* @apply px-32; */
        @apply block border border-secondary rounded-3xl p-7;
        h2 {
            @apply text-xl font-bold pt-6;
        }
        .page-content-block {
            @apply bg-black border border-secondary rounded-3xl mt-3;
        }
    }
}
</style>

<script setup>
import CampaignTable from "./components/scheduled-campaign-table.vue";
import RecentCampaignDetails from '../components/campaign-details/campaign-details-content.vue';

const recentCampaign = {
    id: 1,
    title: "Fourth of July Fitness",
    started: 44,
    in_progress: 43,
    completed: 88,
    status: "in_progress"
};

onMounted(async () => {
    await nextTick();
    window.dispatchEvent(new Event('resize'))
});

</script>
