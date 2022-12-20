<template>
    <div class="app-layout">
		<app-header
			@show-circular-menu="toggleCircularMenu"
			@show-help="showBot"
			@show-profile-menu="showProfileMenu"
		/>
		<circular-menu
			v-if="showCircularMenu"
			@close="toggleCircularMenu"
		/>
		<help-bot ref="helpBot"/>
		<profile-menu ref="profileMenu"/>
		<div class="app-content">
			<nav-bar />
			<div class="w-full relative">
				<!-- <global-search
					v-model="globalSearch"
				/> -->
				<div class="app-body mt-8">
				    <div class="app-body-content">
						<slot />
					</div>
					<side-bar />
				</div>
			</div>
		</div>
		<!-- <daisy-modal id="globalSearchModal" ref="globalSearchModal" :show-close-button="false">
			<global-search-modal />
		</daisy-modal> -->
    </div>
</template>
<style scoped>
.app-layout {
	@apply w-screen overflow-x-hidden;
	background-image: linear-gradient(#2f72c4 -80%, #0c1c31 17%, #000000 100%, #2f72c4 0%);
}
.app-content {
	@apply flex flex-row relative;
}
.app-body {
	@apply flex flex-row justify-between relative;
	.app-body-content {
	    @apply flex flex-col w-full items-center;
		height: calc(100vh - 6rem);
	}
}
</style>
<script setup>
import {ref, watchEffect} from 'vue'
import AppHeader from "./components/app-header.vue";
import NavBar from "./components/nav-bar/index.vue"
import GlobalSearch from "./components/global-search.vue"
import SideBar from "./components/side-bar.vue"
import CircularMenu from "./components/circular-menu/index.vue"
import HelpBot from "./components/help-bot/index.vue"
import ProfileMenu from "./components/profile-menu/index.vue"

import GlobalSearchModal from "./components/global-search-modal/index.vue"

const showCircularMenu = ref(false)

const toggleCircularMenu = () => {
	showCircularMenu.value = !showCircularMenu.value;
}

const helpBot = ref(null)
const showBot = () => helpBot.value.open();

const profileMenu = ref(null)
const showProfileMenu = () => profileMenu.value.open()


const globalSearch = ref("")
const globalSearchModal = ref(null)

watchEffect(() => {
	if (globalSearch.value) {
		globalSearchModal.value.open()
	}
});
</script>