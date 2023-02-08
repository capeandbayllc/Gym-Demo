<template>
    <div class="w-full h-full flex flex-col check-in-modal-content">
        <div class="page-checkin-container">
          <div class="check-in-page-content">
            <div class="wrapper p-3 w-full rounded-md" :class="{'pb-0':accountView !== null}">
              <div class="flex -md:block">
                <event-card class="mr-4"/>
                <profile-card
                @create-alert="showAlertAddModal"
                @create-note="showNoteAddModal"
                @select-option="option = $event"
                :active-option="option"
                />
              </div>
              <div class="bg-secondary w-full">
                <p class="text-center cursor-pointer align-middle mt-1" :class="{'mt-4 mb-4': isAccountViewOpen}" @click="isAccountViewOpen = !isAccountViewOpen, accountView = null">{{isAccountViewOpen ? 'Close' : 'View Account'}}  
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
        <div class="checkin-action-items">    
            <Profile v-if="option === 'profile'" @close="option = null"/>
            <pos-card v-if="option === 'pos'" @close="option = null"/>
            <calendar-card v-if="option === 'calendar'" @close="option = null"/>
            <notification-card v-if="option === 'notification'" @close="option = null"/>
            <guest-card v-if="option === 'guest-pass'" @close="option = null"/>
            <note-card v-if="option === 'note'" @close="option = null"/>
            <new-agreement v-if="option === 'newAgreement'" @close="option = null"/>
            <Engage v-if="option === 'engage'" @close="option = null"/>
            <daisy-modal id="alertAddModal" ref="alertAddModal" v-slot="scope">
              <alert-add-modal @close="scope.close()"/>
            </daisy-modal>
            <daisy-modal id="noteAddModal" ref="noteAddModal" v-slot="scope">
              <note-add-modal @close="scope.close()" />
            </daisy-modal>
        </div>
    </div>
</template>
<style scoped>
  .page-checkin-container {
    /* @apply py-4 px-5 w-full h-fit border-secondary; */
    @apply pb-4 w-full h-fit border-secondary;
    .page-title {
      @apply text-lg font-light pb-3 pl-5;
    }
    .check-in-page-content {
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
    }
  }
</style>
<script setup>
  import EventCard from '~~/pages/check-in/event-card/index.vue';
  import ProfileCard from '~~/pages/check-in/profile-card/index.vue';
  import Profile from '~~/pages/check-in/profile/index.vue';
  import PosCard from '~~/pages/check-in/pos-card/index.vue';
  import CalendarCard from '~~/pages/check-in/calendar-card/index.vue';
  import NotificationCard from '~~/pages/check-in/notification-card/index.vue';
  import GuestCard from '~~/pages/check-in/guest-card/index.vue';
  import NoteCard from '~~/pages/check-in/note-card/index.vue';
  import NewAgreement from '~~/pages/check-in/new-agreement/index.vue';
  import { LockIcon, MemberInfoIcon, SettingIcon, DollarDocIcon, AnnouncementIcon, PieChartIcon, BookIcon, DocIcon, UnlockIcon } from '~~/components/icons';
  import AlertAddModal from '~~/pages/check-in/alert-add-modal.vue';
  import NoteAddModal from '~~/pages/check-in/note-add-modal.vue';
  import UserInfo from '~~/pages/check-in/user-info/index.vue';
  import Setting from '~~/pages/check-in/setting/index.vue';
  import Engage from '~~/pages/check-in/engage/index.vue';
  
  const option = ref(null);
  
  watch(option,()=>{
    const appLayout = document.querySelector(".check-in-modal-content");
    const scrollTO = document.querySelector(".page-checkin-container").offsetHeight + 100;
    setTimeout(() => {
      appLayout.scroll({
        top: scrollTO,
        left: 0,
        behavior: 'smooth' 
      });
    }, 500);
    
  })
  
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
  
  const backToTop = ()=>{
    const appLayout = document.querySelector(".check-in-modal-content");
    appLayout.scroll({
      top: 0,         
      left: 0, 
      behavior: 'smooth' 
    });
  }
</script>
  