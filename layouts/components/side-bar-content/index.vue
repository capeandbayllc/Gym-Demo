<template>
  <div class="side-bar-content-container transition-all duration-200 ease-linear overflow-x-hidden">
    <transition name="fade">
      <div v-if="!showCheckIn">
        <arrow-icon direction="right" class="collapse-icon" @click="$emit('close')" />

        <div class="mem-checkin-btn" @click="showCheckIn = true">Member Check In</div>
        <div class="divider mt-1 mb-4"></div>

        <div class="active-members">
          <div class="col-span-8 text-base">Active Club Members</div>
          <div class="active-member-count text-center"> <p class="">24 </p></div>
        </div>

        <div class="location-list">
          <!--        <select-location class="" />-->
          <select-location :items="locations" label="Location"></select-location>
        </div>

        <div class="divider my-6"></div>
        <div class="member-list">
          <side-bar-member v-for="(member, index) in membersData" :key="member.id" :index="index" v-bind="{...member}"/>
        </div>
      </div>

      <div v-else>
        <div class="cross-icon collapse-icon" @click="showCheckIn = false">X</div>
        <!--      <arrow-icon direction="right" class="collapse-icon" @click="$emit('close')" />-->

        <div class="mem-checkin-btn-two" @click="showCheckIn = false">Member Check In</div>
      </div>

    </transition>
  </div>
</template>
<style scoped>
.side-bar-content-container {
    @apply flex flex-col px-4 pt-6 items-center;
    .collapse-icon {
        @apply scale-150 self-end cursor-pointer;
    }
    .mem-checkin-btn {
        @apply w-2/3 text-center px-4 py-3 my-4 font-normal border border-accent-focus hover:bg-[#0075C9] hover:border-[#0075C9] rounded-2xl cursor-pointer;
    }
    .divider {
        @apply h-0 border-b border-secondary;
    }
    .active-members {
        @apply grid grid-cols-12 mb-2;
        .active-member-count {
            @apply col-span-2 text-[1.3rem] px-3 py-1 rounded-xl border-[2px] border-secondary bg-secondary/50;
        }
    }
    .member-list {
        @apply flex flex-col gap-5 w-full;
    }
    .location-list {
      @apply grid grid-cols-12;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
<style>
#check-in-modal .modal-close-btn svg g {
    fill: #0074c8;
}
#check-in-modal .modal-close-btn {
    top: -18px;
    right: -12px;
}
.checkin-action-items .w-full {
    max-width: 100% !important;
}
.checkin-action-items .simple-card {
    max-width: 100% !important;
    width: auto !important;
}

@media (max-width: 2100px) {
    #check-in-modal {
        min-width: 65%;
        background: none;
    }
    .check-in-modal-content {
        overflow: auto;
        max-height: 95vh;
    }
}
@media (max-width: 1900px) {
    #check-in-modal {
        min-width: 80%;
    }
}
@media (max-width: 1350px) {
    #check-in-modal {
        min-width: 85%;
    }
}
@media (max-width: 1250px) {
    #check-in-modal .event-list {
        max-height: fit-content;
    }
}
@media (max-width: 980px) {
    #check-in-modal {
        min-width: 85%;
    }
}
</style>
<script setup>
import { ArrowIcon } from "~~/components/icons";
import SideBarMember from "./side-bar-member.vue";
import CheckInModal from "../check-in-modal/index.vue";
import SelectBox from "../../../components/select-box";
import SelectLocation from "./select-location";
import { request } from "~/api/utils/request";
import member from "~/api/queries/member";
import MainContent from "./main-content";
import SideBarMemberCheckIn from "./side-bar-member-check-in";

let currentComponent = 'MainContent';
let showCheckIn = ref(false);

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
const changeComponent = () => {
  if ( currentComponent === 'MainContent') {
    currentComponent = 'SideBarMemberCheckIn'
  } else {
    this.currentComponent = 'MainContent'
  }
}

const membersData = ref([]);
const types = ["platinum", "gold", "silver", "bronze"];
request(member.query.browse).then(({ data }) => {
  console.info("data.data.members", data.data.members);
  data.data.members.data.forEach((member) => {
    member['checkIn'] = false;
    membersData.value.push(member);
  });
});
const checkInModal = ref(null);
const showCheckInModal = () => {
    checkInModal.value.open();
};
</script>
