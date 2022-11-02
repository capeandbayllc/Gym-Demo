<template>
    <div
        class="add-ons"
        :class="{
            'add-ons-active': value,
        }"
    >
        PT
    </div>
</template>
<style scoped>
.add-ons {
    @apply w-fit border px-4 flex items-center rounded cursor-pointer;
}
.add-ons.add-ons-active {
    @apply bg-accent-focus/60 border-accent-focus/60;
}
</style>
<script setup>
const props = defineProps({
    value: Boolean
})
</script>
