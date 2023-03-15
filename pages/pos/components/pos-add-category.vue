<template>
    <div class="pos-add-category-modal">
        <h3 class="text-[1.2rem]">Add New Category</h3>
        <div class="flex flex-col gap-5">
            <div class="flex flex-row gap-5 justify-between w-full">
                <PosInput
                    :name="'Category Name'"
                    :required="true"
                    width="w-[calc(50%-1.25rem/2)]"
                >
                    <input
                        class="pos-input"
                        placeholder="Category Name"
                        name="name"
                        id="name"
                        type="text"
                        v-model="category.name"
                    />
                </PosInput>
                <PosInput
                    :name="'Category Title'"
                    :required="true"
                    width="w-[calc(50%-1.25rem/2)]"
                >
                    <input
                        class="pos-input"
                        placeholder="Category Title"
                        name="category_title"
                        id="category_title"
                        type="text"
                        list="category_titles"
                        v-model="category.title"
                    />
                    <datalist id="category_titles">
                        <option
                            v-for="category in getProductCategories()"
                            :value="category"
                        >
                            {{ category }}
                        </option>
                    </datalist>
                </PosInput>
            </div>
        </div>
        <div class="flex flex-col gap-5 bg-[#292929] rounded-lg p-5">
            <div class="flex flex-row justify-between">
                <span class="my-auto">Add Products to Category:</span>
                <div class="flex flex-row gap-5">
                    <select-box-radio
                        :items="categoriesFilter"
                        :value="'0'"
                        :label="'Categories'"
                        :secondary="true"
                        :onChange="onSelectedCategoryChange"
                        class="w-40 text-[0.9rem] my-auto"
                    >
                    </select-box-radio>
                    <input class="pos-input" placeholder="Search Product" />
                </div>
            </div>
            <div
                class="flex flex-row flex-wrap gap-4 !text-[0.8rem] max-h-[246px] overflow-y-scroll pr-4 justify-center"
            >
                <div
                    class="pos-category-add-product-item group"
                    v-for="item in inventory"
                    @click="selectItem(item)"
                >
                    <div
                        class="absolute rounded-lg bg-secondary/[0.4] top-0 left-0 w-full h-0 group-hover:h-[calc(100%-22px)] pos-style-transition flex flex-col justify-center"
                        :class="{
                            'h-0': !selectedItems.includes(item),
                            'h-[calc(100%-22px)] bg-secondary/[0.7]':
                                selectedItems.includes(item),
                        }"
                    >
                        <CheckInIcon
                            class="mx-auto h-auto"
                            :class="{
                                'w-[60%]': selectedItems.includes(item),
                                hidden: !selectedItems.includes(item),
                            }"
                        />
                    </div>
                    <div class="pos-cat-add-product-img">
                        <img :src="placeholderImage" class="rounded-md" />
                    </div>
                    <span class="line-clamp-1 text-[0.6rem]">{{
                        item.name
                    }}</span>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-end gap-5">
            <span
                class="text-[#aaa] hover:text-secondary pos-style-transition cursor-pointer my-auto"
                @click="resetInputState"
            >
                Cancel
            </span>
            <button class="pos-add-button" @click="addCategoryToList">
                Add
            </button>
        </div>
    </div>
</template>

<script setup>
import PosInput from "./pos-input.vue";
import { CheckInIcon, StackedBoxes } from "~~/components/icons";

const placeholderImage =
    "https://www.kurin.com/wp-content/uploads/placeholder-square-768x768.jpg";
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

const emit = defineEmits(["add-category-to-list", "cancel-category-add"]);
const props = defineProps({
    inventoryCategories: {
        type: Array,
    },
    inventory: {
        type: Array,
    },
});
const selectedCatgoryOption = ref(null);
const selectedItems = ref([]);
const category = ref({
    name: null,
    title: null,
});

const getProductCategories = () => {
    let categories = [];

    props.inventoryCategories.forEach((cat) => {
        categories.push(cat.title);
    });

    return categories;
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

const onSelectedCategoryChange = (value) => {
    selectedCatgoryOption.value = value;
};

const selectItem = (item) => {
    if (!selectedItems.value.includes(item)) {
        selectedItems.value.push(item);
    } else {
        selectedItems.value.splice(selectedItems.value.indexOf(item), 1);
    }
};

const addCategoryToList = () => {
    emit(
        "add-category-to-list",
        {
            id: category.value.title,
            title: category.value.title,
        },
        {
            title: category.value.name,
            icon: StackedBoxes,
            items: selectedItems.value,
        }
    );
};

const resetInputState = () => {
    category.value = {
        name: null,
        title: null,
    };
    selectedItems.value = [];
    emit("cancel-category-add");
};
</script>

<style scoped>
.pos-add-category-modal {
    @apply lg:w-[50vw] p-5 px-10 pb-10 bg-[#191919]/[0.9] text-[0.9rem] flex flex-col gap-5 border-2 border-secondary rounded-2xl tracking-wide font-light;
}

.pos-category-add-product-item {
    @apply flex flex-col gap-2 text-center w-[90px] cursor-pointer relative;
}

.pos-cat-add-product-img {
    @apply w-full h-auto rounded-lg border-[3px] border-secondary pos-style-transition;
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
