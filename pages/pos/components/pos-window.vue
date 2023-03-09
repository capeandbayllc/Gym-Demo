<template>
    <div class="pos-window-container">
        <div class="pos-window">
            <PosWindowHeader />
            <div class="flex flex-row gap-5 justify-between">
                <PosProductsPane
                    :cart="cart"
                    @add-product-item-to-cart="addProductToCart"
                />
                <PosInvoicePane
                    :cart="cart"
                    @remove-product-item-from-cart="removeProductFromCart"
                    @increment-product-quantity="incrementProductQuantity"
                    @decrement-product-quantity="decrementProductQuantity"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import PosWindowHeader from "./pos-window-header.vue";
import PosProductsPane from "./pos-products-pane.vue";
import PosInvoicePane from "./pos-invoice-pane.vue";

const cart = ref([]);

const addProductToCart = (item) => {
    cart.value.push({
        quantity: 1,
        ...item,
    });
};

const removeProductFromCart = (item) => {
    cart.value.splice(cart.value.indexOf(item), 1);
};

const incrementProductQuantity = (item) => {
    if (item.available > item.quantity) {
        item.quantity += 1;
    }
};

const decrementProductQuantity = (item) => {
    item.quantity -= 1;

    if (item.quantity <= 0) removeProductFromCart(item);
};
</script>

<style scoped>
.pos-window-container {
    @apply bg-[#191919] rounded-t-2xl h-[80vh] w-[80%] mx-auto;
}
.pos-window {
    @apply border-2 p-5 rounded-2xl h-[80vh] w-full mx-auto bg-gradient-to-b from-[#2f72c4]/[0.4] to-[#191919] flex flex-col gap-5;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
