<template>
    <div>
        <simple-card class="documents-card -md:text-xs" :closable="false">
            <template #title>
                <div class="document-card-title">
                    Documents
                    <search-input neutral size="md" border="base" />
                </div>
            </template>
            <div class="p-6">
                <data-table
                    :columns="columns"
                    :data="documentsData"
                    :row-component="DocumentTableRow"
                    class="h-72 overflow-y-auto document-tbl-content"
                />
            </div>
        </simple-card>
    </div>
</template>
<style scoped lang="postcss">
.document-card-title {
    @apply flex items-center h-14 text-xl rounded-t-xl font-semibold px-6 text-base-content bg-secondary justify-between;
}
</style>
<style lang="postcss">
.document-tbl-content thead {
    @apply top-0 bg-base-300 h-10;
}
</style>
<script setup>
import DocumentTableRow from "./document-table-row.vue";
const columns = [
    {
        label: "Document Name",
        class: "text-secondary text-left",
    },
    {
        label: "Type",
        class: "text-secondary text-left",
    },
    {
        label: "Created",
        class: "text-secondary text-left",
    },
    {
        label: "Uploaded By",
        class: "text-secondary text-left",
    },
];
const documentsData = [
    {
        id: 1,
        segment: "New Employee",
        created: "05/05/2002",
        type_status: "secondary",
        first_name: "Kevin",
        last_name: "Buchanan",
        type: "Contract",
    },
    {
        id: 2,
        segment: "New Member",
        created: "05/05/2002",
        type_status: "secondary",
        first_name: "Kevin",
        last_name: "Buchanan",
        type: "Form",
    },
    {
        id: 3,
        segment: "Training Guide",
        created: "05/05/2002",
        type_status: "secondary",
        first_name: "Kevin",
        last_name: "Buchanan",
        type: "Training",
    },
    {
        id: 4,
        segment: "Training Guide",
        created: "05/05/2002",
        type_status: "secondary",
        first_name: "Kevin",
        last_name: "Buchanan",
        type: "Training",
    },
    {
        id: 5,
        segment: "Job Performance",
        created: "05/05/2002",
        type_status: "secondary",
        first_name: "Kevin",
        last_name: "Buchanan",
        type: "Training",
    },
    {
        id: 6,
        segment: "Compensation",
        created: "05/05/2002",
        type_status: "secondary",
        first_name: "Kevin",
        last_name: "Buchanan",
        type: "Contract",
    },
];
</script>
