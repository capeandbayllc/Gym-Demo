<template>
    <div class="py-2 -lg:py-3 rounded border border-secondary">
        <div class="flex text-lg -lg:text-xs -xl:text-sm font-semibold justify-center">{{ title }}</div>
        <div class="grid grid-cols-3 gap-3 -md:gap-2 px-5 py-3 -lg:px-1 text-center text-lg font-semibold">
            <div v-for="(data, index) in reportData" :key="index" class="-lg:text-xs -xl:text-sm">
                {{ data.type }}
                <div class="rounded border border-base py-2 mt-3" :class="'report-'+data.status">
                    {{ data.value }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.report-danger {
    @apply text-error;
}
.report-info {
    @apply text-secondary;
}
</style>
<script setup>
const props = defineProps({
   reportData: Array,
   title: String
});

</script>