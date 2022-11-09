<template>
    <simple-card>
        <template #title>
            <dashboard-card-title
                :title-icon="titleIcon"
                :title="title"
            />
        </template>
        <slot />
    </simple-card>
</template>
<script setup>
import DashboardCardTitle from "./dashboard-card-title.vue";
const props = defineProps({
    titleIcon: Object,
    title: String
})
</script>
