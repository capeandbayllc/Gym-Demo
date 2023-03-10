<template>
    <div class="items-container">
        <div
            class="item-container group"
            v-for="(item, itemIndex) in items"
            :class="{
                'cursor-pointer': item.available > 0,
                'cursor-not-allowed': item.available === 0,
            }"
            @click="addProductItemToCart(itemIndex)"
        >
            <div class="flex flex-row gap-5 w-[55%]">
                <div>
                    <img class="w-[64px] h-auto" :src="item.image" />
                </div>
                <div class="flex flex-col my-auto">
                    <h4 class="mb-1 line-clamp-1">{{ item.name }}</h4>
                    <span class="text-[0.7rem] line-clamp-1"
                        >Price: ${{ item.price }}</span
                    >
                    <span class="text-[0.7rem] line-clamp-1"
                        >Category: {{ item.category }}</span
                    >
                </div>
            </div>
            <div
                class="w-[64px] h-[64px] bg-secondary flex flex-col justify-center rounded-lg"
                :class="{
                    'bg-secondary': item.available > 0,
                    '!bg-[#888]': item.available === 0,
                }"
            >
                <span class="text-[#ccc] tracking-tight text-[0.5rem] mx-auto"
                    ># Available</span
                >
                <span class="text-[1.7rem] mx-auto">{{ item.available }}</span>
            </div>
            <button class="item-select-button" v-if="item.available">
                Select
            </button>
            <div class="w-[59px]" v-else></div>
            <div class="item-select-slider" v-if="item.available">
                <span class="mx-auto">Add</span>
                <span class="mx-auto">to Cart</span>
            </div>
            <div class="item-selected-slider" v-if="isItemInCart(item)">
                <CartIcon class="mx-auto w-[30%] h-[30%]" />
                <span class="mx-auto">In Cart</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CartIcon } from "~~/components/icons";

const props = defineProps({
    items: {
        type: Array,
        default: [{}],
    },
    cart: {
        type: Array,
    },
});

const emit = defineEmits(["add-product-item-to-cart"]);
const addProductItemToCart = (itemIndex) => {
    if (props.items[itemIndex].available > 0) {
        emit("add-product-item-to-cart", itemIndex);
    }
};

const isItemInCart = (item) =>
    props.cart.find((cartItems) => cartItems.id === item.id) !== undefined;
</script>

<style scoped>
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.items-container {
    @apply flex flex-col gap-5 h-full p-8 font-light tracking-wider overflow-y-scroll scrollbar-hide;
}
.item-container {
    @apply border-2 border-secondary flex flex-row gap-5 justify-between p-5 relative bg-[#292929] rounded-lg;
}

.item-select-button {
    @apply border-[1px] rounded my-auto px-2 py-1 text-[0.9rem] hover:bg-secondary pos-style-transition w-[59px];
}

.item-select-slider {
    @apply absolute top-0 right-0 bg-secondary h-full w-[0%] text-[0%] overflow-hidden flex flex-col justify-center group-hover:w-[20%] group-hover:text-[80%] pos-style-transition;
}

.item-selected-slider {
    @apply absolute top-0 right-0 bg-secondary h-full w-[20%] text-[80%] z-20 pos-style-transition flex flex-col justify-center;
}
</style>
