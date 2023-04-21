<template>
    <div class="flex flex-row justify-between space-x-4 mb-4">
        <div class="flex gap-4">
            <Button secondary size="sm" class="font-medium" :class="{'active' : activeBtn === item.type}" @click="setActiveAction(item.type)" v-for="(item, index) in actionsBtn" :key="index">
                {{ item.name }}
            </Button>
        </div>
        <div class="flex gap-4">
            <select-box
                :items="filterType"
                value=""
                :label="'Filter'" 
                class="w-40 filter-selected">
            </select-box>
            <search-input neutral size="md" border="neutral" class="w-52"/>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.active{
    @apply border-secondary bg-transparent;
}
.filter-selected {
    @apply z-[30];
}
</style>
<script setup>
const activeBtn = ref('upload');
const emit = defineEmits(['file-action-selected'])
    const setActiveAction = (name) => {
        emit('file-action-selected', name);
        activeBtn.value = name;
    }
const filterType = [
    {
        value: "1",
        label: "Filter 1"
    }, 
    {
        value: "2",
        label: "Filter 2"
    }, 
    {
        value: "3",
        label: "Filter 3"
    },
    {
        value: "4",
        label: "Filter 4"
    },
    {
        value: "5",
        label: "Filter 5"
    },
];
const actionsBtn = [
    {
        name: 'Upload',
        type: 'upload'
    },
    {
        name: 'New Folder',
        type: 'folder'
    },
];
</script>
