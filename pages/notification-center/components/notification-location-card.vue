<template>
    <simple-card class="notification-location-card -md:text-xs" :closable="false" title="Location">
        <div class="notification-container">
			<div class="notification-title">
				<div class="notification-actions">
					<select-box
						class="w-36"
						label="State"
						:items="stateList"
						transparent
						:secondary="false"
					/>
					<select-box
						class="w-36"
						label="Clubs"
						:items="clubsList"
						:secondary="false"
						transparent
					/>
					<search-input size="lg" border="neutral" neutral/>
				</div>
			</div>
			<data-table
                class="notification-location-table"
				:data="mockLeads"
				:row-component="NotificationTableRow"
				:columns="columns"
			/>
		</div>
    </simple-card>
</template>
<style>
.notification-location-table .notification-table-row {
	td, td > div {
		@apply border-secondary;
	}
}
</style>
<style scoped>
.notification-location-card {
    @apply m-auto bg-neutral mt-5;
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

const stateList = [{
	id: 1,
	label: "State 1",
	value: "State 1"
}, {
	id: 2,
	label: "State 2",
	value: "State 2",
}, {
	id: 3,
	label: "State 3",
	value: "State 3",
}]
const clubsList = [{
	id: 1,
	label: "Club 1",
	value: "Club 1",
}, {
	id: 2,
	label: "Club 2",
	value: "Club 2",
}, {
	id: 3,
	label: "Club 3",
	value: "Club 3",
}];
const columns = ["Type", "Date/ Time", "Tags", "Members", "", "", ""];
const mockLeads = [
    {
        id: 1,
        type: "Upgrade Promo Response",
        date: "2022-09-23",
        time: "10:20 pm",
        tag: "success",
        name: "Jack Smith",
    }, 
    {
        id: 2,
        type: "Upgrade Promo Response",
        date: "2022-09-25",
        time: "7:20 pm",
        tag: "success",
        name: "George W.",
    }, 
    {
        id: 3,
        type: "Upgrade Promo Response",
        date: "2022-09-23",
        time: "5:30 pm",
        tag: "success",
        name: "Jason Richards",
    }
];
</script>