<template>
    <button
        class="cursor-pointer hover:text-secondary hover:text-opacity-50"
        :class="{ 'text-secondary' : activeFilter === item }"
        v-for="(item, index) in filterList"
        :key="index"
        @click="emit('setFilter', returnName ? item : index)"
    >
        {{ item }}
    </button>
</template>

<script setup>
const filterList = ref(['TODAY', 'MTD', 'QTD', 'YTD', 'RANGE']);

const emit = defineEmits(['setFilter']);

const props = defineProps({
    activeFilter: {
		type: String
	},
    returnName: {
        type: Boolean,
        default: false
    }
});
</script>