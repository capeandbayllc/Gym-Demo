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
    <section class="max-h-[50vh] h-full flex">
      <div class="overflow-y-scroll">
        <ul>
          <li>
            <h4>Club Membership Details</h4>
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
            <h4>Personal Training Details</h4>
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
      <div>
        <h4>Club History & details</h4>
      </div>
    </section>
  </div>
</template>
<style scoped>
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
<script setup>
import PulseMemberSummary from "./pulse-member-summary.vue";
import PulseClubEvents from "./pulse-club-events.vue";
import PulseCheckHistory from "./pulse-check-history.vue";
</script>
