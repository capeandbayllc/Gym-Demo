<template>
    <div class="overflow-y-auto max-w-[90vw] pr-2">
        <table
            class="border-separate"
        >
            <table-header
                :rowBordered="rowBordered"
            />
            <slot name="thead"></slot>
            <table-body
                :columns="columns"
                :data="data"
            />
        </table>
    </div>
</template>
<style scoped>
table {
    border-spacing: 0 5px;
    @apply w-full;
}
</style>
<script setup>
import TableHeader from "./table-header.vue";
import TableBody from "./table-body.vue";
const props = defineProps({
    data: {
        type: Array,
        default: [],
    },
    columns: {
        type: Array,
        default: [],
    },
});
</script>
