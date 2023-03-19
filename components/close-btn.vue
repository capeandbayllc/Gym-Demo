<template>
	<div class="close-btn" :class="{'bg-black':isBlack}">
		<cross-circle-icon />
	</div>
</template>
<style scoped>
.close-btn {
	@apply transition duration-200 ease-in-out cursor-pointer rounded-full w-[41px];
}
.close-btn:hover {
	@apply rotate-90;
}
</style>
<script setup>
import { CrossCircleIcon } from '@/components/icons'

const props = defineProps({
	isBlack: {
		type: Boolean,
		default: false,
	},
});
</script>