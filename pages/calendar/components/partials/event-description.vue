<template>
    <div
        class="line-clamp-3 text-[0.5rem]"
        v-if="shouldDisplayDescription(start, end)"
    >
        {{ description }}
    </div>
</template>
<script setup>
const props = defineProps({
    description: {
        type: String,
        default: "",
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
});

const shouldDisplayDescription = (start, end) => {
    if (end) {
        const diffInMs = end - start;
        const diffInMinutes = Math.round(
            ((diffInMs % 86400000) % 3600000) / 60000
        );

        return diffInMinutes >= 90;
    }

    return false;
};
</script>
