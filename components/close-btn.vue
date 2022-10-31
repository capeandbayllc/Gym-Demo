<template>
	<div class="close-btn">
		<cross-circle-icon />
	</div>
</template>
<style scoped>
.close-btn {
	@apply transition duration-200 ease-in-out cursor-pointer;
}
.close-btn:hover {
	@apply rotate-90;
}
</style>
<script setup>
import { CrossCircleIcon } from '@/components/icons'
</script>