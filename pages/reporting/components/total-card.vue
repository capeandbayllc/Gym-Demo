<template>
    <div class="report-total-card flex-1 text-center mt-2 mb-3">
        <div class="text-secondary flex mb-5 text-xl -xl:text-sm font-semibold justify-center mt-2">
            {{ title }}
        </div>
        <div class="total-count">
            <span class="text-2xl font-medium block mb-2 -lg:mb-5">
                Total:
            </span>
            <span class="text-7xl -lg:text-4xl font-bold">
                {{ totalCount }}
            </span>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.report-total-card {
    .total-count {
        @apply shadow shadow-secondary shadow-lg py-4 -lg:py-6 w-4/5 rounded-xl border border-secondary inline-block;
    }
}
</style>
<script setup>
const props = defineProps({
    title: String,
    totalCount: String
});
</script>