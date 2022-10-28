<template>
	<div class="app-header" data-theme="dark">
		<div>
			<app-logo @click="$emit('show-circular-menu')"/>
		</div>
		<Button size="sm" class="btn-pulse">
			<pulse-icon />
		</Button>
		<header-actions />
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
import {PulseIcon} from "@/components/icons"
import HeaderActions from "./header-actions/index.vue"
</script>