<template>
	<div
		class="global-search-container"
		:class="{
			'h-8 justify-center': collapsed,
			'h-16  justify-between': !collapsed
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
</template>
<style scoped>
.global-search-container {
	@apply flex bg-primary relative;
	> div {
		@apply w-1/3;
	}
	.search-toggle {
		@apply cursor-pointer h-fit;
	}
	.search-input-box {
		@apply flex justify-end px-9;
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