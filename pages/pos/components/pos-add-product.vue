<template>
    <div class="pos-add-product-modal">
        <h3 class="text-[1.2rem]">Add New Product</h3>
        <div class="w-[65%] mx-auto rounded-xl">
            <FileManager :hideSaveOptions="true" :action-type="actionType" />
        </div>
        <div class="max-h-[40vh] overflow-y-scroll flex flex-col gap-5 pr-2">
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput :name="'Product Name'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Product Name"
                        name="name"
                        id="name"
                        type="text"
                    />
                </PosInput>
                <PosInput :name="'Inventory Nunber'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Inventory Nunber"
                        name="inventory_number"
                        id="inventory_number"
                        type="text"
                    />
                </PosInput>
            </div>
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput :name="'Add to Category'" :required="true">
                    <select-box-radio
                        :items="categories"
                        :value="selectedCatgoryOption"
                        :label="'Select Category'"
                        :secondary="false"
                        :onChange="onSelectedCategoryChange"
                        :className="'w-full'"
                        :formInput="true"
                    >
                    </select-box-radio>
                </PosInput>
                <PosInput :name="'Product Price'" :required="true">
                    <input
                        class="pos-input"
                        placeholder="Product Price"
                        name="price"
                        id="price"
                        type="number"
                    />
                </PosInput>
            </div>
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput :name="'Info'" :required="true">
                    <select-box-radio
                        :items="categories"
                        :value="selectedCatgoryOption"
                        :label="'Select Category'"
                        :secondary="false"
                        :onChange="onSelectedCategoryChange"
                        :className="'w-full'"
                        :formInput="true"
                    >
                    </select-box-radio>
                </PosInput>
            </div>
        </div>
    </div>
</template>

<script setup>
import FileManager from "~~/pages/file-browser/components/file-manager.vue";
import PosInput from "./pos-input.vue";

const actionType = ref("upload");

const selectedCatgoryOption = ref(null);
const categories = [
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

const onSelectedCategoryChange = (value) => {
    selectedCatgoryOption.value = value;
};
</script>

<style scoped>
.pos-add-product-modal {
    @apply lg:w-[50vw] p-5 pb-10 bg-[#191919]/[0.9] flex flex-col gap-5 border-2 border-secondary rounded-2xl;
}

.pos-input {
    @apply rounded px-2 font-light tracking-wide py-1.5 text-black w-full;
}
</style>
