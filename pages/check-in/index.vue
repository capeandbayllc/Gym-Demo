<template>
  <div class="w-full h-full flex flex-col check-in-modal-height">
    <div class="page-checkin-container">
      <div class="page-content">
        <div class="wrapper px-2 pt-2 w-full rounded-md" :class="{'pb-0':detailView !== null}">
          <div class="flex -md:block">
            <event-card class="mr-2"/>
            <profile-card
              :active-option="option"
              @select-option="option = $event"
              @toggle-detail="toggleDetailSection"
              @open-engage="showEngageModal"
            />
          </div>
          <div class="bg-secondary w-full">
            <p class="checkin-card-detail" @click="toggleDetailSection">
              <span>
                {{isDetailOpened ? 'Close' : 'View Account'}}
              </span>
              <LockIcon class="inline-block" v-if="!isDetailOpened"/>
              <UnlockIcon class="inline-block" v-else/>
            </p>
            <div class="account-box" v-if="isDetailOpened">
              <ul>
                <ii v-for="{key, icon} in accountOptions" :key="key">
                  <button @click="changeDetailView(key)"><component :is="icon"/></button>
                </ii>
              </ul>
              <UserInfo v-if="detailView == 'memberinfo'"/>
              <Setting v-if="detailView == 'setting'"/>
              <button v-if="detailView !== null" class="mx-auto p-4 w-full" @click="backToTop">Back to Top</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <component
        v-for="{option, component} in subSections"
        v-if="option === option"
        @close="option = null"
        :key="option"
      />
      <daisy-modal id="engageModal" ref="engageModal" v-slot="scope">
          <engage-modal @close="scope.close()"/>
      </daisy-modal>
    </div>

  </div>
</template>
<style scoped>
.page-checkin-container {
  @apply py-4 px-5 w-full h-fit;
  .page-title {
    @apply text-lg font-light pb-3 pl-5;
  }
  .page-content {
    @apply flex flex-col-reverse md:flex-row gap-5 flex-wrap justify-center;
    .wrapper{
      background: #0074C8;
    }
    .account-box{
      ul{
        @apply flex w-10/12 justify-around mx-auto -md:w-full;

        li{
          @apply inline-block;
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
import {ref,watch} from 'vue'
import EventCard from './event-card/index.vue';
import ProfileCard from './profile-card/index.vue';
import Profile from './profile/index.vue';
import PosCard from './pos-card/index.vue';
import CalendarCard from './calendar-card/index.vue';
import NotificationCard from './notification-card/index.vue';
import GuestCard from './guest-card/index.vue';
import NoteCard from './note-card/index.vue';
import NewAgreement from './new-agreement/index.vue';
import { LockIcon, MemberInfoIcon, SettingIcon, DollarDocIcon, AnnouncementIcon, PieChartIcon, BookIcon, DocIcon, UnlockIcon } from '~~/components/icons';
import UserInfo from './user-info/index.vue';
import Setting from './setting/index.vue';
import Engage from './engage/index.vue';
import EngageModal from './modals/engage-modal/index.vue';
const option = ref(null);

watch(option,()=>{
  const appLayout = document.querySelector(".app-layout");
  const scrollTO = document.querySelector(".page-checkin-container").offsetHeight + 100;
  setTimeout(() => {
    appLayout.scroll({
      top: scrollTO,
      left: 0,
      behavior: 'smooth' 
    });
  }, 500);
  
})

const engageModal = ref(null);
const showEngageModal = () => {
    engageModal.value.open()
};

const isDetailOpened = ref(false);
const detailView = ref(null);

const changeDetailView = (view)=> {
  if(view == detailView.value){
    detailView.value = null
  } else {
    detailView.value = view
  }
};

const backToTop = ()=>{
  const appLayout = document.querySelector(".app-layout");
  appLayout.scroll({
    top: 0,         
    left: 0, 
    behavior: 'smooth' 
  });
}

const subSections = [
  { option: "profile", component: Profile },
  { option: "pos", component: PosCard },
  { option: "calendar", component: CalendarCard },
  { option: "notification", component: NotificationCard },
  { option: "guest-pass", component: GuestCard },
  { option: "note", component: NoteCard },
  { option: "newAgreement", component: NewAgreement },
  { option: "engage", component: Engage }
]

const accountOptions = [
  { key: "memberinfo", icon: MemberInfoIcon },
  { key: "setting", icon: SettingIcon },
  { key: "dollardoc", icon: DollarDocIcon },
  { key: "announcement", icon: AnnouncementIcon },
  { key: "piechart", icon: PieChartIcon },
  { key: "book", icon: BookIcon },
  { key: "doc", icon: DocIcon }
]

const toggleDetailSection = (event) => {
  if (typeof(event) != "boolean") {
    isDetailOpened.value = !isDetailOpened.value;
    detailView.value = null;
  } else {
    isDetailOpened.value = event;
    detailView.value = null;
  }
}
</script>