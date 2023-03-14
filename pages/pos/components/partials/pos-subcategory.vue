<template>
    <div
        class="pos-subcategory-button group"
        :class="{
            'hover:border-secondary bg-gradient-to-b from-[#2f72c4]/[0.6] to-[#191919]':
                !removeMode && !categoryRemoveMode,
            'border-red-500 hover:border-red-800 hover:bg-red-500/[0.3]':
                removeMode,
            'bg-red-500/[0.7]': isProductMarkedForRemove,
        }"
    >
        <div class="pos-subcategory-title-container">
            <span
                class="pos-subcategory-title"
                :class="{
                    'group-hover:text-secondary':
                        !removeMode && !categoryRemoveMode,
                }"
                >{{ title }}</span
            >
        </div>
        <span
            class="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-red-500 group-hover:bg-[#ff0000] flex flex-col justify-center pos-style-transition"
            v-if="removeMode"
        >
            <MinusIcon class="fill-white mx-auto w-5 h-auto" />
        </span>
        <div class="absolute p-[5px] h-[70px] w-full overflow-hidden">
            <div class="relative">
                <component :is="icon" class="h-[70px] w-[70px] opacity-20" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { MinusIcon } from "~~/components/icons";

const emit = defineEmits(["removeProduct"]);
const props = defineProps({
    title: { type: String },
    icon: { type: Object },
    removeMode: { type: Boolean },
    categoryRemoveMode: { type: Boolean },
    isProductMarkedForRemove: { type: Boolean },
});
</script>

<style scoped>
.pos-subcategory-button {
    @apply border-[1px] relative rounded-md h-[70px] flex flex-col justify-center w-[calc(100%/3-11px)]  pos-style-transition cursor-pointer;
}
.pos-subcategory-title-container {
    @apply w-[calc(100%-2px)] h-[67px] absolute top-[1px] left-[1px] flex flex-col justify-center  pos-style-transition;
}
.pos-subcategory-title {
    @apply mx-auto text-[0.9rem] w-[50%] line-clamp-2 text-center pos-style-transition relative font-[300] tracking-wider;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
