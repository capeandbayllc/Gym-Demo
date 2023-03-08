<template>
    <div class="pos-products-pane-container">
        <div class="flex flex-row gap-5">
            <div>
                <input
                    placeholder="Search Products"
                    class="text-[0.8rem] w-60 rounded-md py-2 px-3 text-black"
                />
            </div>
            <select-box
                :items="categoriesFilter"
                value="0"
                :label="'Categories'"
                :secondary="true"
                class="w-40 text-[0.9rem] my-auto"
            >
            </select-box>
        </div>
        <div
            class="pos-product-items-pane"
            :class="{
                'h-[60vh]': showProducts,
                'h-[0vh]': !showProducts,
            }"
        >
            <span
                class="ml-auto text-[0.7rem] hover:text-secondary cursor-pointer pos-style-transition mr-1"
                @click="collapseProductItemsPane()"
            >
                Collapse
            </span>
            <div class="bg-[#191919] h-full">
                <PosProductItems :items="selectedSubcategory.items" />
            </div>
        </div>
        <div
            class="pos-products-pane"
            :class="{
                'h-[60vh]': !showProducts,
                'h-[0vh]': showProducts,
            }"
        >
            <div class="" v-for="(category, catIndex) in inventoryCategories">
                <h3 class="text-[1.2rem] my-3 font-light tracking-wider">
                    {{ category.title }}
                </h3>
                <div class="pos-product-category">
                    <PosSubcategory
                        v-for="(
                            subcategory, subIndex
                        ) in category.subcategories"
                        :title="subcategory.title"
                        :icon="subcategory.icon"
                        @click="showProductItemsPane(catIndex, subIndex)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PosSubcategory from "./pos-subcategory.vue";
import PosProductItems from "./pos-product-items.vue";
import { inventoryCategories } from "../helpers/pos-items";

const showProducts = ref(false);
const selectedSubcategory = ref({
    items: [],
    categoryIndex: null,
    subcategoryIndex: null,
});

const collapseProductItemsPane = () => {
    showProducts.value = false;
};

const showProductItemsPane = (categoryIndex, subcategoryIndex) => {
    selectedSubcategory.value = {
        items: inventoryCategories[categoryIndex].subcategories[
            subcategoryIndex
        ].items,
        categoryIndex,
        subcategoryIndex,
    };
    showProducts.value = true;
};

const categoriesFilter = [
    {
        value: "0",
        label: "View All",
    },
    {
        value: "1",
        label: "Apparel",
    },
    {
        value: "2",
        label: "Beverage",
    },
    {
        value: "3",
        label: "Membership",
    },
];
</script>

<style scoped>
.pos-products-pane-container {
    @apply w-[calc(50%-1.25rem)] flex flex-col gap-5;
}
.pos-products-pane {
    @apply overflow-y-scroll relative pos-style-transition;
}
.pos-product-category {
    @apply w-full flex flex-row gap-4 flex-wrap mb-6;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
.pos-product-items-pane {
    @apply w-full overflow-y-scroll flex flex-col gap-1 scrollbar-hide z-30 pos-style-transition;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
