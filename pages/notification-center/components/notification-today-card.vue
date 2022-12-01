<template>
    <simple-card class="notification-today-card -md:text-xs" :closable="false" title="Today">
        <div class="notification-container">
			<div class="notification-title">
				<div class="notification-actions">
					<select-box
						class="w-36"
						label="Locations"
						:items="locationsList"
						transparent
						:secondary="false"
					/>
					<select-box
						class="w-36"
						label="Names"
						:items="namesList"
						:secondary="false"
						transparent
					/>
					<search-input size="lg" border="neutral" neutral/>
				</div>
			</div>
			<data-table
				class="notification-today-table"
				:data="mockToday"
				:row-component="NotificationTableRow"
				:columns="columns"
			/>
		</div>
    </simple-card>
</template>
<style>
.notification-today-table .notification-table-row {
	td, td > div {
		@apply border-error;
	}
}
</style>
<style scoped>
.notification-today-card {
    @apply m-auto bg-neutral;
	.notification-container {
		@apply p-4;
	}
	.notification-title {
		@apply flex flex-row justify-end items-center;
	}
    .notification-actions {
    	@apply flex flex-row space-x-8 justify-end mb-2 mt-5;
    }
}
</style>
<script setup>
import NotificationTableRow from './notification-table-row.vue';
const locationsList = [{
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
}];
const namesList = [{
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
}];
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
}];
</script>