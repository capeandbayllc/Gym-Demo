<template>
    <select-box
        class="text-sm rounded"
        :class="bg_color"
        :items="status_items"
        :value="status"
    />
</template>

<style scoped>
    .action-icon-box {
        @apply border border-secondary rounded-xl py-2 px-3 bg-black;
    }
</style>

<script setup>
const props = defineProps({
    status: String
})

const status_items = [{
    value: 'in_progress',
    label: 'In Progress'
}, {
    value: 'pause',
    label: 'Pause'
}, {
    value: 'rescheduled',
    label: 'Rescheduled'
}, {
    value: 'completed',
    label: 'Completed'
}];

const bg_color = computed(() => {
    let background;

    switch(props.status) {
        case 'in_progress':
            background = 'bg-secondary';
            break;
        case 'pause':
            background = 'bg-error';
            break;
        case 'rescheduled':
            background = 'bg-[#ff9d00]';
            break;
        case 'completed':
            background = 'bg-accent-focus';
            break;
        default:
            background = '';
    }

  return background;
});

</script>
