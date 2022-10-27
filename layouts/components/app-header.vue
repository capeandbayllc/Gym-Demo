<template>
	<div class="app-header" data-theme="dark">
		<div>
			<app-logo />
		</div>
		<Button size="sm">
			<pulse-icon />
		</Button>
		<header-actions />
	</div>
</template>
<style scoped>
.app-header {
	@apply bg-secondary h-16 flex flex-row items-center justify-between;
	> div {
		@apply w-1/3 h-full;
	}
}
</style>
<script setup>
import {PulseIcon} from "@/components/icons"
import HeaderActions from "./header-actions/index.vue"
</script>