<template>
    <div class="people-lead-table">
        <data-table
            :columns="columns"
            :data="items"
            :row-component="AgreementSearchTableRow"
            class="h-56 overflow-y-auto"
        />
    </div>
</template>
<script setup>
import AgreementSearchTableRow from './agreement-search-table-row.vue';
const props = defineProps({
    columns: {
        type: Array,
        default: []
    },
    items: {
        type: Array,
        default: []
    }
});

</script>