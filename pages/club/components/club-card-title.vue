<template>
    <div class="inspection-card-title">
        <div class="flex items-center text-white">
            <div class="title-icon">
                <component :is="titleIcon" />
            </div>
            {{title}}
        </div>
    </div>
</template>
<style scoped lang="postcss">
.inspection-card-title {
    @apply flex bg-secondary justify-between h-12 items-center text-lg font-normal px-[20px] rounded-[15px] rounded-b-none;
}
.title-icon {
    @apply flex items-center justify-center w-9 h-9 mr-3 bg-neutral rounded-[14px];
}
</style>
<script setup>
const props = defineProps({
    titleIcon: Object,
    title: String
})
</script>
