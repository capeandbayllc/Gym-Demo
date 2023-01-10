<template>
  <div class="profile-options-container">
    <div class="flex flex-row gap-2 relative">
      <div class="absolute bg-secondary px-8 py-2 z-10 rounded w-[140px] top-[-100px] text-center cursor-pointer" @click="openAddMemberPopUp">
        <AddIcon class="h-[40px] w-[40px] border inline-block border-white rounded-full"/>
        <p>
          Add Lead
        </p>
      </div>
      <div class="btn-check-in">Check in</div>
      <!-- <div class="btn-close-selection">Close Selection</div> -->
    </div>
    <div class="profile-options">
      <profile-option-item
        v-for="item in options"
        :key="item.key"
        :model-value="item.key === selected"
        @update:modelValue="handleSelect(item.key, $event)"
        :label="item.label"
      />
    </div>
    <!-- <div class="btn-close-selection">Close Member Selection</div> -->
    <daisy-modal id="addMemberPopUp" ref="addMemberPopUp" class="w-fit" @close="closeModel">
      <div class="bg-black rounded-md p-6 border border-secondary">
        <component :is="addMemberScreens[addMemberScreenIndex]"></component>
        <div class="flex justify-end mt-6">
          <button class="normal-case mx-2" ghost @click="prevScreen" v-if="addMemberScreenIndex > 0"><NextIcon/></button>
          <Button size="sm" class="normal-case mx-2 ml-auto" ghost>Cancel</Button>
          <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreen">Continue ></Button>
        </div>
      </div>
    </daisy-modal>
  </div>
</template>
<style scoped>
.profile-options-container {
  @apply flex flex-col space-y-6 items-center;
  .profile-options {
    @apply grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1 lg:gap-6 border-2 border-secondary rounded-lg w-full  p-5;
    background-image: linear-gradient(#0074c8b5, #000);
  }
  .btn-close-selection {
    @apply cursor-pointer bg-base-content text-secondary rounded p-2 text-sm text-black;
  }
  .btn-check-in {
    @apply px-4 flex items-center rounded cursor-pointer bg-accent-focus/60 uppercase text-black font-medium;
  }
}
</style>
<script setup>
import ProfileOptionItem from './profile-option-item.vue';
import { AddIcon,NextIcon } from "@/components/icons";
import Welcome from './add-member/welcom.vue'
import JoinTour from './add-member/join-tour.vue'
import Infomrmation from './add-member/information.vue'
import PersonalInformation from '../user-info/personal-information/index.vue'
import Interests from './add-member/interests.vue'
import EmergencyInfo from './add-member/emergency-info.vue'
import BroughtToday from './add-member/brought-today.vue'
const props = defineProps({
    selected: String
})

const options = [
{
    label: "Profile",
    key: "profile",
    selected: false
},
{
    label: "POS",
    key: "pos",
    selected: false
}, {
    label: "Calendar",
    key: "calendar",
    selected: false
}, {
    label: "Notifications",
    key: "notification",
    selected: false
}, {
    label: "Add a Guest",
    key: "addGuest",
    selected: false
}, {
    label: "Note Pad",
    key: "note",
    selected: false
}, {
    label: "New Agreement",
    key: "newAgreement",
    selected: false
}]

const emit = defineEmits(["update:selected"])
const handleSelect = (key, value) => {
  if (value) {
        emit('update:selected', key)
  } else {
        emit('update:selected', null)
  }
} 

const addMemberPopUp = ref(null)
const addMemberScreens = ref([Welcome,JoinTour,Infomrmation,PersonalInformation,Interests,EmergencyInfo,BroughtToday]);
const addMemberScreenIndex = ref(0);

const openAddMemberPopUp =()=>{
  addMemberPopUp.value.open()
}
const nextScreen = ()=>{
    addMemberScreenIndex.value = addMemberScreenIndex.value < (addMemberScreens.value.length - 1) ? addMemberScreenIndex.value + 1 : addMemberScreenIndex.value;
    console.log("addMemberScreenIndex",addMemberScreenIndex.value)
}
const prevScreen = ()=>{
    addMemberScreenIndex.value = addMemberScreenIndex.value > 0 ? addMemberScreenIndex.value - 1 : addMemberScreenIndex.value
}
</script>
