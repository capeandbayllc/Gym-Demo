<template>
    <div class="chart-content">
        <div class="text-[9px]">{{label}}</div>
        <div class="leading-none">
            {{value}} <br />
            {{percent}}%
        </div>
    </div>
</template>
<style scoped>
.chart-content {
    @apply text-center text-sm font-bold py-2 px-3;
}
</style>
<script setup>
const props = defineProps({
    label: String,
    value: Number,
    percent: Number,
})
</script>