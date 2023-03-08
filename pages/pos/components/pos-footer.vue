<template>
    <div class="pos-footer">
        <div class="pos-button-item group">
            <PlusIcon class="pos-add-icon" />
            <span class="pos-add-text">Add New Product</span>
        </div>
        <div class="pos-button-item group">
            <PlusIcon class="pos-add-icon" />
            <span class="pos-add-text">Add New Category</span>
        </div>
        <div class="pos-button-item group">
            <MinusIcon class="pos-remove-icon" />
            <span class="pos-remove-text">Remove Product</span>
        </div>
        <div class="pos-button-item group">
            <MinusIcon class="pos-remove-icon" />
            <span class="pos-remove-text">Remove Category</span>
        </div>
    </div>
</template>
<script setup>
import { PlusIcon, MinusIcon } from "~~/components/icons";
</script>
<style scoped>
.pos-footer {
    @apply flex flex-row gap-8 px-10 py-[7px] h-[3rem] w-[80%] bg-[#191919]/[0.6] mx-auto rounded-b-full;
}
.pos-button-item {
    @apply flex flex-row gap-2 text-[0.9rem] cursor-pointer;
}
.pos-button-transition {
    @apply transition-all duration-300 rounded-full;
}
.pos-button-icon {
    @apply w-[34px] h-[34px] border-[2.5px] p-1 fill-white;
}
.pos-add-icon {
    @apply pos-button-icon border-secondary group-hover:border-blue-900 pos-button-transition group-hover:fill-[#0074C8];
}
.pos-remove-icon {
    @apply pos-button-icon border-[#FF0000] group-hover:border-red-900 pos-button-transition group-hover:fill-[#FF0000];
}
.pos-add-text {
    @apply pos-button-transition my-auto group-hover:text-[#0074C8];
}
.pos-remove-text {
    @apply pos-button-transition my-auto group-hover:text-[#FF0000];
}
</style>
