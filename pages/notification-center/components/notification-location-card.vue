<template>
    <simple-card class="notification-location-card -md:text-xs" :closable="false" title="Location">
        <div class="notification-container">
			<div class="notification-title">
				<div class="notification-actions">
					<select-box
						class="max-w-[200px]"
						label="Call type"
						:items="stateList"
						transparent
						:secondary="true"
					/>
					<select-box
						class="max-w-[200px]"
						label="Call type"
						:items="clubsList"
						:secondary="true"
						transparent
					/>
					<FormAppInput height="h-[25px] md:h-[32px]" width="w-full max-w-[300px]" placeholder="Search" />	
				</div>
			</div>
			<div class="overflow-x-scroll">
				<data-table
					class="notification-location-table"
					:data="mockLeads"
					:row-component="NotificationTableRow"
					:columns="columns"
				/>
			</div>
		</div>
    </simple-card>
</template>
<style lang="postcss">
.notification-location-card {
	.notification-actions .select-box-btn{
		@apply rounded-xl;
	}
	.notification-table-row {
		td, td > div {
			@apply border-secondary;
		}
	}
}
</style>
<style scoped lang="postcss">
.notification-location-card {
    @apply m-auto bg-base-300 mt-5;
	.notification-container {
		@apply p-4;
	}
	.notification-title {
		@apply flex flex-row justify-end items-center;
	}
    .notification-actions {
    	@apply w-full flex flex-wrap gap-3 flex-row justify-end items-center mb-2 mt-5;
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