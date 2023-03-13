<template>
    <div class="pos-products-pane-container">
        <div
            class="flex flex-row-reverse lg:flex-row gap-5 w-full justify-between lg:w-auto"
        >
            <div>
                <input
                    placeholder="Search Products"
                    class="text-[0.8rem] w-60 rounded-md py-2 px-3 text-black"
                />
            </div>
            <select-box-radio
                :items="getCategoryFilterOptions()"
                :value="selectedCatgoryOption"
                :label="'Categories'"
                :secondary="true"
                :onChange="onSelectedCategoryChange"
                class="w-40 text-[0.9rem] my-auto"
            >
            </select-box-radio>
        </div>
        <div class="max-h-[20vh] lg:max-h-full h-full">
            <div
                class="w-full flex flex-col gap-1 scrollbar-hide pos-style-transition"
                :class="{
                    'h-full lg:h-[60vh]': showProducts,
                    'h-[0vh]': !showProducts,
                }"
            >
                <span
                    class="ml-auto text-[0.7rem] hover:text-secondary cursor-pointer pos-style-transition mr-1"
                    :class="{
                        'text-[0.7rem]': showProducts,
                        'text-[0rem]': !showProducts,
                    }"
                    @click="collapseProductItemsPane()"
                >
                    Collapse
                </span>
                <div class="bg-[#191919]/[0.9] h-full rounded-xl">
                    <PosProductItems
                        :items="selectedSubcategory.items"
                        :cart="cart"
                        @add-product-item-to-cart="addProductToCart"
                    />
                </div>
            </div>
            <div
                class="pos-products-pane"
                :class="{
                    'h-full lg:h-[60vh]': !showProducts,
                    'h-[0vh]': showProducts,
                }"
            >
                <PosProducts
                    :inventoryCategories="getFilteredCategories()"
                    :showProductItemsPane="showProductItemsPane"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import PosProducts from "./partials/pos-products.vue";
import PosProductItems from "./pos-product-items.vue";

const props = defineProps({
    cart: { type: Array },
    inventory: { type: Array },
    inventoryCategories: { type: Array },
});

const emit = defineEmits(["add-product-item-to-cart"]);

const selectedCatgoryOption = ref("0");
const showProducts = ref(false);
const selectedSubcategory = ref({
    items: [],
    categoryIndex: null,
    subcategoryIndex: null,
});

const collapseProductItemsPane = () => {
    selectedSubcategory.value = {
        items: [],
        categoryIndex: null,
        subcategoryIndex: null,
    };
    showProducts.value = false;
};

const showProductItemsPane = (categoryIndex, subcategoryIndex) => {
    categoryIndex = props.inventoryCategories.indexOf(
        props.inventoryCategories.find((inv) => inv.id === categoryIndex)
    );
    const category = props.inventoryCategories[categoryIndex].title;
    const subcategory =
        props.inventoryCategories[categoryIndex].subcategories[subcategoryIndex]
            .title;

    selectedSubcategory.value = {
        items: props.inventory.filter(
            (item) =>
                item.category === category && item.subcategory === subcategory
        ),
        categoryIndex,
        subcategoryIndex,
    };
    showProducts.value = true;
};

const addProductToCart = (itemIndex) => {
    if (
        selectedSubcategory.value.categoryIndex !== null &&
        selectedSubcategory.value.subcategoryIndex !== null
    ) {
        const category =
            props.inventoryCategories[selectedSubcategory.value.categoryIndex]
                .title;
        const subcategory =
            props.inventoryCategories[selectedSubcategory.value.categoryIndex]
                .subcategories[selectedSubcategory.value.subcategoryIndex]
                .title;
        const item = props.inventory.filter(
            (item) =>
                item.category === category && item.subcategory === subcategory
        )[itemIndex];

        if (
            item.available > 0 &&
            props.cart.find((product) => {
                return product.id === item.id;
            }) === undefined
        ) {
            emit("add-product-item-to-cart", item);
        }
    }
};

const onSelectedCategoryChange = (value) => {
    selectedCatgoryOption.value = value;
};

const getCategoryFilterOptions = () => {
    let options = [{ value: "0", label: "View All" }];

    for (let i in props.inventoryCategories) {
        options.push({
            value: props.inventoryCategories[i].id,
            label: props.inventoryCategories[i].title,
        });
    }

    return options;
};

const getFilteredCategories = () => {
    if (selectedCatgoryOption.value === "0") {
        return props.inventoryCategories;
    }

    return [
        props.inventoryCategories.find(
            (inv) => inv.id === selectedCatgoryOption.value
        ),
    ];
};
</script>

<style scoped>
.pos-products-pane-container {
    @apply lg:w-[calc(50%-1.25rem)] flex flex-col gap-5;
}
.pos-products-pane {
    @apply overflow-y-scroll relative pos-style-transition;
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
