<template>
  <simple-card title="Notes" class="mb-4">
    <div
      class="p-8 gr-gradient flex flex-col md:flex-row justify-between overflow-y-scroll max-h-[40vw]"
    >
      <div class="md:w-48 mx-2">
        <button class="flex flex-col items-center justify-center w-full mb-8">
          <NewAgreementIcon class="h-12 mb-2" />
          <p>Create a New Note</p>
        </button>

        <Folder :shared="true" />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>

      <div class="mt-10 mb-5 md:w-80 mx-5">
        <div class="md:flex items-center space-x-4">
          <button
            class="bg-secondary p-2 px-10 rounded-md border-2 border-transparent hover:border-accent-content"
          >
            Recent
          </button>
          <button
            class="bg-primary p-2 px-10 rounded-md border-2 border-accent-content hover:bg-secondary"
          >
            Completed
          </button>
        </div>

        <div class="mt-5 md:mt-20">
          <p class="mb-2">Today</p>

          <Note
            v-for="Note in result?.notes.data"
            :key="Note.title"
            :title="Note.title"
            month="March 2022"
            time="08 PM"
            userName="Jone Doe"
            :alert="Note.active"
          />
        </div>
      </div>
      <div
        class="bg-base-300 h-auto rounded-xl flex flex-col justify-between px-4"
      >
        <NoteForm
          @saveNote="addRandomMembersNote"
          @deleteNote="$emit('deleteNote')"
        />
      </div>
    </div>
  </simple-card>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { NoteFactory } from "~~/api/data/notes/NoteFactory";
import { NewAgreementIcon } from "~~/components/icons";
import { ADD_NOTE, GET_NOTES } from "../../../../api/queries/note";
import Folder from "./folder.vue";
import NoteForm from "./note-form.vue";
import Note from "./note.vue";
library.add(faCheck);

const props = defineProps({
  saveNoteStatus: Boolean,
});
const emit = defineEmits(["saveNote"]);

const { result } = useQuery(GET_NOTES);
const addRandomMembersNote = async () => {
  const variables = new NoteFactory().build("test");
  const { mutate } = useMutation(ADD_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });

  const response = await mutate({ input: variables });
  emit("saveNote");
};
</script>
