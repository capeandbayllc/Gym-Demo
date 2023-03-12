<template>
    <div class="pos-invoice-pane">
        <div class="flex flex-row gap-5 justify-between">
            <div class="flex flex-row gap-4 w-full min-h-[120px]">
                <div
                    class="group pos-member-image-container"
                    v-if="purchaser"
                    @click="cancelSale"
                >
                    <PersonIcon
                        class="pos-member-image"
                        v-if="
                            purchaser.profile_photo_path === null ||
                            purchaser.profile_photo_path === ''
                        "
                    />
                    <img
                        v-else
                        class="pos-member-image"
                        :src="purchaser.profile_photo_path"
                    />
                    <div class="pos-sale-cancel-container">
                        <span class="pos-sale-cancel-text">Cancel Sale</span>
                    </div>
                </div>
                <div class="my-auto flex flex-col gap-1" v-if="purchaser">
                    <h5 class="text-[1.2rem] tracking-wide font-light">
                        {{ purchaser.first_name }} {{ purchaser.last_name }}
                    </h5>
                    <div>
                        <div class="text-[0.7rem]">
                            Member since
                            {{ new Date(purchaser.created_at).getFullYear() }}
                        </div>
                        <div class="text-[0.7rem]">
                            {{ purchaser.homeLocation.name }}
                        </div>
                    </div>
                    <span class="pos-view-member">View Profile</span>
                </div>
            </div>
            <div class="flex flex-col gap-3 justify-between w-[calc(50%-20px)]">
                <button
                    class="pos-return-item-button !ml-auto"
                    v-if="purchaser"
                >
                    Return an Item
                </button>
                <div
                    class="bg-[#0074C8]/[0.7] w-[90%] py-2 px-4 ml-auto mt-auto rounded-md text-[1.5rem] xl:text-[2rem] text-right"
                >
                    ${{ calculateCartTotal().toFixed(2) }}
                </div>
            </div>
        </div>
        <div class="pos-invoice-items-table">
            <div class="flex flex-row justify-between border-b-[1px] px-6 py-2">
                <span class="w-[30%]">Item</span>
                <span class="w-[20%] text-center">Quantity</span>
                <span class="w-[15%] text-center">Taxable</span>
                <span class="w-[15%] text-center">Price</span>
                <span class="w-[15%]">Total</span>
                <span class="w-[5%]"></span>
            </div>
            <div
                class="flex flex-col h-[15vh] lg:h-[25vh] overflow-scroll scrollbar-hide"
            >
                <div
                    v-for="(item, itemIndex) in cart"
                    class="flex flex-row justify-between px-6 py-1 text-[0.8rem]"
                    :class="{
                        'bg-[#292929]': itemIndex % 2 === 1,
                    }"
                >
                    <span class="w-[30%]">
                        {{ item.name }}
                    </span>
                    <span class="w-[20%] flex flex-row gap-3 justify-center">
                        <span class="my-auto">{{ item.quantity }}</span>
                        <div class="flex flex-row gap-1">
                            <PlusIcon
                                class="pos-ivoice-items-quantity-button"
                                @click="incrementProductQuantity(item)"
                            />
                            <MinusIcon
                                class="pos-ivoice-items-quantity-button"
                                @click="decrementProductQuantity(item)"
                            />
                        </div>
                    </span>
                    <span class="w-[15%] text-center">
                        {{ item.tax }}
                    </span>
                    <span class="w-[15%] text-center">
                        {{ item.price }}
                    </span>
                    <span class="w-[15%]">
                        {{
                            (
                                (parseFloat(item.price) +
                                    parseFloat(item.tax)) *
                                item.quantity
                            ).toFixed(2)
                        }}
                    </span>
                    <span class="w-[5%]">
                        <span
                            class="flex flex-row w-5 h-5 rounded-full bg-secondary border-secondary justify-center"
                        >
                            <span class="mx-auto">%</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col text-[0.8rem] w-[40%] min-w-[300px] ml-auto gap-2"
            v-if="cart.length"
        >
            <div class="flex flex-row justify-between w-full">
                <span>Item Total</span>
                <span>${{ calculateCartItemTotal().toFixed(2) }}</span>
            </div>
            <div class="flex flex-row justify-between w-full">
                <span>Sub Total</span>
                <span>${{ calculateCartItemTotal().toFixed(2) }}</span>
            </div>
            <div class="flex flex-row justify-between w-full">
                <span>Sales Tax</span>
                <span>${{ calculateCartTaxTotal().toFixed(2) }}</span>
            </div>
            <hr class="my-1" />
            <div class="flex flex-row justify-between w-full text-[1rem]">
                <span>Total</span>
                <span>${{ calculateCartTotal().toFixed(2) }}</span>
            </div>
        </div>
        <div
            class="mt-auto flex flex-row justify-end gap-5 text-[0.9rem] tracking-wide font-light"
            v-if="cart.length"
        >
            <button
                class="border px-4 py-1 rounded-md hover:bg-secondary hover:border-[#fff]/[0] pos-style-transition"
                @click="() => emit('add-payment-method')"
            >
                Payment Methods
            </button>
            <button
                class="bg-[#01CA00] px-4 py-1 rounded-md hover:bg-secondary pos-style-transition"
                @click="makePayment"
            >
                Pay
            </button>
        </div>
    </div>
</template>

<script setup>
import { PersonIcon, PlusIcon, MinusIcon } from "~~/components/icons";
import {
    cartItemTotal,
    cartTaxTotal,
    cartTotal,
} from "../helpers/pos-cart-functions";

const props = defineProps({
    cart: {
        type: Array,
    },
    purchaser: {
        type: Object,
    },
});

const emit = defineEmits([
    "increment-product-quantity",
    "decrement-product-quantity",
    "cancel-sale",
    "make-pos-invoice-payment",
    "add-payment-method",
]);

const calculateCartTotal = () => cartTotal(props.cart);

const calculateCartTaxTotal = () => cartTaxTotal(props.cart);

const calculateCartItemTotal = () => cartItemTotal(props.cart);

const incrementProductQuantity = (item) => {
    emit("increment-product-quantity", item);
};

const decrementProductQuantity = (item) => {
    emit("decrement-product-quantity", item);
};

const cancelSale = () => {
    emit("cancel-sale");
};

const makePayment = () => {
    emit("make-pos-invoice-payment");
};
</script>

<style scoped>
.pos-invoice-pane {
    @apply lg:w-[calc(50%-1.25rem)] flex flex-col gap-5;
}

.pos-member-image-container {
    @apply relative p-2 border-4 rounded-full w-[120px] h-[120px] cursor-pointer hover:border-red-800 pos-style-transition;
}

.pos-member-image {
    @apply w-[calc(120px-1rem-8px)] h-[calc(120px-1rem-8px)] rounded-full bg-[#fff]/[0.3] cursor-pointer;
}

.pos-sale-cancel-container {
    @apply absolute top-[8px] left-[8px] rounded-full w-[calc(120px-8px-1rem)] h-[calc(120px-8px-1rem)] bg-[#ff0000]/[0] flex flex-col justify-center group-hover:bg-[#ff0000]/[0.7] cursor-pointer pos-style-transition;
}

.pos-sale-cancel-text {
    @apply w-[50%] text-center mx-auto opacity-0 group-hover:opacity-100 cursor-pointer pos-style-transition tracking-wider font-light;
}

.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}

.pos-view-member {
    @apply text-[0.9rem] text-secondary cursor-pointer hover:text-white pos-style-transition;
}

.pos-return-item-button {
    @apply bg-[#191919]/[0.5] py-2 px-3 text-[0.8rem] rounded-md border-[1px] border-[#aaa] hover:bg-[#fff]/[0.8] hover:border-[#fff] hover:text-secondary pos-style-transition;
}

.pos-invoice-items-table {
    @apply w-full rounded-md border-[1px] bg-[#191919]/[0.9] text-[0.8rem] flex flex-col gap-2 max-h-[15vh] lg:min-h-[25vh] font-light tracking-wide overflow-hidden;
}

.pos-ivoice-items-quantity-button {
    @apply fill-white w-[1rem] h-[1rem] rounded-full border-[1px] my-auto p-[1.5px] hover:fill-secondary hover:border-secondary pos-style-transition cursor-pointer;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
