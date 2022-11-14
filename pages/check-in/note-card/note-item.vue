<template>
    <div 
        class="note-item"
        :class="{
            'active': isActive
        }"
    >
        <div>{{note.title}}</div>
        <div class="flex flex-row gap-5">
            <span> {{note.date}} </span>
            <span> {{note.time}} </span>
        </div>
    </div>
</template>
<style scoped>
.note-item {
    @apply w-72 border rounded p-3 cursor-pointer;
}
.note-item:first-child {
    @apply border-accent;
    &.active {
        @apply bg-accent;
    }
}
.note-item:nth-child(2) {
    @apply border-accent-focus;
    &.active {
        @apply bg-accent-focus;
    }
}
.note-item:nth-child(3) {
    @apply border-info;
    &.active {
        @apply bg-info;
    }
}
.note-item:nth-child(4) {
    @apply border-secondary;
    &.active {
        @apply bg-secondary;
    }
}
.note-item:nth-child(5) {
    @apply border-info-content;
    &.active {
        @apply bg-info-content;
    }
}


</style>
<script setup>
const props = defineProps({
    note: Object,
    isActive: Boolean
})
</script>
