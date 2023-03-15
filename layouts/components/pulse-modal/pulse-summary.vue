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
      class="max-h-[50vh] h-full flex gap-4 justify-center pb-8 px-24 overscroll-contain"
    >
      <div class="overflow-y-scroll w-full pr-12">
        <ul class="w-full">
          <li>
            <PulseItemCard title="Club Membership Details">
              <template #card-content>
                <ItemGridList :spacings="gridItemSpacing" />
              </template>
            </PulseItemCard>
          </li>
          <li>
            <h4>Membership Draft Breakdown</h4>
          </li>
          <li>
            <h4>Memberhsip Sales Leaderboard</h4>
          </li>
          <li>
            <h4>Membership Calls and Mass Comms</h4>
          </li>
          <li>
            <PulseItemCard title="Personal Training Details">
              <template #card-content>
                <ItemGridList :data="personalTrainingDetailData" />
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
import ItemGridList from "./partials/item-grid-list.vue";

const personalTrainingDetailData = ref([
  { title: "Appointments Sold", amount: 23, colorName: 'secondary' },
  { title: "Appointments Completed", amount: 23, colorName: 'orange' },
  { title: "Sold Amount ($)", amount: 430.25, colorName: 'orange' },
  { title: "Sold Amount (%)", amount: 85, colorName: 'purple' },
  { title: "Percentage to Goal", amount: 75, colorName: 'red' },
]);

const gridItemSpacing = ref(["5rem", "1fr", "5rem"]);
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
