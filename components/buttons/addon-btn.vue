<template>
    <button
        class="add-ons"
        :class="{
            'add-ons-active': value,
        }"
    >
        <span class="add-ons-text">PT</span>
        <span class="edit-icon"><edit-icon class="mb-2" /></span>
    </button>
</template>
<style scoped>
.add-ons {
    @apply w-fit border flex flex-row items-center justify-center rounded-full cursor-pointer;
    &:hover {
        .add-ons-text {
            font-size:0;
        }
        .edit-icon{
            @apply flex visible;
        }
    }
    .edit-icon{
        @apply h-5 w-5 hidden mx-auto;
        svg {
            @apply h-full w-full;
        }
    }
}
.add-ons.add-ons-active {
    @apply bg-accent-focus border-accent-focus;
}
</style>
<script setup>
import { EditIcon } from '~~/components/icons';
const props = defineProps({
    value: Boolean
})
</script>
