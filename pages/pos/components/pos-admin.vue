<template>
    <div
        class="border border-secondary bg-[#191919]/[0.9] w-[70vw] p-5 rounded-lg tracking-wide font-light text-[0.9rem]"
    >
        <div
            class="border border-secondary bg-gradient-to-b from-[#2f72c4]/[0.4] to-[#191919] px-10 py-5 rounded-lg flex flex-col gap-5"
        >
            <div class="flex flex-row gap-5 justify-between">
                <h3 class="text-[1.5rem]">
                    Admin: <span class="text-secondary">Discounts</span>
                </h3>
                <div class="flex flex-row gap-5">
                    <select-box-radio
                        :items="getCategoryFilterOptions()"
                        :value="selectedCatgoryOption"
                        :label="'Categories'"
                        :secondary="true"
                        :onChange="onSelectedCategoryChange"
                        class="w-40 text-[0.9rem] my-auto"
                    >
                    </select-box-radio>
                    <input
                        ref="globalSearchInput"
                        type="text"
                        placeholder="Search"
                        class="text-[0.8rem] w-60 rounded-md px-3 text-black py-2 pos-style-transition"
                    />
                </div>
            </div>
            <div class="flex flex-row gap-8">
                <div class="flex flex-col w-[calc(89%-1rem)]">
                    <div class="flex flex-row justify-between px-5 mb-1">
                        <span class="w-[30%]">Description</span>
                        <span class="w-[20%] text-center">Discount Type</span>
                        <span class="w-[20%] text-center">Amount/Rate</span>
                        <span class="w-[30%]"></span>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div
                            class="flex flex-row justify-between bg-[#191919]/[0.9] border rounded-md py-3 px-5"
                            v-for="discount in discounts"
                        >
                            <span class="w-[30%] my-auto">
                                {{ discount.description }}
                            </span>
                            <span class="w-[20%] my-auto text-center">
                                {{ discount.type }}
                            </span>
                            <span class="w-[20%] my-auto text-center">
                                {{ discount.amonut }}
                            </span>
                            <span
                                class="w-[30%] my-auto flex flex-row gap-4 justify-end"
                            >
                                <span
                                    class="text-[#ff0000] hover:text-red-400 pos-style-transition cursor-pointer my-auto"
                                >
                                    Remove
                                </span>
                                <button class="pos-add-button">Edit</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="w-[calc(11%-1rem)] flex flex-col justify-between">
                    <div class="w-full pb-[100%] relative">
                        <button
                            class="absolute bg-[#191919]/[0.9] h-full w-full border rounded-lg top-0 left-0 flex flex-col justify-center"
                        >
                            <PosAdminDashboardIcon
                                class="relative w-[40%] h-auto mx-auto"
                            />
                            <span class="text-[0.6rem] mx-auto mt-1">
                                Dashboard
                            </span>
                        </button>
                    </div>
                    <div class="w-full pb-[100%] relative">
                        <button
                            class="absolute bg-[#191919]/[0.9] h-full w-full border rounded-lg top-0 left-0 flex flex-col justify-center"
                        >
                            <InventoryIcon
                                class="relative w-[40%] h-auto mx-auto"
                            />
                            <span class="text-[0.6rem] mx-auto mt-1">
                                Inventory
                            </span>
                        </button>
                    </div>
                    <div class="w-full pb-[100%] relative">
                        <button
                            class="absolute bg-[#191919]/[0.9] h-full w-full border rounded-lg top-0 left-0 flex flex-col justify-center"
                        >
                            <SettingsAndConfigIcon
                                class="relative w-[40%] h-auto mx-auto"
                            />
                            <span class="text-[0.6rem] mx-auto mt-1">
                                Settings & Configuration
                            </span>
                        </button>
                    </div>
                    <div class="w-full pb-[100%] relative">
                        <button
                            class="absolute bg-secondary/[0.5] h-full w-full border-2 rounded-lg border-secondary top-0 left-0 flex flex-col justify-center"
                        >
                            <DiscountIcon
                                class="relative w-[40%] h-auto mx-auto"
                            />
                            <span class="text-[0.6rem] mx-auto mt-1">
                                Discounts
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    DiscountIcon,
    InventoryIcon,
    PosAdminDashboardIcon,
    SettingsAndConfigIcon,
} from "~~/components/icons";

const selectedCatgoryOption = ref("0");
const onSelectedCategoryChange = (value) => {
    selectedCatgoryOption.value = value;
};

const discounts = ref([
    { description: "$10 Off Promo", type: "Fixed", amonut: "$10.00" },
    { description: "September Promo", type: "Fixed", amonut: "$15.00" },
    { description: "$4.00 Off", type: "Fixed", amonut: "$4.00" },
    { description: "10% Off", type: "Percent", amonut: "10.00%" },
    { description: "50% Off", type: "Percent", amonut: "50.00%" },
    { description: "100% Off", type: "Percent", amonut: "100.00%" },
]);

const getCategoryFilterOptions = () => {
    let options = [{ value: "0", label: "View All" }];

    // for (let i in props.inventoryCategories) {
    //     options.push({
    //         value: props.inventoryCategories[i].id,
    //         label: props.inventoryCategories[i].title,
    //     });
    // }

    return options;
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
