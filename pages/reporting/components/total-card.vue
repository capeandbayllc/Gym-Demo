<template>
    <div class="report-total-card flex-1 text-center mt-2 mb-3">
        <div class="text-secondary flex mb-5 text-xl -xl:text-sm font-semibold justify-center mt-2">
            {{ title }}
        </div>
        <div class="py-4 -lg:py-6 total-count w-4/5 rounded border border-secondary inline-block">
            <span class="text-2xl font-medium block mb-2 -lg:mb-5">
                Total:
            </span>
            <span class="text-7xl -lg:text-4xl font-bold">
                {{ totalCount }}
            </span>
        </div>
    </div>
</template>
<style scoped>
.report-total-card {
    .total-count {
        box-shadow: 0px 0px 32px #0074c8 inset;
    }
}
</style>
<script setup>
const props = defineProps({
    title: String,
    totalCount: String
});
</script>