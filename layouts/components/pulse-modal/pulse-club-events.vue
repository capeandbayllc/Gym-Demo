<template>
	<div class="pulse-club-events">
		<div class="pulse-club-event-list">
			<div
				v-for="item in mock"
				:key="item.id"
				class="pulse-club-event"
			>
				<div class="pulse-club-event-count">
					{{item.value}}
				</div>
				<div class="pulse-club-event-title">
					{{item.title}}
				</div>
			</div>
		</div>
		<span class="self-end">View Details</span>
	</div>
</template>
<style scoped>
.pulse-club-events {
	@apply px-10 py-4 h-full border border-secondary rounded flex flex-col justify-between;
}
.pulse-club-event-list {
	@apply flex flex-col space-y-7;
}
.pulse-club-event {
	@apply flex flex-row space-x-3 items-center;
}
.pulse-club-event-title {
	@apply text-xl font-semibold w-max;
}
.pulse-club-event-count {
	@apply flex items-center justify-center text-4xl font-bold bg-black border border-secondary rounded w-12;
}
</style>
<script setup>
const mock = [{
	id: 1,
	title: "PT Introductions",
	value: 6
}, {
	id: 2,
	title: "Ribbon Dance",
	value: 9
}, {
	id: 3,
	title: "Cycle Class",
	value: 2
}, {
	id: 4,
	title: "Beginners Yoga",
	value: 2
}]
</script>