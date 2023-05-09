<template>
  <card title="Membership MTD Sales" class="membership-card">
    <template #summary>
      <div class="total-sale">$19,000</div>
    </template>
    <template #content>
      <div class="membership-info">
        <div class="total-sale">$19,000</div>
        <div class="flex flex-row items-center justify-between py-4">
          <div class="membership-list">
            <div v-for="(item, ndx) in memberships" :key="ndx">
              {{ item }}
            </div>
          </div>
          <membership-chart :width="140" />
        </div>
        <div class="membership-sum-up">
          <div>Total: 83%</div>
          <go-btn @click="showReportingModal" />
        </div>
      </div>
    </template>
  </card>
  <daisy-modal id="reportingModal" ref="reportingModal">
    <reporting-modal />
  </daisy-modal>
</template>
<style scoped lang="postcss">
.membership-card {
  @apply w-80 h-[300px];
  .total-sale {
    @apply text-secondary font-bold text-5xl;
  }
  .membership-info {
    .total-sale {
      @apply border-b pb-2 border-base-content/50;
    }
    .membership-list {
      @apply flex flex-col space-y-2;
      div {
        @apply text-secondary text-sm;
      }
    }
    .membership-sum-up {
      @apply flex flex-row justify-between text-lg font-bold text-secondary;
    }
  }
}
</style>
<script setup>
import MembershipChart from "./membership-chart.vue";
import ReportingModal from "../reporting-popup-modal/index.vue";
import GoBtn from "./go-btn.vue";
const memberships = [
  "Bronze Membership",
  "Silver Membership",
  "Gold Membership",
  "Platinum Membership",
  "Childcare Add-on",
];
const reportingModal = ref(null);
const showReportingModal = () => {
  reportingModal.value.open();
};
</script>
