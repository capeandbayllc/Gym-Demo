<template>
	<div
		class="side-bar"
		:class="{
			'collapsed': collapsed,
			'expanded': (!collapsed || windowWidth >= 1920)
		}"
	>
		<div class="side-bar-toggler" @click="toggleCollapsed" v-if="collapsed && windowWidth < 1920">
			<div class="side-bar-arrow">
				{{collapsed ? '&#11164;' : '&#11166;'}}
			</div>
			<div class="side-bar-text">
				Check In Button
			</div>
		</div>
		<side-bar-content v-else @close="toggleCollapsed"/>
	</div>
</template>
<style scoped>
.side-bar {
	@apply absolute right-0 z-20;
	height: calc(100vh - 6rem);
	&.collapsed {
		@apply w-5 hover:w-7 bg-secondary;
		@screen 3xl {
			@apply hover:w-80;
		}
	}
	&.expanded {
		@apply w-80 border border-secondary bg-neutral;
	}
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
import {ref,onMounted,nextTick} from 'vue';
import SideBarContent from './side-bar-content/index.vue'
const collapsed = ref(true);

const toggleCollapsed = () => {
	collapsed.value = !collapsed.value;
}

const windowWidth = ref(null);

onMounted(async () => {
	windowWidth.value = window.innerWidth
	await nextTick();
	window.addEventListener('resize', onResize);
});

const onResize = ()=> {
    windowWidth.value = window.innerWidth
}
</script>