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
		<span class="self-end pr-5 pb-4">View Details</span>
	</div>
</template>
<style scoped>
.pulse-club-events {
	@apply h-full border border-secondary rounded flex flex-col justify-between bg-base-300;
}
.pulse-club-event-list {
	@apply pt-10 pb-3 px-10 flex flex-col space-y-7;
}
.pulse-club-event {
	@apply flex flex-row space-x-3 items-center;
}
.pulse-club-event-title {
	@apply text-xl font-semibold w-max;
}
.pulse-club-event-count {
	@apply flex items-center text-4xl  justify-center font-bold bg-black border border-secondary rounded w-12 py-1;
	font-family: sans-serif;
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