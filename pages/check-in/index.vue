<template>
  <div class="w-full h-full flex flex-col">
    <div class="page-checkin-container">
      <div class="page-title">Member account page</div>
      <div class="page-content">
        <div class="wrapper p-4 bg-secondary rounded-md">
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
            <p class="text-center cursor-pointer align-middle my-4" @click="viewAccount = !viewAccount">{{viewAccount ? 'View Account' : 'Close'}}  
              <LockIcon class="inline-block" v-if="viewAccount"/>
              <UnlockIcon class="inline-block" v-else/>
            </p>
            <div class="account-box" v-if="!viewAccount">
              <ul>
                <li><button><AccountIcon/></button></li>
                <li><button><SettingIcon/></button></li>
                <li><button><DollarDocIcon/></button></li>
                <li><button><AnnouncementIcon/></button></li>
                <li><button><PieChartIcon/></button></li>
                <li><button><BookIcon/></button></li>
                <li><button><DocIcon/></button></li>
              </ul>
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
    @apply flex flex-col-reverse md:flex-row gap-5 flex-wrap justify-center mx-auto;

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
import EventCard from './event-card/index.vue'
import ProfileCard from './profile-card/index.vue'
import PosCard from './pos-card/index.vue'
import CalendarCard from './calendar-card/index.vue'
import NotificationCard from './notification-card/index.vue'
import GuestCard from './guest-card/index.vue'
import NoteCard from './note-card/index.vue'
import { LockIcon, AccountIcon, SettingIcon, DollarDocIcon, AnnouncementIcon, PieChartIcon, BookIcon, DocIcon, UnlockIcon } from '~~/components/icons';
import AlertAddModal from './alert-add-modal.vue'
import NoteAddModal from './note-add-modal.vue'


const option = ref(null)

const alertAddModal = ref(null)
const showAlertAddModal = () => {
    alertAddModal.value.open()
}

const noteAddModal = ref(null)
const showNoteAddModal = () => {
    noteAddModal.value.open()
}

const viewAccount = ref(false)
</script>