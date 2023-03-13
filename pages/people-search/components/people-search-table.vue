<template>
    <div class="people-lead-table">
        <data-table
            :columns="columns"
            :data="items"
            :row-component="PeopleSearchTableRow"
            class="overflow-y-auto"
            :class="{ 'h-56': !filter }"
            @row-clicked="clickRow"
        />
    </div>
</template>
<script setup>
import PeopleSearchTableRow from "./people-search-table-row.vue";
const props = defineProps({
    columns: {
        type: Array,
        default: [],
    },
    items: {
        type: Array,
        default: [],
    },
    filter: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(["row-clicked"]);

const clickRow = (data) => {
    emit("row-clicked", data);
};
</script>
