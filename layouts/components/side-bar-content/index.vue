<template>
  <transition name="fade">
    <!--    Initial Sidebar -->
    <div class="side-bar-content-container transition-all duration-200 ease-linear overflow-x-hidden">
      <div v-if="!showCheckIn" class="">
        <arrow-icon direction="right" class="collapse-icon" @click="$emit('close')"/>

        <div class="mem-checkin-btn" @click="showCheckIn = true">Member Check In</div>
        <div class="divider mt-1 mb-4"></div>

        <div class="active-members">
          <div class="col-span-8 text-base">Active Club Members</div>
          <div class="active-member-count text-center"><p class=""> {{ activeMembers }} </p></div>
        </div>

        <div class="location-list">
          <!--        <select-location class="" />-->
          <select-location :items="locations" label="Location"></select-location>
        </div>

        <div class="divider my-6 border-b-2"></div>
        <div class="member-list">
          <side-bar-member v-for="(member, index) in membersData" :key="member.id"
                           @update:activeMembers="updateActiveMembers"
                           :index="index"
                           v-bind="{...member}"/>
        </div>
      </div>
      <!--    Member Check In Sidebar -->
      <div v-else>
        <cross-icon class="cross-icon collapse-icon h-3" @click="showCheckIn = false">X</cross-icon>
        <div class="mem-checkin-btn-two" @click="showCheckIn = false">Member Check In</div>

        <div class="scan-pass">
          <img class="mx-auto" src="/scan_pass.png"/>
        </div>

        <div class="guest-input">
          <input class="search-input"
                 v-model="form.guestSearch"/>
          <div class="absolute bottom-0 top-1/3 right-0 flex items-center pr-2 text-gray-400">
            <span class="text-right">Search</span>
          </div>
        </div>

        <div class="guest-button">
          <button class=""> Add a Guest</button>
        </div>

        <div class="recent-text">
          <p class=""> Recent Check Ins </p>
        </div>
        <div class="divider my-6 mt-1"></div>
        <!--    todo: scrollable member list, image is rounded, border different  -->
        <div class="member-list">
          <side-bar-member-check-in v-for="(member, index) in membersData" :key="member.id" :index="index" v-bind="{...member}"/>
        </div>
      </div>

    </div>
  </transition>
</template>
<style scoped>
.side-bar-content-container {
  @apply flex flex-col px-4 pt-6 items-center;
  .collapse-icon {
    @apply scale-150 self-end cursor-pointer absolute;
    left: 90%
  }

  .mem-checkin-btn {
    @apply w-2/3 text-center px-4 py-3 my-4 font-normal border border-accent-focus hover:bg-[#0075C9] hover:border-[#0075C9] rounded-2xl cursor-pointer mx-auto;
  }

  .mem-checkin-btn-two {
    @apply w-4/5 text-center px-4 py-3 my-4 text-xl font-normal cursor-pointer mx-auto;
  }

  .divider {
    @apply h-0 border-b border-secondary;
  }

  .active-members {
    @apply grid grid-cols-12 mb-2;
  }

  .active-member-count {
    @apply col-span-2 text-[1.3rem] px-3 py-1 rounded-xl border-[2px] border-secondary bg-secondary/50;
  }

  .member-list {
    @apply flex flex-col gap-5 w-full;
    overflow-y: scroll;
    max-height: calc(100vh - 220px);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .member-list::-webkit-scrollbar {
    display: none;
  }

  .location-list {
    @apply grid grid-cols-12;
  }

  input {
    @apply h-8 w-full pl-2 min-w-min;
  }

  input:focus {
    @apply outline-none;
  }

  .guest-input {
    @apply relative mx-auto w-60;
  }

  .search-input {
    @apply bg-base-content/20 rounded-xl mt-5 bg-[#0075C9] ;
  }

  .guest-button {
    @apply flex justify-center mt-5;
  }

  .guest-button button {
    @apply h-10 px-4 border rounded-xl bg-[#0075C9] text-white font-normal text-base normal-case hover:bg-[#0075C9] border border-white;
  }

  .recent-text {
    @apply mt-5 flex justify-center text-base;
  }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

<script setup>
import {ref} from "vue";
import {ArrowIcon, CrossIcon} from "~~/components/icons";
import SideBarMember from "./side-bar-member.vue";
import SelectLocation from "./select-location";
import {request} from "~/api/utils/request";
import member from "~/api/queries/member";
import SideBarMemberCheckIn from "./side-bar-member-check-in";

let showCheckIn = ref(false);

let form = {}
const initSearchForm = () => {
  form.value = {
    ...form.value,
    guestSearch: "",
  };
  return form.value;
};

form = ref(initSearchForm());

const locations = [
  {
    value: 1,
    label: "This Location",
  },
  {
    value: 2,
    label: "Club One",
  },
  {
    value: 3,
    label: "Club Two",
  },
];
const activeMembers = ref(0);

const membersData = ref([]);
const types = ["platinum", "gold", "silver", "bronze"];
request(member.query.browse).then(({data}) => {
  activeMembers.value = data.data.members.data.length;
  data.data.members.data.forEach((member) => {
    member['checkIn'] = false;
    membersData.value.push(member);
  });
});

const updateActiveMembers = addRemove => {
  if (addRemove) { activeMembers.value = activeMembers.value - 1; }
  else {  activeMembers.value = activeMembers.value + 1; }
}

</script>
