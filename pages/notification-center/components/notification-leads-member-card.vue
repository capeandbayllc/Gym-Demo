<template>
    <simple-card class="notification-leads-member-card -md:text-xs" :closable="false" title="Leads/Members">
        <div class="notification-container">
			<div class="notification-title">
				<div class="notification-actions">
					<select-box
						class="w-36"
						label="Call type"
						:items="leadsList"
						transparent
						:secondary="true"
					/>
					<select-box
						class="w-36"
						label="Call type"
						:items="membersList"
						:secondary="true"
						transparent
					/>
					<FormAppInput height="!h-[29px]" width="w-[400px]" placeholder="Search" />	
				</div>
			</div>
			<div class="overflow-x-scroll">
				<data-table
					class="notification-leads-member-table"
					:data="mockLeads"
					:row-component="NotificationTableRow"
					:columns="columns"
				/>
			</div>
		</div>
    </simple-card>
</template>
<style lang="postcss">
.notification-leads-member-card {
	.notification-actions .select-box-btn{
		@apply rounded-xl;
	}
	.notification-actions .select-box-btn{
		@apply rounded-xl;
	}
	.notification-table-row{
		@apply bg-base-300;	
	}
	.notification-table-row {
		td, td > div {
			@apply border-secondary;
		}
	}
}
</style>
<style scoped lang="postcss">
.notification-leads-member-card {
    @apply m-auto mt-5 bg-base-300;
	.notification-container {
		@apply p-4;
	}
	.notification-title {
		@apply flex flex-row justify-end items-center;
		h3 {
			@apply text-xl font-semibold pl-4;
		}
	}
    .notification-actions {
    	@apply flex flex-row space-x-3 justify-end mb-2 mt-5;
    }
}
</style>
<script setup>
import NotificationTableRow from './notification-table-row.vue';
const leadsList = [{
	id: 1,
	label: "Leads 1",
	value: 1
}, {
	id: 2,
	value: 2,
	label: "Leads 2",
}, {
	id: 3,
	value: 3,
	label: "Leads 3",
}]
const membersList = [{
	id: 1,
	label: "Member 1",
	value: 1
}, {
	id: 2,
	value: 2,
	label: "Member 2",
}, {
	id: 3,
	value: 3,
	label: "Member 3",
}];
const columns = ["Type", "Date/ Time", "Tags", "Members", "", "", ""];

const mockLeads = [
    {
        id: 1,
        type: "Upgrade Promo Response",
        date: "2022-09-23",
        time: "10:20 pm",
        tag: "warning",
        name: "Jack Smith",
    }, 
    {
        id: 2,
        type: "Upgrade Promo Response",
        date: "2022-09-25",
        time: "7:20 pm",
        tag: "warning",
        name: "George W.",
    }, 
    {
        id: 3,
        type: "Upgrade Promo Response",
        date: "2022-09-23",
        time: "5:30 pm",
        tag: "warning",
        name: "Jason Richards",
    }
];
</script>