<template>
    <div class="w-[550px]">
        <p class="text-center font-semibold mb-6">What brought you in today?</p>
        <div class="tab-list">
            <div
                v-for="(tab, ndx) in tabs"
                :key="ndx"
                class="tab-item"
                :class="{
                    'active': tab.selected
                }"
                @click="selectOptions(tab)"
            >{{tab.title}}</div>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.tab-list {
    @apply  pb-4 -lg:block -lg:w-full -lg:text-center;
    .tab-item {
        @apply inline-block px-4 py-1 m-2 rounded bg-base-content text-secondary text-sm cursor-pointer -lg:inline-block -lg:mb-2;
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
const tabs = ref([
    {title:"Web",selected:false},
    {title:"Social Post ",selected:false},
    {title:"Newspaper Ad",selected:false},
    {title:"Friend",selected:false},
    {title:"Club Associate",selected:false},
    {title:"Doctor",selected:false},
    {title:"Facebook Ad",selected:false}
]);

const selectOptions = (opt)=>{
    opt.selected = !opt.selected;
}

</script>
