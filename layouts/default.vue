<template>
    <div class="app-layout">
		<app-header
			@show-circular-menu="toggleCircularMenu"
			@show-help="showBot"
		/>
		<circular-menu
			v-if="showCircularMenu"
			@close="toggleCircularMenu"
		/>
		<help-bot ref="helpBot"/>
		<div class="app-content">
			<nav-bar />
			<div class="w-full relative">
				<global-search />
				<div class="app-body">
					<slot />
					<side-bar />
				</div>
			</div>
		</div>
    </div>
</template>
<style scoped>
.app-layout {
	@apply w-screen overflow-hidden;
}
.app-content {
	@apply flex flex-row;
}
.app-body {
	@apply flex flex-row justify-between relative;
}
</style>
<script setup>
import {ref} from 'vue'
import AppHeader from "./components/app-header.vue";
import NavBar from "./components/nav-bar/index.vue"
import GlobalSearch from "./components/global-search.vue"
import SideBar from "./components/side-bar.vue"
import CircularMenu from "./components/circular-menu/index.vue"
import HelpBot from "./components/help-bot/index.vue"

const showCircularMenu = ref(false)

const toggleCircularMenu = () => {
	showCircularMenu.value = !showCircularMenu.value;
}

const helpBot = ref(null)
const showBot = () => helpBot.value.open();
</script>