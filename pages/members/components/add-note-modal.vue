<template>
    <simple-card title="Notes">
        <div class="note-modal-container bg-gradient-to-r from-[#042137] to-[#042137]  flex flex-col md:flex-row justify-between overflow-y-auto h-[750px] scroll-py-8">
            
            <div class="md:w-48 mx-2">
               <div class="flex flex-col items-center mb-10">
                    <NewAgreementIcon class="h-[50px] mb-2 cursor-pointer"/>
                    <p>Create a New Note</p>    
               </div>
               
               <Folder :shared="true" />              
               <Folder />
               <Folder />
               <Folder />
               <Folder />
               <Folder />
               <Folder />
               <Folder />
              
            </div>

            <div class="mt-10 mb-5 md:w-80 mx-5 items-center">
                
                <div class="md:flex items-center space-x-4">
                    <button class="bg-[#0074c8] p-2 px-10 rounded-md border-2 border-transparent hover:border-[#CBCBCB]">Recent</button>
                    <button class="bg-[#052F61] p-2 px-10 rounded-md border-2 border-[#CBCBCB] hover:bg-[#0074c8]">Completed</button>
                </div>

                <div class="mt-5 md:mt-[75px]">
                    <p class="mb-2">Today</p>
                    
                    <Note 
                        v-for="membersNote in result?.membersNotes.data"
                        :title="membersNote.title"
                        :month="membersNote.month"
                        :time="membersNote.time"
                        :userName="membersNote.userName"
                        :alert="membersNote.alert"
                    />

                    
                    <p class="mb-2">Previous 30 Days</p>
                    <Note 
                        v-for="membersNote in result?.membersNotes.data"
                        :title="membersNote.title"
                        :month="membersNote.month"
                        :time="membersNote.time"
                        :userName="membersNote.userName"
                        :alert="membersNote.alert"
                    />
                    
                </div>
                
            </div>

            <div class="content px-4">
                <NoteForm  @saveNote="addRandomMembersNote"   @deleteNote="$emit('deleteNote')"/>
            </div>

        </div>
    </simple-card>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { MembersNoteFactory } from "~~/api/data/membersNote/MembersNoteFactory";
import { NewAgreementIcon } from '~~/components/icons';
import Folder from "./folder.vue";
import NoteForm from "./note-form.vue";
import Note from "./note.vue";
library.add(faCheck);

const props = defineProps({
    saveNoteStatus: Boolean
})
const emit = defineEmits(['saveNote']);

const query = gql`
    query MembersNotes {
        membersNotes(first: 100) {
        data {
          id
          title
          month
          time
          userName
          alert
        }
        paginatorInfo {
          count
          perPage
          total
        }
      }
    }
  `;
 
  const { result } = useQuery(query);
  console.log("potentialLeadsResult", result)
  const mutation = gql`
    mutation CreateMemberNote($input: MembersNoteInput!) {
        createMemberNote(input: $input) {
        id
        title
        userName
      }
    }
  `;
  
  
  const addRandomMembersNote = async () => {
    const variables = new MembersNoteFactory().build("test");
    const { mutate } = useMutation(mutation, {
      refetchQueries: [
        { query },
        "MembersNotes", 
      ],
    });
  
    const response = await mutate({ input: variables });
    
    emit('saveNote');

  };

 

</script>

<style scoped>
.note-modal-container {
	@apply pl-8 pr-8 pt-8 pb-8;
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