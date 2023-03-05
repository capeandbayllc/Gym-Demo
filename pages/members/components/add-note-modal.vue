<template>
    <simple-card title="Notes">
        <div class="note-modal-container flex justify-between overflow-y-auto h-[750px]">
            <div class="w-48 mx-2">
               <div class="flex flex-col items-center mb-10">
                    <NewAgreementIcon class="h-[50px] mb-2 cursor-pointer"/>
                    <p>Create a New Note</p>    
               </div>
               
               
               <Shared />
              
               <Folder />
               <Folder />
               <Folder />
               <Folder />
               <Folder />
               <Folder />
               <Folder />
              
            </div>
            <div class="w-80 mx-5 items-center">
                
                <div class="flex items-center space-x-4">
                    <button class="bg-[#0074c8] p-2 px-10 rounded-md border-2 border-transparent hover:border-[#CBCBCB]">Recent</button>
                    <button class="bg-[#052F61] p-2 px-10 rounded-md border-2 border-[#CBCBCB] hover:bg-[#0074c8]">Completed</button>
                </div>

                <div class="mt-[75px]">
                    <p class="mb-2">Today</p>
                    
                    <Note title="Note#17" :alert="false" />
                    <Note title="Note#16" :alert="true" />
                    <Note title="Note#15" :alert="false" />
                    <Note title="Note#14" :alert="true" />
                    <Note title="Note#13" :alert="false" />
                    <Note title="Note#11" :alert="true" />

                    <p class="mb-2">Previous 30 Days</p>
                    <Note title="Note#10" :alert="false" />
                    <Note title="Note#09" :alert="true" />
                    
                </div>
                
            </div>
            <div class="content w-auto">
                <div class="call-inner-content m-5 col-span-3 mb-8">
                    <caller-card :user-call-setting="userCallSetting"></caller-card>
                </div>
                <div class="flex justify-between m-5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. ti cupiditate maxime reiciendis .</p>
                    <div class="float-right">
                        <button
                            type="button"
                            class="btn w-max rounded btn-sm font-medium ml-32 mr-3"
                            error
                            outline
                            @click="$emit('deleteNote')"
                        >
                            Delete
                        </button>
                       
                        <button
                            class="btn w-max bg-success border-success rounded text-base-content btn-sm font-medium"
                            @click="$emit('saveNote')"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NewAgreementIcon } from '~~/components/icons';
import Folder from "./folder.vue";
import Note from "./note.vue";
import Shared from "./shared.vue";

library.add(faCheck);



const userCallSetting = {
    type: 'outgoing-call',
    callType: 'Outgoing Call',
    userName: 'Mona Parksdale',
    phone: '+1 (123) 456-7890',
    callIcon: '/phone.png',
    callerProfileImage: '/user-caller.png',
};
const callType = [
    {
        value: "1",
        label: "Introduction"
    }, 
    {
        value: "2",
        label: "New Membership"
    }, 
    {
        value: "3",
        label: "Follow Up"
    },
    {
        value: "4",
        label: "Returning Call"
    },
];
</script>

<style scoped>
.note-modal-container {
	@apply pl-8 pr-8 pt-8 pb-8 bg-neutral;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    .content {
        @apply border border-secondary bg-black;
        .call-inner-content {
            @apply border border-gray-50
        }
        .btn.bg-success:hover {
            @apply border-success;
        }
    }
}
</style>