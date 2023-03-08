<template>
    <div class="pos-window-container">
        <div class="pos-window">
            <PosWindowHeader />
            <div class="flex flex-row gap-5 justify-between">
                <PosProductsPane />
                <PosInvoicePane />
            </div>
        </div>
    </div>
</template>

<script setup>
import PosWindowHeader from "./pos-window-header.vue";
import PosProductsPane from "./pos-products-pane.vue";
import PosInvoicePane from "./pos-invoice-pane.vue";
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
