<template>
    <div class="pos-add-product-modal">
        <h3 class="text-[1.2rem]">Add New Product</h3>
        <div class="w-[60%] mx-auto rounded-xl flex flex-col">
            <div class="text-[0.8rem] text-center">Upload Product Image:</div>
            <FileManager :hideSaveOptions="true" :action-type="actionType" />
        </div>
        <div class="max-h-[40vh] overflow-y-scroll flex flex-col gap-5 pr-5">
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput :name="'Product Name'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Product Name"
                        name="name"
                        id="name"
                        type="text"
                        v-model="product.name"
                        @keydown="resetFormErrorState"
                    />
                </PosInput>
                <PosInput :name="'Inventory Number'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Inventory Number"
                        name="inventory_number"
                        id="inventory_number"
                        type="text"
                        v-model="product.id"
                        @keydown="resetFormErrorState"
                    />
                </PosInput>
            </div>
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput :name="'Select Category'" :required="true">
                    <select-box-radio
                        :items="getProductSubCategories()"
                        :value="product.category"
                        :label="'Select Category'"
                        :secondary="false"
                        :onChange="onSelectedSubcategoryChange"
                        :className="'w-full'"
                        :formInput="true"
                    >
                    </select-box-radio>
                </PosInput>
                <PosInput :name="'Available'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Available"
                        name="price"
                        id="price"
                        type="number"
                        v-model="product.available"
                        @keydown="resetFormErrorState"
                    />
                </PosInput>
            </div>
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput :name="'Product Price ($)'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Product Price ($)"
                        name="price"
                        id="price"
                        type="number"
                        v-model="product.price"
                        @keydown="resetFormErrorState"
                    />
                </PosInput>
                <PosInput :name="'Tax Rate (%)'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Tax Rate (%)"
                        name="price"
                        id="price"
                        type="number"
                        v-model="product.tax"
                        @keydown="resetFormErrorState"
                    />
                </PosInput>
            </div>
            <div class="flex flex-row gap-5 justify-between w-full"></div>
        </div>
        <div
            class="text-center text-red-500 flex flex-col justify-center overflow-hidden pos-style-transition"
            :class="{
                'h-0': !formIncomplete,
                'h-[2rem]': formIncomplete,
            }"
        >
            INCOMPLETE PRODUCT INFO!!!
        </div>
        <div class="flex flex-row justify-end gap-5 pr-7">
            <span
                class="text-[#aaa] hover:text-secondary pos-style-transition cursor-pointer my-auto"
                @click="resetInputState"
            >
                Cancel
            </span>
            <button class="pos-add-button" @click="addProduct">Add</button>
        </div>
    </div>
</template>

<script setup>
import FileManager from "~~/pages/file-browser/components/file-manager.vue";
import { inventoryCategories } from "../helpers/pos-items";
import PosInput from "./pos-input.vue";

const emit = defineEmits(["add-product-to-list", "cancel-product-add"]);
const props = defineProps({
    inventoryCategories: {
        type: Array,
    },
});

const actionType = ref("upload");
const formIncomplete = ref(false);
const product = ref({
    id: null,
    name: null,
    price: null,
    image: "https://www.kurin.com/wp-content/uploads/placeholder-square-768x768.jpg",
    available: null,
    tax: null,
    category: null,
    subcategory: null,
});

const onSelectedSubcategoryChange = (value) => {
    resetFormErrorState();

    for (let i in inventoryCategories) {
        for (let j in inventoryCategories[i].subcategories) {
            if (inventoryCategories[i].subcategories[j].title === value) {
                product.value.category = inventoryCategories[i].title;
                break;
            }
        }
    }

    product.value.subcategory = value;
};

const getProductSubCategories = () => {
    let subcategories = [];

    inventoryCategories.forEach((cat) => {
        cat.subcategories.forEach((subcat) => {
            subcategories.push({
                value: subcat.title,
                label: subcat.title,
            });
        });
    });

    return subcategories;
};

const resetFormErrorState = () => {
    formIncomplete.value = false;
};

const addProduct = () => {
    let incomplete = false;

    for (let i in product.value) {
        incomplete |= product.value[i] === null || product.value[i] === "";
    }

    if (incomplete) {
        formIncomplete.value = true;
    } else {
        emit("add-product-to-list", { ...product.value });
        resetInputState();
    }
};

const resetInputState = () => {
    product.value = {
        id: null,
        name: null,
        price: null,
        image: "https://www.kurin.com/wp-content/uploads/placeholder-square-768x768.jpg",
        available: null,
        tax: null,
        category: null,
        subcategory: null,
    };
    emit("cancel-product-add");
};
</script>

<style scoped>
.pos-add-product-modal {
    @apply lg:w-[45vw] p-5 px-10 pb-10 bg-[#191919]/[0.9] flex flex-col gap-5 border-2 border-secondary rounded-2xl tracking-wide font-light text-[0.9rem];
}

.pos-input {
    @apply rounded px-2 font-light tracking-wide py-1.5 text-black w-full;
}

.pos-add-button {
    @apply px-3 py-0.5 bg-secondary border-secondary/[0] border-2 rounded-md hover:border-secondary/[1] hover:bg-transparent pos-style-transition;
}

.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
