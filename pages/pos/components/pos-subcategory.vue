<template>
    <div class="pos-subcategory-button group">
        <div class="pos-subcategory-title-container">
            <span class="pos-subcategory-title">{{ title }}</span>
        </div>
        <div class="absolute p-[5px] h-[70px] w-full overflow-hidden">
            <div class="relative">
                <component :is="icon" class="h-[70px] w-[70px] opacity-20" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    icon: {
        type: Object,
    },
});
</script>

<style scoped>
.pos-subcategory-button {
    @apply border-[1px] relative hover:border-secondary rounded-md h-[70px] flex flex-col justify-center w-[calc(31%-0.25rem)] bg-gradient-to-b from-[#2f72c4]/[0.6] to-[#191919] pos-style-transition cursor-pointer;
}
.pos-subcategory-title-container {
    @apply w-[calc(100%-2px)] h-[67px] absolute top-[1px] left-[1px] flex flex-col justify-center  pos-style-transition;
}
.pos-subcategory-title {
    @apply mx-auto text-[0.9rem] w-[50%] line-clamp-2 text-center group-hover:text-secondary pos-style-transition relative font-[300] tracking-wider;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
