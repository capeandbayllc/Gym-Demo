<template>
    <div
        class="w-[60vw] border-2 border-secondary p-10 font-light tracking-wide bg-[#191919]/[0.9] flex flex-col rounded-lg text-[0.8rem]"
    >
        <h3 class="text-[1.2rem]">Remove Category</h3>
        <div class="max-h-[72vh] overflow-y-scroll py-5">
            <PosProducts
                :inventoryCategories="inventoryCategories"
                :categoriesMarkedForRemove="categoriesMarkedForRemove"
                :categoryRemoveMode="true"
                :markForRemove="markForRemove"
            />
        </div>
        <div class="flex flex-row justify-end gap-5 mt-5">
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

const categoriesMarkedForRemove = ref([]);
const emit = defineEmits("remove-products-from-list", "cancel-remove-product");
const props = defineProps({
    inventoryCategories: { type: Array },
});

const markForRemove = (catIndex) => {
    if (categoriesMarkedForRemove.value.includes(catIndex)) {
        categoriesMarkedForRemove.value.splice(
            categoriesMarkedForRemove.value.indexOf(catIndex),
            1
        );
    } else {
        categoriesMarkedForRemove.value.push(catIndex);
    }
};

const resetInputState = () => {
    categoriesMarkedForRemove.value = [];
    emit("cancel-remove-product");
};

const confirmRemove = () => {
    emit("remove-categories-from-list", categoriesMarkedForRemove.value);
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
