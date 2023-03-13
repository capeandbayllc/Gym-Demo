<template>
    <div class="flex flex-col items-end space-y-4">
        <div class="flex flex-row md:space-x-4 space-x-2">
            <Button secondary size="xs">Category</Button>
            <select-box label="Category" :items="categories" size="xs" :transparent="false" secondary />
        </div>
        <div
            class="flex flex-col space-y-2 items-end md:space-y-0 md:space-x-4 md:flex-row"
        >
            <select-box label="Created By" :items="created_by" size="xs" />
            <select-box label="Sub Category" :items="subcategories" size="xs" />
            <select-box label="Status" :items="statuses" size="xs" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})

const categories = [
    {value: "category_1", label: "Category 1"},
    {value: "category_2", label: "Category 2"},
    {value: "category_3", label: "Category 3"},
    {value: "category_4", label: "Category 4"},
];

const subcategories = [
    {value: "sub_category_1", label: "Sub Category 1"},
    {value: "sub_category_2", label: "Sub Category 2"},
    {value: "sub_category_3", label: "Sub Category 3"},
    {value: "sub_category_4", label: "Sub Category 4"},
];

const created_by = [
    {value: "created_by_1", label: "User 1"},
    {value: "created_by_2", label: "User 2"},
    {value: "created_by_3", label: "User 3"},
    {value: "created_by_4", label: "User 4"},
];
const statuses = [
    {value: "active", label: "active"},
    {value: "in_progress", label: "In Progress"},
    {value: "completed", label: "Completed"},
];
</script>
