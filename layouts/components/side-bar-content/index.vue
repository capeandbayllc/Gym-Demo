<template>
    <div class="side-bar-content-container transition-all duration-200 ease-linear">
      <arrow-icon direction="right"
                  class="collapse-icon"
                  @click="$emit('close')"
      />
      <div class="mem-checkin-btn" @click="showCheckInModal">
        Member Check In
      </div>
      <div class="divider mt-1 mb-4"></div>
      <div class="active-members">
        <div class="col-span-8 text-base">Active Club Members</div>
        <div class="active-member-count text-center"> <p class="">24 </p></div>
      </div>
      <div class="location-list">
<!--        <select-location class="col-start-1 col-span-4" />-->
        <select-location
            label="Location"
            mode="multiple"
            track-by="value"
            :caret="true"
            :options="locations"
        ></select-location>
<!--        <select-box-->
<!--            :items="locations"-->
<!--            label="Location"-->
<!--            class="w-32 items-start self-start"-->
<!--        />-->
      </div>

        <div class="divider my-6"></div>
        <div class="member-list">
            <side-bar-member
                v-for="member in members"
                :key="member.id"
                v-bind="{ ...member }"
            />
        </div>
    </div>
    <daisy-modal :overlay="true" ref="checkInModal" id="check-in-modal">
        <CheckInModal />
    </daisy-modal>
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

      .select-box-wrapper {
        @apply col-start-1 col-span-4
      }
    }
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
import '@vueform/multiselect/themes/default.css';
import { ArrowIcon } from "~~/components/icons";
import SideBarMember from "./side-bar-member.vue";
import CheckInModal from "../check-in-modal/index.vue";
import SelectBox from "../../../components/select-box";
import SelectLocation from "./select-location";

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

const members = [
    {
        id: 1,
        name: "Kelly Arsington",
    },
    {
        id: 2,
        name: "Sam Williams",
        unread: 3,
    },
    {
        id: 3,
        name: "Walter K.",
    },
];
const checkInModal = ref(null);
const showCheckInModal = () => {
    checkInModal.value.open();
};
</script>
