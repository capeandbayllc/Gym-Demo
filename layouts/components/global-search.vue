<template>
	<div class="h-8">
		<div
			class="global-search-container"
			:class="{
				'h-8': collapsed,
				'h-16': !collapsed
			}"
		>
			<div v-if="!collapsed"></div>
			<span class="search-toggle" @click="toggleSearch">
				Global Search &nbsp;
				<span v-if="collapsed">&#11167;</span>
				<span v-else>&#11165;</span>
			</span>
			<div class="search-input-box" v-if="!collapsed">
				<search-input size="8"/>
			</div>
		</div>
	</div>
</template>
<style scoped>
.global-search-container {
	@apply flex bg-primary absolute z-10 justify-center;
	width: calc(100vw - 3.5rem);
	.search-toggle {
		@apply cursor-pointer h-fit pt-1;
	}
	.search-input-box {
		@apply flex px-9 absolute right-0 bottom-4;
	}
}
</style>
<script setup>
import { ref } from 'vue'
import { ArrowIcon } from "@/components/icons"

const collapsed = ref(true)

const toggleSearch = () => {
	collapsed.value = !collapsed.value
}
</script>