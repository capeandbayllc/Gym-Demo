<template>
	<div
		class="side-bar"
		:class="{
			'w-7': collapsed,
			'w-14': !collapsed
		}"
	>
		<div class="side-bar-toggler" @click="toggleCollapsed">
			<div class="side-bar-arrow">
				{{collapsed ? '&#11164;' : '&#11166;'}}
			</div>
			<div class="side-bar-text">
				Check In Button
			</div>
		</div>
	</div>
</template>
<style scoped>
.side-bar {
	@apply bg-primary bg-secondary right-0;
	height: calc(100vh - 6rem);
}
.side-bar:hover .side-bar-toggler {
	@apply flex;
}
.side-bar-text {
	@apply align-top w-max absolute text-sm font-semibold;
    transform: translate(0,100%) rotate(-90deg);
    transform-origin: 0 0;
    top: 50%;
}
.side-bar-arrow {
	@apply pl-1;
}
.side-bar-toggler {
	@apply hidden cursor-pointer h-full w-fit;
}
</style>
<script setup>
import {ref} from 'vue';

const collapsed = ref(true);

const toggleCollapsed = () => {
	collapsed.value = !collapsed.value;
}
</script>