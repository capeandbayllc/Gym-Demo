<template>
    <simple-card
        title="Notes"
        class="note-card"
        closable
    >
        <div class="note-card-container">
            <div class="note-list">
                <note-item
                    v-for="note in notes"
                    :is-active="note.id === activeNote?.id"
                    :key="note.id"
                    :note="note"
                    @click="activeNote={...note}"
                />
            </div>
            <div>
                <h3>Title</h3>
                <textarea v-model="activeNote.title"></textarea>
                <div class="note-actions">
                    <Button size="sm" secondary>Create a Note</Button>
                    <Button size="sm" secondary>Add an Alert</Button>
                    <hr class="invisible sm:hidden w-full"/>
                    <Button size="sm" ghost>Delete</Button>
                    <Button size="sm" secondary>Save</Button>
                </div>
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.note-card {
    @apply m-auto bg-neutral;
    @screen -lg {
        @apply m-4;
    }
    .note-card-container {
        @apply flex flex-col lg:flex-row m-8 gap-2 relative py-10;
        .note-list {
            @apply flex flex-col gap-2;
        }
        h3 {
            @apply absolute text-xl font-semibold top-0;
        }
        textarea {
            @apply text-neutral p-2 rounded h-full w-full;
        }
        .note-actions {
            @apply flex flex-row flex-wrap justify-end gap-2 mt-2 ml-4;
        }
    }
}
</style>
<script setup>
import NoteItem from './note-item.vue';

const activeNote = ref({title: ""})
const notes = [{
    id: 1,
    title: "Note #16",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Note #16",
}, {
    id: 2,
    title: "Note #17",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Note #17",
}, {
    id: 3,
    title: "Note #18",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Note #18",
}, {
    id: 4,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Note #19",
}, {
    id: 5,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Note #20",
}]

</script>
