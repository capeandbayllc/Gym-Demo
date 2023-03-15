<template>
    <NuxtLink class="nav-item" :to="url" v-if="url">
        <component :is="icon" />
        <span v-if="label" class="nav-item-label">{{ label }}</span>
    </NuxtLink>
    <span class="nav-item" v-else @click="openNavModal">
        <component :is="icon" />
        <span v-if="label" class="nav-item-label">{{ label }}</span>
    </span>
    <daisy-modal :overlay="false" id="navModal" ref="navModal">
        <div class="w-[90vw]">
            <component :is="modalComponent" />
        </div>
    </daisy-modal>
</template>
<style scoped>
.nav-item {
    @apply flex w-full h-16 items-center justify-center cursor-pointer;
}
.nav-item:hover .nav-item-label {
    @apply flex h-9 w-fit left-0 px-4 text-sm font-semibold items-center text-base-content;
}
.nav-item:hover {
    @apply text-secondary;
}
.nav-item-label {
    @apply bg-secondary-focus absolute hidden;
}
</style>
<script setup>
const navModal = ref(null);
const props = defineProps({
    label: String,
    icon: Object,
    url: String,
    modalComponent: Object,
});

const openNavModal = () => {
    navModal.value.open();
};
</script>
