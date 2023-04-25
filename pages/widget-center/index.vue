<template>
  <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1600px]">
    <div class="pl-10 pr-4 mb-2 flex justify-content">
      <div class="flex flex-auto">Goals</div>
      <div class="flex gap-3 items-end pb-2 pr-10">
        <div class="dropdown dropdown-end">
          <Button secondary="" size="xs">
            <font-awesome-icon
              :icon="['fas', 'plus']"
              size="md"
              class="mr-1 focus:outline-none"
              tabindex="0"
              @click.prevent.stop
            />
            New
          </Button>
          <div
            class="dropdown-content menu p-2 shadow bg-base-content text-base-300 rounded w-[150px] items-start"
          >
            <div class="inline-block my-1 px-2 cursor-pointer" tabindex="-1">
              Dashboard
            </div>
            <div class="inline-block my-1 px-2 cursor-pointer" tabindex="-1">
              Reporting
            </div>
            <div class="inline-block my-1 px-2 cursor-pointer" tabindex="-1">
              Goals
            </div>
            <div class="inline-block my-1 px-2 cursor-pointer" tabindex="-1">
              Leads
            </div>
          </div>
        </div>
        <Button
          outline
          size="xs"
          class="border-secondary hover:bg-secondary hover:border-secondary hover:text-white"
        >
          Rearrange
        </Button>
      </div>
    </div>
    <div class="page-content gap-5">
      <dashboard-card />
      <reporting-card />
      <sales-funnel-card />
      <statistics-card />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-content {
  @apply text-center text-secondary p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[85vw];
}
</style>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import DashboardCard from "./components/dashboard-card/index.vue";
import ReportingCard from "./components/reporting-card/index.vue";
import SalesFunnelCard from "./components/sales-funnel-card/index.vue";
import StatisticsCard from "./components/statistics/index.vue";

library.add(faPlusCircle);
</script>
