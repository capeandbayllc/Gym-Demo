<template>
  <div class="pb-4 w-full h-fit pr-12 pl-9">
    <div class="pl-10 pr-4 mb-2 flex flex-1">
      <div class="flex flex-auto">Mass Comms</div>
      <div class="flex gap-2 items-end pb-2 pr-10">
        <Button
          outline
          size="xs"
          @click.stop="$router.push('/mass-com')"
          class="rounded-full"
        >
          Drip Campaigns
        </Button>
        <Button
          secondary
          size="xs"
          @click.stop="$router.push('/mass-com/scheduled')"
          class="rounded-full"
        >
          Scheduled Campaigns
        </Button>
      </div>
    </div>

    <div
      class="block border border-secondary rounded-3xl p-7 card-gradient-bg page-content"
    >
      <h3 class="mt-4">Active Campaigns</h3>
      <div class="page-content-block">
        <p class="text-sm p-4">
          Campaigns in progress with a reminder of time on them.
        </p>
        <div class="max-h-[25vw] overflow-y-auto px-2">
          <campaign-table type="future" />
        </div>
      </div>

      <h3 class="mt-4">Inactive Campaigns</h3>
      <div class="page-content-block">
        <p class="text-sm p-4">
          A look at your current month to month campaign and communications.
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

<style scoped lang="postcss">
.page-content-block {
  @apply bg-base-300 border border-secondary rounded-3xl mt-3;
}
</style>

<script setup>
import CampaignTable from "./components/scheduled-campaign-table.vue";
import RecentCampaignDetails from "../components/campaign-details/campaign-details-content.vue";

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
