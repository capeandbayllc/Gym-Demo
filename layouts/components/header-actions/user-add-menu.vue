<template>
    <context-menu ref="userMenu" class="user-menu">
        <div class="border border-white inline-block rounded py-1 px-2 w-max cursor-pointer hover:bg-white hover:text-black transition uppercase font-semibold">+ Member</div>
        <div class="border border-white inline-block rounded py-1 px-2 w-max cursor-pointer hover:bg-white hover:text-black transition uppercase font-semibold" @click.prevent="openAddMemberPopUp">+ Lead</div>
        <div class="border border-white inline-block rounded py-1 px-2 w-max cursor-pointer hover:bg-white hover:text-black transition uppercase font-semibold">+ Guest Pass</div>
    </context-menu>
    <daisy-modal id="addMemberPopUp" ref="addMemberPopUp" class="w-fit" @close="addMemberScreenIndex=0">
      <div class="bg-black rounded-md p-6 border border-secondary">
        <component :is="addMemberScreens[addMemberScreenIndex]"></component>
        <div class="flex justify-end mt-6">
          <button class="normal-case mx-2" ghost @click="prevScreen" v-if="addMemberScreenIndex > 0"><NextIcon/></button>
          <Button size="sm" class="normal-case mx-2 ml-auto" ghost @click="closeAddMemberPopUp">Cancel</Button>
          <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreen">Continue ></Button>
        </div>
      </div>
    </daisy-modal>
</template>
<style scoped>
.user-menu {
    @apply bg-secondary p-4 flex flex-col space-y-3 top-12 rounded;
    left: -4rem;
}
</style>
<script setup>
import {ref} from 'vue'
import Welcome from '../../../pages/check-in/profile-card/add-member/welcom.vue'
import JoinTour from '../../../pages/check-in/profile-card/add-member/join-tour.vue'
import Infomrmation from '../../../pages/check-in/profile-card/add-member/information.vue'
import PersonalInformation from '../../../pages/check-in/user-info/personal-information/index.vue'
import Interests from '../../../pages/check-in/profile-card/add-member/interests.vue'
import EmergencyInfo from '../../../pages/check-in/profile-card/add-member/emergency-info.vue'
import BroughtToday from '../../../pages/check-in/profile-card/add-member/brought-today.vue';
import { NextIcon } from "@/components/icons";

const userMenu = ref(null)
const open = () => {
    userMenu.value.open()
}
const close = () => {
    userMenu.value.close()
}

const addMemberPopUp = ref(null)
const addMemberScreens = ref([Welcome,JoinTour,Infomrmation,PersonalInformation,Interests,EmergencyInfo,BroughtToday]);
const addMemberScreenIndex = ref(0);

const openAddMemberPopUp =()=>{
  addMemberPopUp.value.open()
}
const closeAddMemberPopUp =()=>{
  addMemberPopUp.value.close()
}
const nextScreen = ()=>{
    addMemberScreenIndex.value = addMemberScreenIndex.value < (addMemberScreens.value.length - 1) ? addMemberScreenIndex.value + 1 : addMemberScreenIndex.value;
    console.log("addMemberScreenIndex",addMemberScreenIndex.value)
}
const prevScreen = ()=>{
    addMemberScreenIndex.value = addMemberScreenIndex.value > 0 ? addMemberScreenIndex.value - 1 : addMemberScreenIndex.value
}

defineExpose({ open, close })

</script>