<template>
  <div class="app-layout gradient-bg" v-if="showHeader" ref="layoutRef">
    <app-header
      @show-circular-menu="toggleCircularMenu"
      @show-help="showBot"
      @show-profile-menu="showProfileMenu"
      @show-empoyee-tracking="showEmployeTracking"
      @break="breakPopup"
      class="sticky top-0 z-[25]"
      @show-leader-board="showLeaderBoard"
    />
    <circular-menu v-if="showCircularMenu" @close="toggleCircularMenu" />
    <help-bot ref="helpBot" />
    <profile-menu ref="profileMenu" @isProfileMenuOpen="isProfileMenuOpenFn" />
    <div class="app-content">
      <div class="w-auto">
        <nav-bar />
      </div>
      <div class="w-full relative">
        <!-- <global-search
					v-model="globalSearch"
				/> -->
        <div class="app-body">
          <div class="app-body-content">
            <slot />
          </div>
        </div>
      </div>
      <div class="transition-all duration-200 ease-linear">
        <side-bar />
      </div>
    </div>
    <ChatConversation />
    <!-- <daisy-modal id="globalSearchModal" ref="globalSearchModal" :show-close-button="false">
			<global-search-modal />
		</daisy-modal> -->
    <div ref="floatingTooltip" class="floating-tooltip"></div>
  </div>
  <div
    class="gradient-bg min-h-screen w-screen flex flex-col items-center justify-center"
    v-else
  >
    <slot />
  </div>
  <leader-board-slideout
    :isLeaderBoardVisible="isLeaderBoardVisible"
    @show-leader-board="showLeaderBoard"
  />
  <div id="amplify-deploy-test-2" class="hidden">
    Quick Test to confirm Amplify deployments are working
  </div>
  <Transition name="slide-fade">
    <div
      v-if="isBreak"
      class="break-popup absolute -right-12 top-24 z-[9999] bg-[#0075c9] rounded-[18px] py-2 text-left px-8 w-[312px] min-h-fit"
    >
      <div class="close cursor-pointer w-8 h-8" @click="isBreak = false">
        <span></span>
        <span></span>
      </div>
      <div class="py-2">
        <p class="text-[21px]">You are on break.</p>
        <button
          class="text-white bg-black rounded-full text-[12px] py-1 px-4 mt-2"
        >
          View your calander
        </button>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.break-popup {
  .close {
    @apply absolute -left-4 -top-4 rotate-45 border border-white rounded-full bg-black;
    span {
      @apply absolute left-[7px] top-[14px] h-0.5 w-4 bg-white rounded-lg rotate-0 transition-all;
    }
    span:last-child {
      @apply absolute left-[7px] top-[14px] h-0.5 w-4 bg-white rounded-lg rotate-90 transition-all;
    }
  }
  .close:hover {
    @apply bg-[#0075c9];
    span:first-child {
      @apply rotate-90;
    }
  }
}
.app-layout {
  @apply w-screen /* overflow-x-hidden */;
}
.floating-tooltip {
  @apply text-sm rounded-full px-3 py-1 bg-blue-800 whitespace-nowrap fixed top-0 left-0;
  z-index: 10000;
  &:empty {
    @apply hidden;
  }
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(60px);
  opacity: 0;
}
</style>
<script setup>
import { ref, watchEffect, provide } from "vue";
import AppHeader from "./components/app-header.vue";
import NavBar from "./components/nav-bar/index.vue";
import SideBar from "./components/side-bar.vue";
import CircularMenu from "./components/circular-menu/index.vue";
import HelpBot from "./components/help-bot/index.vue";
import ProfileMenu from "./components/profile-menu/index.vue";

import ChatConversation from "./components/chat-conversation/index.vue";
import { KIOSK_ROUTE, LOGIN_ROUTE } from "~/middleware/auth.global";
import { useQuery } from "@vue/apollo-composable";
import notification from "~/api/queries/notification";
import LeaderBoardSlideout from "~/layouts/components/leader-board/leader-board-slideout.vue";

const layoutRef = useLayoutElement();

const showCircularMenu = ref(false);
const floatingTooltip = ref();
const isBreak = ref(false);

provide("floating-modal", (text, style = {}) => {
  floatingTooltip.value.textContent = text;
  for (const [key, value] of Object.entries(style)) {
    floatingTooltip.value.style[key] =
      typeof value === "function" ? value(floatingTooltip.value) : value;
  }
});

const breakPopup = () => {
  isBreak.value = true;
  setTimeout(() => {
    isBreak.value = false;
  }, 10000);
};

const toggleCircularMenu = () => {
  showCircularMenu.value = !showCircularMenu.value;
};

const helpBot = ref(null);
const showBot = () => helpBot.value.open();

const isLeaderBoardVisible = ref(false);
const showLeaderBoard = () => {
  isLeaderBoardVisible.value = !isLeaderBoardVisible.value;
};

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

const showHeader = ref(false);
const route = useRoute();
getNotifications(useState("auth"));

watchEffect(() => {
  if ([LOGIN_ROUTE, KIOSK_ROUTE].includes(route.path)) {
    showHeader.value = false;
    return;
  }

  showHeader.value = true;
});

function getNotifications(user) {
  if (!user.value) return;

  const { result } = useQuery(notification.query.browse);
  watchEffect(() => {
    if (!result?.value) return;
    user.value.notifications = result.value.notifications.data;
  });
}
</script>
