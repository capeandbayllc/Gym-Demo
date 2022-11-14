<template>
    <simple-card class="checkin-notification-card" :closable="true" title="Notifications">
        <div class="notification-container">
			<div class="notification-title">
				<h3>Today</h3>
				<div class="notification-actions">
					<select-box
						class="w-36"
						label="Locations"
						:items="locations"
						transparent
						:secondary="false"
					/>
					<select-box
						class="w-36"
						label="Names"
						:items="names"
						:secondary="false"
						transparent
					/>
					<search-input size="lg" border="neutral" neutral/>
				</div>
			</div>
			<data-table
				class="notification-today"
				:data="mockToday"
				:row-component="NotificationResponseRow"
				:columns="columns"
			/>
			<div class="notification-title">
				<h3>Leads/Members</h3>
				<div class="notification-actions">
					<select-box
						class="w-36"
						label="Locations"
						:items="locations"
						transparent
						:secondary="false"
					/>
					<select-box
						class="w-36"
						label="Names"
						:items="names"
						:secondary="false"
						transparent
					/>
					<search-input size="lg" border="neutral" neutral/>
				</div>
			</div>
			<data-table
				class="notification-leads"
				:data="mockLeads"
				:row-component="NotificationResponseRow"
				:columns="columns"
			/>
		</div>
    </simple-card>
</template>
<style>
.notification-today, .notification-leads {
	@apply h-64 overflow-y-auto;
}
.notification-today .notification-table-row {
	td, td > div {
		@apply border-error;
	}
}
.notification-leads .notification-table-row {
	td, td > div {
		@apply border-secondary;
	}
}
</style>
<style scoped>
.checkin-notification-card {
    @apply w-fit m-auto bg-neutral;
	.notification-container {
		@apply p-4;
	}
	.notification-title {
		@apply flex flex-row justify-between items-center;
		h3 {
			@apply text-xl font-semibold pl-4;
		}
	}
    .notification-actions {
    	@apply flex flex-row space-x-8 justify-end mb-2 mt-5;
    }
}
</style>
<script setup>
import NotificationResponseRow from './notification-response-row.vue';
const locations = [{
	id: 1,
	label: "Location",
	value: 1
}, {
	id: 2,
	value: 2,
	label: "Location",
}, {
	id: 3,
	value: 3,
	label: "Location",
}]
const names = [{
	id: 1,
	label: "Name",
	value: 1
}, {
	id: 2,
	value: 2,
	label: "Name",
}, {
	id: 3,
	value: 3,
	label: "Name",
}]
const columns = ["Type", "Date/ Time", "Tags", "Members", "", "", ""]
const mockToday = [{
	id: 1,
	type: "Promo Response",
	date: "2022-09-23",
	time: "10:20 pm",
	tag: "error",
	name: "Jack Smith",
}, {
	id: 2,
	type: "Promo Response",
	date: "2022-09-25",
	time: "7:20 pm",
	tag: "error",
	name: "George W.",
}, {
	id: 3,
	type: "Promo Response",
	date: "2022-09-23",
	time: "5:30 pm",
	tag: "error",
	name: "Jason Richards",
}]

const mockLeads = [{
	id: 1,
	type: "Upgrade Promo Response",
	date: "2022-09-23",
	time: "10:20 pm",
	tag: "warning",
	name: "Jack Smith",
}, {
	id: 2,
	type: "Upgrade Promo Response",
	date: "2022-09-25",
	time: "7:20 pm",
	tag: "warning",
	name: "George W.",
}, {
	id: 3,
	type: "Upgrade Promo Response",
	date: "2022-09-23",
	time: "5:30 pm",
	tag: "warning",
	name: "Jason Richards",
}]
</script>