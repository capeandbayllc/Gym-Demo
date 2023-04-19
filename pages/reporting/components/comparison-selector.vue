<template>
    <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
        <div>
            <span>
                Compare:
            </span>
            <span class="ml-1 cursor-pointer" @click="emit('clickPreviousMonth')" :class="{'text-secondary': compareReport === 'Previous Month'}">Previous Month</span>
            <span class="mx-2">or</span>
            <span class="cursor-pointer" @click="emit('clickPreviousYear')" :class="{'text-secondary': compareReport === 'Previous Year'}">Previous Year</span>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['clickPreviousMonth', 'clickPreviousYear']);

const props = defineProps({
    compareReport: {
		type: String
	}
})
</script>