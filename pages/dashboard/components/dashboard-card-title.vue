<template>
    <div class="dashboard-card-title">
        <div class="flex items-center">
            <div class="title-icon">
                <component :is="titleIcon" />
            </div>
            {{title}}
        </div>
        <plus-circle-icon />
    </div>
</template>
<style scoped>
.dashboard-card-title {
    @apply flex bg-secondary justify-between h-12 items-center text-lg font-semibold px-4;
    .title-icon {
        @apply flex items-center justify-center w-9 h-9 mr-3 bg-neutral rounded-full;
    }
}
</style>
<script setup>
import { PlusCircleIcon } from "~~/components/icons"
const props = defineProps({
    titleIcon: Object,
    title: String
})
</script>
