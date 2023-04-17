<template>
  <div class="lg:flex space-x-3">
      <simple-card title="Send an E-mail" class="rounded-xl">
     <div class="bg-gradient-to-t rounded-b-xl from-[#18203A] to-[#11609E] p-6 w-[500px]">
          <div class="bg-black p-4 border-[1px] border-[#008AE0] rounded-xl">
              
              <Body 
                  @notesModal="notesModal" 
                  :ProfileImage="user.profile_photo_path"
                  :profileName="`${user.first_name} ${user.last_name}`"
                  callType="outgoing E-mail"
                  :callTypeIcon="EmailIcon"
              >
                  <template #displayMiddle>
                      <div class="text-center mb-2">
                         <div>
                          <input type="text" placeholder="Subject" class="w-full h-10 rounded-xl bg-transparent border-[1px] px-4 placeholder-white">
                         </div>
                         <div class="mt-2 relative">
                          <textarea placeholder="Body" class="w-full h-10 rounded-xl bg-transparent border-[1px] px-4 placeholder-white h-24 "></textarea>
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
                  @saveNow="$emit('saveEmail')"
                  @callNow="$emit('sendEmail')"
                  selectedType="email"
                  submitTitle="Send Now"
              />
              
          </div>
     </div>
  </simple-card>
    
          <Notes 
          v-if="notesModalStatus" 
          class="md:mt-3 lg:mt-0"
          placeholderTitle="Send E-mail"
          /> 
  </div>
  
</template>

<style scoped>

</style>

<script setup>
import { EmailIcon } from '~~/components/icons';
import Body from '../side-car-split/components/body.vue';
import Footer from '../side-car-split/components/footer.vue';
import Notes from '../side-car-split/components/notes.vue';


const notesModalStatus = ref(false);
const notesModal = ()=>{
  notesModalStatus.value = !notesModalStatus.value;
}

defineProps({
user: Object
})
</script>
