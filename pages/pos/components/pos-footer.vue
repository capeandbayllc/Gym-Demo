<template>
    <div class="pos-footer">
        <div class="pos-button-item group" @click="showAddProductModal">
            <PlusIcon class="pos-add-icon" />
            <span class="pos-add-text">Product</span>
        </div>
        <div class="pos-button-item group" @click="showAddCategoryModal">
            <PlusIcon class="pos-add-icon" />
            <span class="pos-add-text">Category</span>
        </div>
        <div class="pos-button-item group" @click="removeProductModal">
            <MinusIcon class="pos-remove-icon" />
            <span class="pos-remove-text">Product</span>
        </div>
        <div class="pos-button-item group" @click="removeCategoryModal">
            <MinusIcon class="pos-remove-icon" />
            <span class="pos-remove-text">Category</span>
        </div>
    </div>
</template>

<script setup>
import { PlusIcon, MinusIcon } from "~~/components/icons";

const emit = defineEmits([
    "add-product-modal",
    "add-category-modal",
    "remove-product-modal",
    "remove-category-modal",
]);

const showAddProductModal = () => {
    emit("add-product-modal");
};
const showAddCategoryModal = () => {
    emit("add-category-modal");
};
const removeProductModal = () => {
    emit("remove-product-modal");
};
const removeCategoryModal = () => {
    emit("remove-category-modal");
};
</script>

<style scoped>
.pos-footer {
    @apply flex flex-col md:flex-row gap-8 px-10 py-[7px] md:h-[3rem] w-[80%] bg-[#191919]/[0.6] mx-auto rounded-xl md:rounded-b-full;
}
.pos-button-item {
    @apply flex flex-row gap-2 text-[0.7rem] lg:text-[0.9rem] cursor-pointer;
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
