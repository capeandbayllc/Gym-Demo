<template>
    <div class="lg:flex space-x-3">
        <simple-card title="Make a Call" class="rounded-xl">
            <div class="bg-gradient-to-t from-[#18203A] to-[#11609E] p-6 w-[500px]">
                    <div class="bg-black p-4 border-[1px] border-[#008AE0] rounded-xl">
                        
                        <Body 
                            @notesModal="notesModal" 
                            :ProfileImage="ProfileImage"
                            profileName="Aya Buchanan"
                            callType="outgoing call"
                            :callTypeIcon="CallIcon"
                        >
                            <template #displayMiddle>
                                <div class="text-center mb-2">
                                    <p class="text-2xl text-[#008AE0] font-medium">+ 1 (912) 456-7890</p>
                                    <p class="text-sm mt-2">December 12 9:14 am</p>
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

const notesModalStatus = ref(false);
const notesModal = ()=>{
    notesModalStatus.value = !notesModalStatus.value;
}
</script>