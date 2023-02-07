<template>
    <div class="app-layout gradient-bg">
		<app-header
			@show-circular-menu="toggleCircularMenu"
			@show-help="showBot"
			@show-profile-menu="showProfileMenu"
			class="sticky top-0 z-[22]"
		/>
		<circular-menu
			v-if="showCircularMenu"
			@close="toggleCircularMenu"
		/>
		<help-bot ref="helpBot"/>
		<profile-menu ref="profileMenu" @isProfileMenuOpen="isProfileMenuOpenFn"/>
		<div class="app-content">
			<nav-bar />
			<div class="w-full relative">
				<!-- <global-search
					v-model="globalSearch"
				/> -->
				<div class="app-body">
				    <div class="app-body-content">
						<slot />
					</div>
					<side-bar />
				</div>
			</div>
		</div>
		<ChatConversation />
		<!-- <daisy-modal id="globalSearchModal" ref="globalSearchModal" :show-close-button="false">
			<global-search-modal />
		</daisy-modal> -->
    </div>
</template>
<style scoped>
.app-layout {
	@apply w-screen /* overflow-x-hidden */;
}
.app-content {
	@apply flex flex-row relative;
	min-height:calc(100vh - 4rem);
}
.app-body {
	@apply flex flex-row justify-between relative h-full;
	.app-body-content {
	    @apply flex flex-col w-full items-center h-full py-8;
		/* height: calc(100vh - 6rem); */

	}
}
</style>
<script setup>
import {ref, watchEffect,provide} from 'vue'
import AppHeader from "./components/app-header.vue";
import NavBar from "./components/nav-bar/index.vue"
import GlobalSearch from "./components/global-search.vue"
import SideBar from "./components/side-bar.vue"
import CircularMenu from "./components/circular-menu/index.vue"
import HelpBot from "./components/help-bot/index.vue"
import ProfileMenu from "./components/profile-menu/index.vue"

import GlobalSearchModal from "./components/global-search-modal/index.vue"

import ChatConversation from "./components/chat-conversation/index.vue"

const showCircularMenu = ref(false)

const toggleCircularMenu = () => {
	showCircularMenu.value = !showCircularMenu.value;
}

const helpBot = ref(null)
const showBot = () => helpBot.value.open();

const profileMenu = ref(null)
const showProfileMenu = () => {
	profileMenu.value.open()
}
const profileMenuStatus = ref(false);
provide('profileMenu',profileMenuStatus);
const isProfileMenuOpenFn = (data) =>{
	profileMenuStatus.value = data;
	provide('profileMenu',profileMenuStatus);
}

const globalSearch = ref("")
const globalSearchModal = ref(null)

watchEffect(() => {
	if (globalSearch.value) {
		globalSearchModal.value.open()
	}
});
</script>