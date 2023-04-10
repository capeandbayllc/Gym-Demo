<template>
  <div class="page-mass-com-container">
    <div class="page-content">
      <div class="flex flex-1">
        <h2 class="flex flex-auto">Overall/Trends</h2>
        <div class="flex gap-2 items-end pb-2">
          <Button secondary size="xs">Drip Campaigns</Button>
          <Button
            outline
            size="xs"
            @click.stop="$router.push('/mass-com/scheduled')"
            >Scheduled Campaigns</Button
          >
        </div>
      </div>
      <div class="overall-trends">
        <sales-show-ratio class="min-h-96 col-span-2 h-full" />
        <sales-draft-related class="min-h-96 col-span-2 h-full" />
        <build-campaign-card class="min-h-96 col-span-1 h-full flex flex-col" />
      </div>
      <campaign-card />
      <h2 class="mb-4">Recent campaigns</h2>
      <new-member-campaigns class="mb-4" />
      <marketing />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-mass-com-container {
  @apply py-4 w-full h-fit pr-5;
  .page-content {
    @apply block border border-secondary bg-neutral p-7 rounded-3xl;
    h2 {
      @apply text-xl font-bold pt-6;
    }
    .overall-trends {
      @apply grid grid-rows-1 grid-cols-1 py-4;
      @apply md:grid-rows-2;
      @apply lg:grid-cols-[repeat(4,_auto)_max-content] lg:grid-rows-1 lg:grid-flow-col -lg:gap-y-5 lg:gap-5;
    }
  }
}
</style>
<script setup>
import SalesShowRatio from "@/pages/components/sales-show-ratio/index.vue";
import SalesDraftRelated from "@/pages/components/sales-draft-related/index.vue";
import BuildCampaignCard from "./components/build-campaign-card/index";
import CampaignCard from "./components/campaign-card/index.vue";
import newMemberCampaigns from "./components/new-member-campaigns.vue";
import marketing from "./components/marketing.vue";

const recentCampaign = {
  id: 1,
  title: "Fourth of July Fitness",
  started: 44,
  in_progress: 43,
  completed: 88,
  status: "in_progress",
};

onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});
</script>
