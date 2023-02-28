<template>
  <div class="app-layout gradient-bg" v-if="isLoggedIn">
    <app-header
      @show-circular-menu="toggleCircularMenu"
      @show-leader-board="showLeaderBoard"
      @show-help="showBot"
      @show-leader-pop="showLeaderPop"
      @show-profile-menu="showProfileMenu"
      class="sticky top-0 z-[22]"
    />
    <circular-menu v-if="showCircularMenu" @close="toggleCircularMenu" />
    <help-bot ref="helpBot" />
    <leader-board ref="leaderBoard" />
    <leader-board-pop ref="leaderBoardPop" />
    <profile-menu ref="profileMenu" @isProfileMenuOpen="isProfileMenuOpenFn" />
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
  <div
    class="gradient-bg min-h-screen w-screen flex flex-col items-center justify-center"
    v-else
  >
    <slot />
  </div>
</template>
<style scoped>
.app-layout {
  @apply w-screen /* overflow-x-hidden */;
}
.app-content {
  @apply flex flex-row relative;
  min-height: calc(100vh - 4rem);
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
import { ref, watchEffect, provide, onMounted, watch } from "vue";
import AppHeader from "./components/app-header.vue";
import NavBar from "./components/nav-bar/index.vue";
import GlobalSearch from "./components/global-search.vue";
import SideBar from "./components/side-bar.vue";
import CircularMenu from "./components/circular-menu/index.vue";
import HelpBot from "./components/help-bot/index.vue";
import LeaderBoard from "./components/leader-board/index.vue";
import LeaderBoardPop from "./components/leader-board/popup.vue";
import ProfileMenu from "./components/profile-menu/index.vue";

import GlobalSearchModal from "./components/global-search-modal/index.vue";

import ChatConversation from "./components/chat-conversation/index.vue";

const showCircularMenu = ref(false);

const toggleCircularMenu = () => {
  showCircularMenu.value = !showCircularMenu.value;
};

const helpBot = ref(null);
const showBot = () => helpBot.value.open();

const leaderBoard = ref(null);
const showLeaderBoard = () => leaderBoard.value.open();

const leaderBoardPop = ref(null);
const showLeaderPop = () => leaderBoardPop.value.open();

const profileMenu = ref(null);
const showProfileMenu = () => {
  profileMenu.value.open();
};
const profileMenuStatus = ref(false);
provide("profileMenu", profileMenuStatus);
const isProfileMenuOpenFn = (data) => {
  profileMenuStatus.value = data;
  provide("profileMenu", profileMenuStatus);
};

const globalSearch = ref("");
const globalSearchModal = ref(null);

watchEffect(() => {
  if (globalSearch.value) {
    globalSearchModal.value.open();
  }
});

const isLoggedIn = ref(false);
const route = useRoute();
const authCookie = useCookie("token", { watch: true });

watchEffect(() => {
  if (route.path === "/login") {
    isLoggedIn.value = false;
  } else {
    isLoggedIn.value = true;
  }
});
// watch(route, (newRoute) => {
//   console.log({ route: route.value, newRoute: newRoute.value });
//   if (newRoute.path === "/login") {
//   }
// });

// const authCookie = useCookie("token", { watch: true });
// watchEffect(() => console.log("layou", { authCookie: authCookie.value }));

// const isLoggedIn = computed(() => authCookie?.value === true);

// watch(isLoggedIn, async () => {
//   console.log({ isLoggedIn: isLoggedIn.value });
//   if (isLoggedIn) {
//     await navigateTo("/");
//   } else {
//     await navigateTo("/login");
//   }
// });
</script>
