<template>
    <div
        class="pos-style-transition mr-5 relative"
        :class="{
            'border px-5 mb-5 border-red-500 hover:border-red-800 hover:bg-red-500/[0.3] rounded-lg cursor-pointer group':
                categoryRemoveMode,
            'bg-red-500/[0.7]': isCategoryMarkedForRemove(category.id),
        }"
        @click="markCategoryForRemove(category.id)"
        v-for="(category, catIndex) in inventoryCategories"
    >
        <span
            class="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-red-500 group-hover:bg-[#ff0000] flex flex-col justify-center pos-style-transition"
            v-if="categoryRemoveMode"
        >
            <MinusIcon class="fill-white mx-auto w-5 h-auto" />
        </span>
        <h3
            class="text-[1.1rem] my-3 font-light tracking-wider"
            v-if="category.subcategories.length"
        >
            {{ category.title }}
        </h3>
        <div
            class="pos-product-category"
            :class="{
                '': categoryRemoveMode,
            }"
            v-if="category.subcategories.length"
        >
            <PosSubcategory
                v-for="(subcategory, subIndex) in category.subcategories"
                :title="subcategory.title"
                :icon="subcategory.icon"
                :removeMode="removeMode"
                :categoryRemoveMode="categoryRemoveMode"
                :isProductMarkedForRemove="
                    isProductMarkedForRemove(catIndex, subIndex)
                "
                @click="triggerClickEvent(catIndex, subIndex)"
            />
        </div>
    </div>
</template>

<script setup>
import PosSubcategory from "./pos-subcategory.vue";
import { MinusIcon } from "~~/components/icons";

const props = defineProps({
    inventoryCategories: { type: Array },
    showProductItemsPane: { type: Function },
    markForRemove: { type: Function },
    removeMode: { type: Boolean },
    categoryRemoveMode: { type: Boolean },
    productsMarkedForRemove: { type: Array },
    categoriesMarkedForRemove: { type: Array },
});

const triggerClickEvent = (catIndex, subIndex) => {
    if (!props.removeMode && !props.categoryRemoveMode) {
        props.showProductItemsPane(
            props.inventoryCategories[catIndex].id,
            subIndex
        );
    } else if (props.removeMode) {
        props.markForRemove(catIndex, subIndex);
    }
};

const isProductMarkedForRemove = (catIndex, subIndex) => {
    if (props.productsMarkedForRemove) {
        return (
            props.productsMarkedForRemove.find(
                (item) =>
                    item.catIndex === catIndex && item.subIndex === subIndex
            ) !== undefined
        );
    }

    return false;
};

const markCategoryForRemove = (catIndex) => {
    if (props.categoryRemoveMode) {
        props.markForRemove(props.markForRemove(catIndex));
    }
};

const isCategoryMarkedForRemove = (catIndex) => {
    if (props.categoriesMarkedForRemove) {
        return props.categoriesMarkedForRemove.includes(catIndex);
    }

    return false;
};
</script>

<style scoped>
.pos-product-category {
    @apply w-full flex flex-row gap-4 flex-wrap mb-6;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
