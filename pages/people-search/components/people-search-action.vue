<template>
    <div class="flex flex-row justify-between space-x-4 mt-10 mb-4">
        <div class="flex gap-6">
            <Button size="sm" class="font-medium border-base-content text-base-content" :class="{'active' : activeBtn === item.type}" @click="setActiveAction(item.type)" v-for="(item, index) in actionsBtn" :key="index">
                {{ item.name }}
            </Button>
        </div>
        <div class="flex gap-6">
            <select-box
                :items="filterType"
                value=""
                :label="'Locations'" 
                :secondary="true"
                class="w-40">
            </select-box>
        </div>
    </div>
</template>
<style scoped>
.active{
    @apply border-secondary bg-secondary;
}
</style>
<script setup>
const props = defineProps({
    actionsBtn: Array,
});
const activeBtn = ref('');
const emit = defineEmits(['people-search-action-selected'])
const setActiveAction = (name) => {
    if(name === activeBtn.value) {
        activeBtn.value = '';
        emit('people-search-action-selected', '');
    }else {
        activeBtn.value = name;
        emit('people-search-action-selected', name);
    }
}
const filterType = [
    {
        value: "1",
        label: "Location 1"
    }, 
    {
        value: "2",
        label: "Location 2"
    }, 
    {
        value: "3",
        label: "Location 3"
    },
    {
        value: "4",
        label: "Location 4"
    },
    {
        value: "5",
        label: "Location 5"
    },
];
</script>
