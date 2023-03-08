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
        <div class="pos-products-pane">
            <div class="" v-for="category in inventoryCategories">
                <h3 class="text-[1.2rem] my-3 font-light tracking-wider">
                    {{ category.title }}
                </h3>
                <div class="pos-product-category">
                    <PosSubcategory
                        v-for="subcategory in category.subcategories"
                        :title="subcategory.title"
                        :icon="subcategory.icon"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PosSubcategory from "./pos-subcategory.vue";
import {
    ShortSleeveShirtIcon,
    LongSleeveShirtIcon,
    AnkleSocksIcon,
    HatsIcon,
    TankTopIcon,
    GlovesIcon,
    WaterBottleIcon,
    SodaIcon,
    SportsDrinkIcon,
    UpgradeMembershipIcon,
    AddPTIcon,
} from "~~/components/icons";

const inventoryCategories = [
    {
        title: "Apparel",
        subcategories: [
            {
                title: "Short Sleeve T-Shirt",
                icon: ShortSleeveShirtIcon,
                items: [],
            },
            {
                title: "Long Sleeve T-Shirt",
                icon: LongSleeveShirtIcon,
                items: [],
            },
            {
                title: "Ankle Socks",
                icon: AnkleSocksIcon,
                items: [],
            },
            {
                title: "Hats",
                icon: HatsIcon,
                items: [],
            },
            {
                title: "Tank Tops",
                icon: TankTopIcon,
                items: [],
            },
            {
                title: "Gloves",
                icon: GlovesIcon,
                items: [],
            },
        ],
    },
    {
        title: "Beverage",
        subcategories: [
            {
                title: "Water",
                icon: WaterBottleIcon,
                items: [],
            },
            {
                title: "Soda",
                icon: SodaIcon,
                items: [],
            },
            {
                title: "Caffeine Free Soda",
                icon: SodaIcon,
                items: [],
            },
            {
                title: "Sports Drink",
                icon: SportsDrinkIcon,
                items: [],
            },
        ],
    },
    {
        title: "Membership",
        subcategories: [
            {
                title: "Upgrade Membership",
                icon: UpgradeMembershipIcon,
                items: [],
            },
            {
                title: "Add PT",
                icon: AddPTIcon,
                items: [],
            },
        ],
    },
];
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
    @apply overflow-y-scroll h-[60vh];
}
.pos-product-category {
    @apply w-full flex flex-row gap-4 flex-wrap mb-6;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
