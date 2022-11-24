<template>
    <div class="leads-list-container">
        <h3 class="flex justify-between">{{ tableSelected }} <search-input neutral size="md" border="neutral"/></h3>
        <div>
            <data-table
                :data="data"
                :row-component="LeadsTableRow"
                class="h-44 overflow-y-auto text-xs my-2 mt-4 border-spacing-2" style="width:400px;"
            />
        </div>
        <Button secondary size="xs" class="view-btn float-right font-semibold mb-3 mt-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            New
        </Button>
    </div>
</template>
<style scoped>
.leads-list-container {
    @apply border rounded p-3 pb-1 bg-black border-white;
    h3 {
        @apply font-semibold text-secondary;
    }
}
</style>
<script setup>
import LeadsTableRow from './leads-table-row.vue';
const props = defineProps({
    tableSelected: {
        type: String
    },
});

const data = [
    {
        id: 1,
        name: "Ray Unser",
        membership: "Premimum",
        phone:"123-147-3456"
    }, {
        id: 2,
        name: "Randy Portis",
        membership: "Basic",
        phone:"123-255-9887"
    }, 
    {
        id: 3,
        name: "Tess Hightower",
        membership: "Gold",
        phone:"123-255-6898"
    },
    {
        id: 4,
        name: "Sandy Lin",
        membership: "Gold",
        phone:"123-255-6898"
    }
];
</script>
