<template>
    <div
        class="flex flex-col space-y-2 items-end md:flex-row md:space-x-4 md:space-y-0"
    >
        <select-box label="Category" :items="categories" size="xs" /><select-box
            label="Created By"
            :items="categories"
            size="xs"
        />
        <select-box label="Sub Category" :items="categories" size="xs" />
        <select-box label="Status" :items="categories" size="xs" />
    </div>
</template>

<script setup>
const categories = new Array(4).fill("Category");
</script>
