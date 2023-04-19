<template>
    <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
        <div>
            <span>
                {{ label }}:
            </span>
            <button class="ml-1 cursor-pointer" @click="emit('change', items[0])" :class="{'text-secondary': compareReport === items[0]}">{{ items[0] }}</button>
            <span class="mx-2">or</span>
            <button class="cursor-pointer" @click="emit('change', items[1])" :class="{'text-secondary': compareReport === items[1]}">{{ items[1] }}</button>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['change']);

const props = defineProps({
    label: {
		type: String
	},
    items: {
		type: Array,
        default: []
	},
    compareReport: {
		type: String
	}
})
</script>