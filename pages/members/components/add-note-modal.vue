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
                        v-for="Note in result?.notes.data"
                        :title="Note.title"
                        month="March 2022"
                        time="08 PM"
                        userName="Jone Doe"
                        :alert="Note.active"
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
import { NoteFactory } from "~~/api/data/notes/NoteFactory";
import { NewAgreementIcon } from '~~/components/icons';
import { GET_NOTES } from "../../../api/queries/note";
import Folder from "./folder.vue";
import NoteForm from "./note-form.vue";
import Note from "./note.vue";
library.add(faCheck);

const props = defineProps({
    saveNoteStatus: Boolean
})
const emit = defineEmits(['saveNote']);


 
  const { result } = useQuery(GET_NOTES);
    
  const mutation = gql`
    mutation CreateNote($input: CreateNoteInput!) {
      createNote(input: $input) {
        note
        title
      }
    }
  `;
  
  
  const addRandomMembersNote = async () => {
  const variables = new NoteFactory().build("test");
  const { mutate } = useMutation(mutation, {
  onCompleted: () => {
    refetchData(); // refetch data after mutation is completed
  },
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