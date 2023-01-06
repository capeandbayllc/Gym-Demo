<template>
  <div class="w-full h-full flex flex-col">
    <div class="page-checkin-container">
      <div class="page-title">Member account page</div>
      <div class="page-content">
        <div class="wrapper p-4 bg-secondary rounded-md" :class="{'pb-0':accountView !== null}">
          <div class="flex">
            <event-card class="mr-4"/>
            <profile-card
            @create-alert="showAlertAddModal"
            @create-note="showNoteAddModal"
            @select-option="option = $event"
            :active-option="option"
            />
          </div>
          <div class="bg-secondary w-full">
            <p class="text-center cursor-pointer align-middle my-4" @click="isAccountViewOpen = !isAccountViewOpen, accountView = null">{{isAccountViewOpen ? 'Close' : 'View Account'}}  
              <LockIcon class="inline-block" v-if="!isAccountViewOpen"/>
              <UnlockIcon class="inline-block" v-else/>
            </p>
            <div class="account-box" v-if="isAccountViewOpen">
              <ul>
                <li><button @click="changeAccountView('memberinfo')"><MemberInfoIcon/></button></li>
                <li><button @click="changeAccountView('setting')"><SettingIcon/></button></li>
                <li><button @click="changeAccountView('dollardoc')"><DollarDocIcon/></button></li>
                <li><button @click="changeAccountView('announcement')"><AnnouncementIcon/></button></li>
                <li><button @click="changeAccountView('piechart')"><PieChartIcon/></button></li>
                <li><button @click="changeAccountView('book')"><BookIcon/></button></li>
                <li><button @click="changeAccountView('doc')"><DocIcon/></button></li>
              </ul>
              <UserInfo v-if="accountView == 'memberinfo'"/>
              <Setting v-if="accountView == 'setting'"/>
              <button v-if="accountView !== null" class="mx-auto p-4 w-full" @click="backToTop"> Back to Top</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pos-card v-if="option === 'pos'" @close="option = null"/>
    <calendar-card v-if="option === 'calendar'" @close="option = null"/>
    <notification-card v-if="option === 'notification'" @close="option = null"/>
    <guest-card v-if="option === 'guest-pass'" @close="option = null"/>
    <note-card v-if="option === 'note'" @close="option = null"/>
    <new-agreement v-if="option === 'newAgreement'" @close="option = null"/>
    <Engage v-if="isEngageOpen"/>
    <footer-logo class="m-auto" v-else/>
    <daisy-modal id="alertAddModal" ref="alertAddModal" v-slot="scope">
        <alert-add-modal @close="scope.close()"/>
    </daisy-modal>
    <daisy-modal id="noteAddModal" ref="noteAddModal" v-slot="scope">
      <note-add-modal @close="scope.close()" />
    </daisy-modal>
        
  </div>
</template>
<style scoped>

.page-checkin-container {
  @apply py-4 pr-5 bg-base-300 w-full h-fit border-b border-secondary pl-16 -md:pl-0;
  .page-title {
    @apply text-lg font-light pb-3 pl-5;
  }
  .page-content {
    @apply flex flex-col-reverse md:flex-row gap-5 flex-wrap justify-center mx-auto w-full max-w-[1120px];

    .account-box{
      ul{
        @apply flex w-10/12 justify-around mx-auto;

        li{
          @apply inline-block;
        }
      }
      
    }
  }
}
</style>
<script setup>
import {ref} from 'vue'
import EventCard from './event-card/index.vue';
import ProfileCard from './profile-card/index.vue';
import PosCard from './pos-card/index.vue';
import CalendarCard from './calendar-card/index.vue';
import NotificationCard from './notification-card/index.vue';
import GuestCard from './guest-card/index.vue';
import NoteCard from './note-card/index.vue';
import NewAgreement from './new-agreement/index.vue';
import { LockIcon, MemberInfoIcon, SettingIcon, DollarDocIcon, AnnouncementIcon, PieChartIcon, BookIcon, DocIcon, UnlockIcon } from '~~/components/icons';
import AlertAddModal from './alert-add-modal.vue';
import NoteAddModal from './note-add-modal.vue';
import UserInfo from './user-info/index.vue';
import Setting from './setting/index.vue';
import Engage from './engage/index.vue';


const option = ref(null);

const alertAddModal = ref(null);
const showAlertAddModal = () => {
    alertAddModal.value.open()
};

const noteAddModal = ref(null);
const showNoteAddModal = () => {
  noteAddModal.value.open()
};

const isAccountViewOpen = ref(false);
const accountView = ref(null);

const changeAccountView = (view)=> {
  if(view == accountView.value){
    accountView.value = null
  } else {
    accountView.value = view
  }
};

const isEngageOpen = ref(true)

const backToTop = ()=>{
  const appLayout = document.querySelector(".app-layout")
  appLayout.scroll({
    top: 0,         
    left: 0, 
    behavior: 'smooth' 
  });
}
</script>