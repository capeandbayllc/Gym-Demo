<template>
    <div class="lg:flex space-x-3">
        <simple-card title="Make a Call" class="rounded-xl">
            <div class="bg-gradient-to-t rounded-b-xl from-[#18203A] to-[#11609E] p-6 w-[500px]">
                    <div class="bg-black p-4 border-[1px] border-[#008AE0] rounded-xl">
                        
                        <Body 
                            @notesModal="notesModal" 
                            :ProfileImage="call.image"
                            :profileName="call.name"
                            callType="outgoing call"
                            :callTypeIcon="CallIcon"
                        >
                            <template #displayMiddle>
                                <div class="text-center mb-2">
                                    <p class="text-2xl text-[#008AE0] font-medium">+ 1 {{ call.phone }}</p>
                                    <p class="text-sm mt-2">{{ dateFormat(new Date(), 'mmmm yyyy, h:MM TT') }}</p>
                                </div>
                            </template>
                        </Body>
                        
                        <Footer 
                            @close="$emit('close')" 
                            @callNow="$emit('callNow')"
                            @saveNow="$emit('saveNow')"
                            selectedType="call"
                            submitTitle="Call Now"
                        />
                    </div>
            </div>
        </simple-card>
        
        <Notes 
            v-if="notesModalStatus" 
            class="md:mt-3 lg:mt-0"
            placeholderTitle="Phone Call"
        /> 
    </div>
    
</template>

<style scoped>

</style>

<script setup>
import ProfileImage from '@/public/images/profile/users_2.jpg';
import { CallIcon } from '~~/components/icons';
import Body from './components/body.vue';
import Footer from './components/footer.vue';
import Notes from './components/notes.vue';
import dateFormat from "dateformat";

const notesModalStatus = ref(false);
const notesModal = ()=>{
    notesModalStatus.value = !notesModalStatus.value;
}
const props = defineProps({
  user: Object
})

const call = computed(() => ({
  name: `${props.user.first_name} ${props.user.last_name}`,
  phone: (props.user.phone ?? '1234567890').replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
  image: props.user.profile_photo_path,
  date: (new Date()).toDateString()
}));
</script>
