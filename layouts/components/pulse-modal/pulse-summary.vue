<template>
	<div class="pulse-summary">
		<div class="pulse-summary-item">
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
		</div>
	</div>
</template>
<style scoped>
.pulse-summary {
	@apply flex flex-col xl:flex-row xl:space-x-5 -xl:space-y-5 overflow-y-auto max-h-[100vw];
}
.pulse-summary-item {
	@apply flex flex-col space-y-3;
}
h4 {
	@apply text-xl font-semibold;
}
</style>
<script setup>
import PulseMemberSummary from './pulse-member-summary.vue'
import PulseClubEvents from './pulse-club-events.vue'
import PulseCheckHistory from './pulse-check-history.vue'
</script>