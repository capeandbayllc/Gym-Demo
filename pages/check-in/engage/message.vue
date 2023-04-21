<template>
  <div class="lg:flex space-x-3">
      <simple-card title="Send an SMS Text" class="rounded-xl">
     <div class="bg-gradient-to-t rounded-b-xl from-secondary-content to-secondary/60 p-6 w-[500px]">
          <div class="bg-base-300 p-4 border-[1px] border-info-content rounded-xl">
              <Body 
                  @notesModal="notesModal"
                  :ProfileImage="user.profile_photo_path"
                  :profileName="`${user.first_name} ${user.last_name}`"
                  callType="outgoing SMS Text"
                  :callTypeIcon="MessageIcon"
              >
                  <template #displayMiddle>
                      <div class="text-center mb-2">
                         <div class="mt-2 relative">
                          <textarea placeholder="This text confirms on meeting this afternoon. Thx" class="w-full h-10 rounded-xl bg-transparent border-[1px] px-4 placeholder-base-content h-28 p-2"></textarea>
                          <div class="text-xs space-x-3 absolute right-3 bottom-3">
                              <span class="cursor-pointer">+ See Scripts</span>
                              <span class="cursor-pointer">+ Add an Attachment</span>
                          </div>
                         </div>
                      </div>
                  </template>
              </Body>
              
              <Footer 
                  @close="$emit('close')" 
                  @saveNow="$emit('saveSms')"
                  @callNow="$emit('sendSms')"
                  selectedType="sms"
                  submitTitle="Send Now"
              />
              
          </div>
     </div>
  </simple-card>
    
          <Notes 
          v-if="notesModalStatus" 
          class="md:mt-3 lg:mt-0"
          placeholderTitle="Send SMS"
          /> 
  </div>
  
</template>

<script setup>
import { MessageIcon } from '~~/components/icons';
import Body from '../side-car-split/components/body.vue';
import Footer from '../side-car-split/components/footer.vue';
import Notes from '../side-car-split/components/notes.vue';

defineProps({
  user: Object
})
const notesModalStatus = ref(false);
const notesModal = ()=>{
  notesModalStatus.value = !notesModalStatus.value;
}
</script>
