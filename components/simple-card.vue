<template>
    <div class="simple-card">
        <component :is="titleComponent" v-if="titleComponent" v-bind="$attrs" />
        <div class="simple-card-title" v-else-if="title">
            <div>
                {{ title }}
            </div>
            <cross-icon
                v-if="closable"
                class="cursor-pointer"
                @click="$emit('close')"
            />
        </div>
        <slot name="title" v-else />
        <slot />
    </div>
</template>
<style scoped>
.simple-card {
    @apply relative border border-secondary bg-black rounded-[19px];
    .simple-card-title {
        @apply flex items-center h-12 text-xl rounded-t-xl font-semibold px-6 text-base-content justify-between bg-gradient-to-b from-secondary to-base-300/30 bg-secondary bg-blend-darken;
    }
}
</style>
<script setup>
import { CrossIcon } from "./icons";
const props = defineProps({
    title: String,
    titleComponent: Object,
    closable: {
        type: Boolean,
        default: false,
    },
});
</script>
