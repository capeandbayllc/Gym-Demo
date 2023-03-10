<template>
    <div class="flex flex-col items-end space-y-4">
        <div class="flex flex-row md:space-x-4 space-x-2">
            <Button secondary size="xs">Category</Button>
            <select-box label="Category" :items="categories" size="xs" />
        </div>
        <div
            class="flex flex-col space-y-2 items-end md:space-y-0 md:space-x-4 md:flex-row"
        >
            <select-box label="Created By" :items="categories" size="xs" />
            <select-box label="Sub Category" :items="categories" size="xs" />
            <select-box label="Status" :items="categories" size="xs" />
        </div>
    </div>
</template>

<script setup>

const categories = new Array(4).fill("Category");
</script>
