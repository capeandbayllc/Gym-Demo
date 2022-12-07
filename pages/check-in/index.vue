<template>
  <div class="w-full h-full flex flex-col">
    <div class="page-checkin-container">
      <div class="page-title">Member account page</div>
      <div class="page-content">
        <event-card />
        <profile-card
          @create-alert="showAlertAddModal"
          @create-note="showNoteAddModal"
          @select-option="option = $event"
          :active-option="option"
        />
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
  @apply py-4 pr-5 bg-base-300 w-full h-fit border-b border-secondary pl-16;
  .page-title {
    @apply text-lg font-light pb-3 pl-5;
  }
  .page-content {
    @apply flex flex-col-reverse md:flex-row gap-5  px-5 justify-center;
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
</script>