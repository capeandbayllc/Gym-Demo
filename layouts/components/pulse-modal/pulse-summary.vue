<template>
  <div class="pulse-summary">
    <!-- <div class="pulse-summary-item">
			<h4>New Members</h4>
			<pulse-member-summary />
		</div>
		<div class="pulse-summary-item">
			<h4>Club Events</h4>
			<pulse-club-events />
			
		</div>
		<div class="pulse-summary-item">
			<h4>Check In History</h4>
			<pulse-check-history />
		</div> -->
    <!-- scrolling side container (no container title, component titles) -->
    <section
      class="max-h-[50vh] h-full flex gap-4 justify-center pb-8 px-8 overscroll-contain"
    >
      <div class="overflow-y-scroll w-full pr-12">
        <ul class="w-full">
          <li>
            <PulseItemCard title="Club Membership Details">
              <template #card-content>
                <DetailList :spacings="gridItemSpacing" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <h4>Membership Draft Breakdown</h4>
          </li>
          <li>
            <PulseItemCard title="Membership Sales Leaderboard">
              <template #card-content>
                <SalesLeaderboard :data="membershipSalesLeaderboard" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <h4>Membership Calls and Mass Comms</h4>
          </li>
          <li>
            <PulseItemCard title="Personal Training Details">
              <template #card-content>
                <DetailList :data="personalTrainingDetailData" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <h4>Personal Training Draft Breakdown</h4>
          </li>
          <li>
            <h4>Personal Training Sales Leaderboard</h4>
          </li>
          <li v-for="item in Array(25)" :key="item">
            <h4>Personal Training Events</h4>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <h4>Club History & details</h4>
      </div>
    </section>
  </div>
</template>

<script setup>
import PulseMemberSummary from "./pulse-member-summary.vue";
import PulseClubEvents from "./pulse-club-events.vue";
import PulseCheckHistory from "./pulse-check-history.vue";
import PulseItemCard from "./partials/pulse-item-card.vue";
import DetailList from "./partials/detail-list.vue";
import SalesLeaderboard from "./partials/sales-leaderboard-list.vue";

const personalTrainingDetailData = ref([
  { title: "Appointments Sold", amount: 23, colorName: 'secondary' },
  { title: "Appointments Completed", amount: 23, colorName: 'orange' },
  { title: "Sold Amount ($)", amount: 430.25, colorName: 'orange' },
  { title: "Sold Amount (%)", amount: 85, colorName: 'purple' },
  { title: "Percentage to Goal", amount: 75, colorName: 'red' },
]);

const membershipSalesLeaderboard = ref([
  { rank: 1, name: "Sty Stance", points: 120, trending: "up" },
  { rank: 2, name: "Aya Bauchanan", points: 120, trending: "down" },
  { rank: 3, name: "Butch Fierce", points: 120, trending: "neutral" },
  { rank: 4, name: "Henry Owens", points: 120, trending: "down" },
  { rank: 5, name: "Penny Earns", points: 120, trending: "up" },
  { rank: 6, name: "Max Smallson", points: 120, trending: "up" },
  { rank: 7, name: "Steve Maxum", points: 110, trending: "down" },
  { rank: 8, name: "Rich J.", points: 100, trending: "neutral" },
  { rank: 9, name: "Mary Joe", points: 90, trending: "down" },
  { rank: 10, name: "Gary Holmes", points: 80, trending: "up" },
]);
</script>

<style scoped>
::-webkit-scrollbar {
  @apply w-2 py-4;
}

::-webkit-scrollbar-track {
  @apply bg-gray-400/10;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary outline-secondary outline-4 outline;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-secondary/60 outline-secondary/60;
}
/* .pulse-summary {
  @apply flex flex-col xl:flex-row xl:space-x-5 -xl:space-y-5 overflow-y-auto max-h-[100vw];
}
.pulse-summary-item {
  @apply flex flex-col space-y-3;
} */
h4 {
  @apply text-xl font-semibold;
}
</style>
