<template>
    <div class="chart-content">
        <div class="text-[9px] label">{{label}}</div>
        <div class="leading-none">
            <span class="value">
                {{value}}
            </span> <br>
            <span class="percent">
                {{percent}}%
            </span>
        </div>
    </div>
</template>
<style scoped lang="postcss">
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