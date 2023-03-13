<template>
    <div
        class="w-[60vw] border-2 border-secondary p-10 font-light tracking-wide bg-[#191919]/[0.9] flex flex-col gap-5 rounded-lg text-[0.8rem]"
    >
        <h3 class="text-[1.2rem]">Remove Product</h3>
        <div class="max-h-[60vh] overflow-y-scroll">
            <PosProducts
                :inventoryCategories="inventoryCategories"
                :productsMarkedForRemove="productsMarkedForRemove"
                :removeMode="true"
                :markForRemove="markForRemove"
            />
        </div>
        <div class="flex flex-row justify-end gap-5">
            <span
                class="text-[#aaa] hover:text-secondary pos-style-transition cursor-pointer my-auto"
                @click="resetInputState"
            >
                Cancel
            </span>
            <button class="pos-add-button" @click="confirmRemove">Save</button>
        </div>
    </div>
</template>

<script setup>
import PosProducts from "./partials/pos-products.vue";

const productsMarkedForRemove = ref([]);
const emit = defineEmits("remove-products-from-list", "cancel-remove-product");
const props = defineProps({
    inventoryCategories: { type: Array },
});

const markForRemove = (catIndex, subIndex) => {
    const item = productsMarkedForRemove.value.find(
        (item) => item.catIndex === catIndex && item.subIndex === subIndex
    );

    if (item === undefined) {
        productsMarkedForRemove.value.push({ catIndex, subIndex });
    } else {
        productsMarkedForRemove.value.splice(
            productsMarkedForRemove.value.indexOf(item),
            1
        );
    }
};

const resetInputState = () => {
    productsMarkedForRemove.value = [];
    emit("cancel-remove-product");
};

const confirmRemove = () => {
    emit("remove-products-from-list", productsMarkedForRemove.value);
    resetInputState();
};
</script>

<style scoped>
.pos-add-button {
    @apply px-3 py-0.5 bg-secondary border-secondary/[0] border-2 rounded-md hover:border-secondary/[1] hover:bg-transparent pos-style-transition;
}

.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
