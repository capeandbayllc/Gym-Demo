<template>
    <div
        class="add-ons"
        :class="{
            'add-ons-active': value,
        }"
    >
        PT
        <span class="edit-icon"><empty-file-icon class="mb-2" /></span>
    </div>
</template>
<style scoped>
.add-ons {
    @apply w-fit border px-[5px] flex items-center rounded-full cursor-pointer;
    &:hover {
        font-size:0;
        @apply px-4;
        .edit-icon{
            @apply visible;
        }
    }
    .edit-icon{
        @apply absolute h-[20px] w-[20px] invisible mx-auto left-0 right-0;
        svg {
            @apply h-full w-full;
        }
    }
}
.add-ons.add-ons-active {
    @apply border-accent-focus/60;
    background: #5BC600;
}
</style>
<script setup>
import { EmptyFileIcon } from '~~/components/icons';
const props = defineProps({
    value: Boolean
})
</script>
