<template>
    <div class="tab-list">
        <div
            v-for="(tab, ndx) in tabs"
            :key="ndx"
            class="tab-item"
            :class="{
                'active': modelValue === ndx
            }"
            @click="$emit('update:modelValue', ndx)"
        >{{tab}}</div>
    </div>
</template>
<style scoped lang="postcss">
.tab-list {
    @apply flex flex-row space-x-5 pb-4 -lg:block -lg:w-full -lg:text-center;
    .tab-item {
        @apply px-4 py-1 rounded bg-base-content text-secondary text-sm cursor-pointer -lg:inline-block -lg:mb-2;
    }
    .tab-item.active {
        @apply bg-secondary text-base-content relative;
    }
    .tab-item.active::after {
        content: 'x';
        @apply absolute w-4 h-4 bg-error rounded-full flex items-center justify-center pb-0.5 top-[-0.5rem] right-[-0.5rem];
    }

}
</style>
<script setup>
const props = defineProps({
    modelValue: Number
})
const tabs = ["Employees", "Leads", "Members", "Fitness", "Corporation", "Vendors", "Recruitment"]
</script>
