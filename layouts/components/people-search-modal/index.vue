<template>
	<simple-card title="People Search">
		<div class="people-search-container">
			<div class="people-search-actions">
				<select-box
					class="w-40"
					label="Member Type"
					:items="memTypes"
				/>
				<select-box
					class="w-40"
					label="Locations"
					:items="locations"
				/>
				<select-box
					class="w-40"
					label="Sort By: Featured"
					:items="sortBy"
				/>
				<search-input size="lg" border="base-content"/>
			</div>
			<div class="border border-secondary rounded px-8 py-6 mt-8 ml-10 flex flex-col space-y-4">
				<people-lead-table />
				<people-member-table />
			</div>
		</div>
	</simple-card>
</template>
<style scoped>
.people-search-container {
	@apply pl-2 pr-9 pt-10 pb-8;
}

.people-search-actions {
	@apply flex flex-row space-x-8 justify-end;
}
</style>
<script setup>
import PeopleLeadTable from './people-lead-table.vue';
import PeopleMemberTable from './people-member-table.vue';

const memTypes = [{
	id: 1,
	label: "Premium",
	value: "premium"
}, {
	id: 2,
	value: "basic",
	label: "Basic"
}, {
	id: 3,
	value: "gold",
	label: "Gold"
}]
const locations = [{
	id: 1,
	label: "Location ####",
	value: 1
}, {
	id: 2,
	value: 2,
	label: "Location ####",
}, {
	id: 3,
	value: 3,
	label: "Location ####",
}]
const sortBy = [{
	id: 1,
	label: "Featured",
	value: 1
}, {
	id: 2,
	value: 2,
	label: "A-Z",
}, {
	id: 3,
	value: 3,
	label: "Z-A",
}]
</script>