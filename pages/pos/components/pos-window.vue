<template>
    <div class="pos-window-container">
        <div class="pos-window">
            <PosWindowHeader />
            <div
                class="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between"
            >
                <PosProductsPane
                    :cart="cart"
                    @add-product-item-to-cart="addProductToCart"
                />
                <PosInvoicePane
                    :cart="cart"
                    :purchaser="purchaser"
                    @remove-product-item-from-cart="removeProductFromCart"
                    @increment-product-quantity="incrementProductQuantity"
                    @decrement-product-quantity="decrementProductQuantity"
                    @cancel-sale="cancelSale"
                />
            </div>
        </div>
    </div>
    <PosFooter />
</template>

<script setup>
import PosWindowHeader from "./pos-window-header.vue";
import PosProductsPane from "./pos-products-pane.vue";
import PosInvoicePane from "./pos-invoice-pane.vue";
import PosFooter from "./pos-footer.vue";

const props = defineProps({
    member: {
        type: Object,
        // default: null,
        default: {
            name: "Member Name",
        },
    },
});

const cart = ref([]);
const purchaser = ref(props.member);

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

const cancelSale = () => {
    cart.value = [];
    purchaser.value = null;
};
</script>

<style scoped>
.pos-window-container {
    @apply bg-[#191919] rounded-t-2xl h-[85vh] lg:h-[80vh] w-[80%] mx-auto;
}
.pos-window {
    @apply border-2 p-5 rounded-2xl h-[85vh] lg:h-[80vh] w-full mx-auto bg-gradient-to-b from-[#2f72c4]/[0.4] to-[#191919] flex flex-col gap-5;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
