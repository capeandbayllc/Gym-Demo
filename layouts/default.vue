<template>
    <div class="app-layout">
		<app-header />
		<div class="app-content">
			<nav-bar />
			<div class="w-full">
				<global-search />
				<slot />
			</div>
			<side-bar />
		</div>
    </div>
</template>
<style scoped>
.app-layout {
	@apply w-screen;
}
.app-content {
	@apply flex flex-row;
}
</style>
<script setup>
import AppHeader from "./components/app-header.vue";
import NavBar from "./components/nav-bar/index.vue"
import GlobalSearch from "./components/global-search.vue"
import SideBar from "./components/side-bar.vue"
</script>