<template>
    <div>
        <select class="select w-full max-w-xs" :class="class">
            <option selected>{{ label }}</option>
            <option v-for="(option, index) in items" :key="index" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Select...",
    },
    items: {
        type: Array,
        default: [],
    },
    class: {
        type: String,
        default: "",
    }
});

</script>