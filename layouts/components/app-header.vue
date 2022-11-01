<template>
	<div class="app-header" data-theme="dark">
		<div>
			<app-logo @click="$emit('show-circular-menu')"/>
		</div>
		<Button size="sm" class="btn-pulse">
			<pulse-icon @click="showPulseModal"/>
		</Button>
		<header-actions
			@show-people-search="showPeopleSearchModal"
			@show-help="$emit('show-help')"
		/>
		<daisy-modal id="pulseModal" ref="pulseModal">
			<pulse-modal />
		</daisy-modal>
		<daisy-modal id="peopleSearchModal" ref="peopleSearchModal">
			<people-search-modal />
		</daisy-modal>

	</div>
	
</template>
<style scoped>
.app-header {
	@apply bg-secondary h-16 flex flex-row items-center justify-between;
	> div {
		@apply w-full h-full;
	}
}

.btn-pulse:hover {
	box-shadow: 0 0 0 4px hsl(var(--inc, var(--nc)));
}
</style>
<script setup>
import {ref} from 'vue'
import {PulseIcon} from "@/components/icons"
import HeaderActions from "./header-actions/index.vue"
import PulseModal from "./pulse-modal/index.vue"
import PeopleSearchModal from "./people-search-modal/index.vue"

const pulseModal = ref(null)
const peopleSearchModal = ref(null)

const showPulseModal = () => {
	pulseModal.value.open()
}
const showPeopleSearchModal = () => {
	peopleSearchModal.value.open()
}

</script>