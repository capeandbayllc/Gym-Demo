<template>
  <div class="header-actions">
    <div @mouseover="showFocus" @mouseleave="hideFocus">
      <FormAppInput
        ref="globalSearchInput"
        @click="$emit('show-global-search')"
        placeholder="Search"
        v-model="globalSearch"
        :readonly="true"
        class="cursor-text"
      />
    </div>
    <div class="relative">
      <person-add-icon @click="showUserMenu" />
      <user-add-menu ref="userMenu" />
    </div>
    <div class="alert-container mt-1">
      <alarm-btn
        :count="user.notifications.length"
        @click="$emit('show-alert-modal')"
      />
      <alert-list :list="user.notifications" class="alert-list" />
    </div>

    <div class="leader-board-container relative z-10">
      <button
        class="w-8 h-8 bg-secondary p-1 rounded-lg border-2 border-primary-content"
      >
        <TrophyIcon
          @mouseover="openLeaderboardPopover"
          @click="$router.push('/leaderboard')"
        />
      </button>
      <LeaderPop
        v-if="isLeaderboardPopoverVisible"
        @close="closeLeaderboardPopover"
        @show-leader-board="showLeaderBoard"
        class="leader-pop"
      />
    </div>
    <div class="employe-time-tracking">
      <TimeTracking @click="$emit('show-empoyee-tracking')" />
    </div>
    <div class="">
      <account-btn @click="$emit('show-profile-menu')" />
    </div>
  </div>
</template>
<style lang="postcss">
.alert-container:hover svg {
  @apply rotate-12;
}
.alert-container:hover .notification {
  @apply -right-2 left-auto z-10 ease-linear;
}
.person-add-icon:hover path {
  @apply opacity-100;
}
.leader-board-container:hover .notification {
  @apply -right-2 left-auto z-10 ease-linear;
}
</style>
<style scoped lang="postcss">
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
import { PersonAddIcon } from "@/components/icons";
import AlarmBtn from "./alarm-btn.vue";
import TimeTracking from "./time-track.vue";
import AccountBtn from "./account-btn.vue";
import AlertList from "./alert-list.vue";
import LeaderPop from "~/layouts/components/leader-board/popup.vue";
import UserAddMenu from "./user-add-menu.vue";
import TrophyIcon from "~/components/icons/trophy.vue";

const userMenu = ref(null);

const emit = defineEmits(["show-leader-board"]);
const showLeaderBoard = () => {
  emit("show-leader-board");
};
const isLeaderboardPopoverVisible = ref(false);
const openLeaderboardPopover = () => {
  isLeaderboardPopoverVisible.value = true;
};
const closeLeaderboardPopover = () => {
  isLeaderboardPopoverVisible.value = false;
};

const showUserMenu = () => userMenu.value.open();
const user = useState("auth");
console.log(user, "user");
</script>
