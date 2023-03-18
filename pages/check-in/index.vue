<template>
  <div class="w-full h-full flex flex-col check-in-modal-height">
    <div class="page-checkin-container" ref="checkInContainer">
      <div class="page-content">
        <div
          class="wrapper px-2 pt-2 w-full rounded-md"
          :class="{ 'pb-0': detailView !== null }"
        >
          <div class="flex -md:block">
            <event-card class="mr-2" />
            <profile-card
              :row="row"
              :active-option="detailView"
              @select-option="detailView = $event"
              @toggle-detail="toggleDetailSection"
              @check-in="OnCheckInStatusChange"
              @open-engage="showEngageModal"
            />
          </div>
          <div class="bg-secondary w-full">
            <p class="checkin-card-detail" @click="toggleDetailSection">
              <span>
                {{ isDetailOpened ? "Close" : "View Account" }}
              </span>
              <LockIcon class="inline-block" v-if="!isDetailOpened" />
              <UnlockIcon class="inline-block" v-else />
            </p>
            <div class="account-box" v-if="isDetailOpened">
              <ul>
                <li v-for="{ key, icon } in accountOptions" :key="key">
                  <button @click="changeDetailView(key)">
                    <component :is="icon" />
                  </button>
                </li>
              </ul>
              <UserInfo v-if="detailView == 'memberinfo'" />
              <Setting v-if="detailView == 'setting'" />
              <button
                v-if="detailView !== null"
                class="mx-auto p-4 w-full"
                @click="backToTop"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <template v-for="{ key, component } in subSections" :key="key">
        <component
          v-if="detailView === key"
          @close="detailView = null"
          :key="key"
          :is="component"
        />
      </template>
    </div>
  </div>
</template>
<style scoped>
.page-checkin-container {
  @apply py-4  w-full h-fit;
  .page-title {
    @apply text-lg font-light pb-3 pl-5;
  }
  .page-content {
    @apply flex flex-col-reverse md:flex-row gap-5 flex-wrap justify-center;
    .wrapper {
      background: #0074c8;
    }
    .account-box {
      ul {
        @apply flex w-10/12 justify-around mx-auto -md:w-full bg-black pt-4 mb-2 rounded-full;

        li {
          @apply inline-block m-auto;
        }
      }
    }
    .checkin-card-detail {
      @apply text-center cursor-pointer align-middle my-2 flex flex-row items-center justify-center space-x-3;
    }
  }
}
</style>
<script setup>
import { ref, watch } from "vue";
import EventCard from "./event-card/index.vue";
import ProfileCard from "./profile-card/index.vue";
import Profile from "./profile/index.vue";
import PosCard from "./pos-card/index.vue";
import PosWindow from "../pos/components/pos-window.vue";
import CalendarCard from "./calendar-card/index.vue";
import NotificationCard from "./notification-card/index.vue";
import GuestCard from "./guest-card/index.vue";
import NoteCard from "./note-card/index.vue";
import NewAgreement from "./new-agreement/index.vue";
import {
  LockIcon,
  MemberInfoIcon,
  SettingIcon,
  DollarDocIcon,
  AnnouncementIcon,
  PieChartIcon,
  BookIcon,
  DocIcon,
  UnlockIcon,
} from "~~/components/icons";
import UserInfo from "./user-info/index.vue";
import Setting from "./setting/index.vue";
import Engage from "./engage/index.vue";
const option = ref(null);
const route = useRoute();
const profileId = (route.query.id)


const appLayout = useLayoutElement();
const checkInContainer = ref();
const props = defineProps(

        {   
            row:{
              type:Object,
              required:true
            }
        }
    )
watch(option, () => {
  const scrollTO = checkInContainer.value.offsetHeight + 100;
  setTimeout(() => {
    appLayout.value.scroll({
      top: scrollTO,
      left: 0,
      behavior: "smooth",
    });
  }, 500);
});

onMounted(() => {
  if(profileId){

  detailView.value = 'profile';
    setTimeout(() => {
      window.scroll({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });
    }, 0);
  }
});

const showEngageModal = () => {
  detailView.value = "engage";
};

const isDetailOpened = ref(false);
const detailView = ref(null);

const changeDetailView = (view) => {
  if (view == detailView.value) {
    detailView.value = null;
  } else {
    detailView.value = view;
  }
};

const backToTop = () => {
  appLayout.value.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const subSections = [
  { key: "profile", component: Profile },
  { key: "pos", component: PosWindow },
  { key: "calendar", component: CalendarCard },
  { key: "notification", component: NotificationCard },
  { key: "guest-pass", component: GuestCard },
  { key: "note", component: NoteCard },
  { key: "newAgreement", component: NewAgreement },
  { key: "engage", component: Engage },
];

const accountOptions = [
  { key: "memberinfo", icon: MemberInfoIcon },
  { key: "setting", icon: SettingIcon },
  { key: "#", icon: DollarDocIcon },
  { key: "#", icon: AnnouncementIcon },
  { key: "#", icon: PieChartIcon },
  { key: "#", icon: BookIcon },
  { key: "#", icon: DocIcon },
];

const toggleDetailSection = (event) => {
  if (typeof event != "boolean") {
    isDetailOpened.value = !isDetailOpened.value;
    detailView.value = null;
  } else {
    isDetailOpened.value = event;
    detailView.value = null;
  }
};

function OnCheckInStatusChange(isCheckedIn) {
  toggleDetailSection(isCheckedIn);
}
</script>
