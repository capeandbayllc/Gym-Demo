<template>
  <div class="header-actions">
    <!-- <Button outline size="sm" class="hover:text-secondary"><pos-icon />POS</Button>
		<Button outline size="sm" class="hover:text-secondary"
			@click="$emit('show-people-search')"
		>
			<people-icon />People
		</Button> -->
    <div @mouseover="showFocus" @mouseleave="hideFocus">
      <input
        ref="globalSearchInput"
        type="text"
        placeholder="Search"
        class="input global-search-input w-80 -xl:w-40 -lg:w-80 -md:w-40 -lg:mr-0 mr-9 bg-base-content rounded text-black text-lg h-9"
        @click="$emit('show-global-search')"
      />
    </div>
    <div class="relative">
      <person-add-icon @click="showUserMenu" />
      <user-add-menu ref="userMenu" />
    </div>
    <div class="alert-container mt-1">
      <alarm-btn @click="$emit('show-alert-modal')" />
      <alert-list class="alert-list" />
    </div>
    <!-- <div class="setting-icon">		
			<setting-icon />
		</div> -->
    <div class="relative z-10">
      <question-round-icon @click="$emit('show-help')" />
    </div>
    <div class="leader-board-container relative z-10">
      <people-icon @click="toggle" />

      <LeaderPop v-if="showLeaderPop" @close="toggle" class="leader-pop" />
    </div>
    <div class="!ml-[-40px]">
      <account-btn @click="$emit('show-profile-menu')" />
    </div>
  </div>
</template>
<style>
.alert-container:hover svg {
  @apply rotate-12;
}
.alert-container:hover .notification {
  @apply -right-2 left-auto z-10 ease-linear;
}
.person-add-icon:hover path {
  @apply opacity-100;
}
/* .setting-icon:hover{
		animation: spin 1s linear 0.5; opacity: 0.5;
	} */
/*.leader-board-container:hover svg{*/
/*  @apply rotate-12;*/
/*}*/
.leader-board-container:hover .notification {
  @apply -right-2 left-auto z-10 ease-linear;
}
</style>
<style scoped>
.header-actions {
  @apply flex items-center justify-end space-x-9 mx-8 -lg:space-x-4 -xl:space-x-3;
  > button svg {
    @apply mr-1;
  }
  svg {
    @apply cursor-pointer;
  }
  .global-search-input:hover {
    cursor: pointer;
  }
}
.alert-container:hover .alert-list {
  @apply block;
}

.leader-board-container:hover .leader-pop {
  @apply block;
}
.alert-container {
  @apply relative -sm:!ml-4;
  .alert-list {
    @apply absolute z-20 hidden;
    right: -8rem;
  }
}
.leader-board-container {
  @apply relative -sm:!ml-4;
  .leader-pop {
    @apply block;
    right: -8rem;
  }
}
</style>
<script setup>
import { ref } from "vue";
import {
  PosIcon,
  PeopleIcon,
  PersonAddIcon,
  SettingIcon,
  QuestionRoundIcon,
} from "@/components/icons";
import AlarmBtn from "./alarm-btn.vue";
import AccountBtn from "./account-btn.vue";
import AlertList from "./alert-list.vue";
import LeaderPop from "~/layouts/components/leader-board/popup.vue";
import UserAddMenu from "./user-add-menu.vue";

const userMenu = ref(null);
const globalSearchInput = ref("");
const showFocus = () => {
  globalSearchInput.value.style = "";
  globalSearchInput.value.focus();
};
const hideFocus = () => {
  globalSearchInput.value.blur();
};
const showLeaderPop = ref(false);
const toggle = () => {
  showLeaderPop.value = !showLeaderPop.value;
  console.log("toggle");
};

const showUserMenu = () => userMenu.value.open();
</script>
