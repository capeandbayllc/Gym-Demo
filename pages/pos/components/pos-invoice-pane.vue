<template>
    <div class="pos-invoice-pane">
        <div class="flex flex-row gap-5 justify-between">
            <div class="flex flex-row gap-4 w-full">
                <div class="group pos-member-image-container">
                    <PersonIcon class="pos-member-image" />
                    <div class="pos-sale-cancel-container">
                        <span class="pos-sale-cancel-text">Cancel Sale</span>
                    </div>
                </div>
                <div class="my-auto flex flex-col gap-1">
                    <h5 class="text-[1.2rem] tracking-wide font-light">
                        Some member
                    </h5>
                    <div>
                        <div class="text-[0.7rem]">Member since 1700</div>
                        <div class="text-[0.8rem]">Club #1234567890</div>
                    </div>
                    <span class="pos-view-member">View Profile</span>
                </div>
            </div>
            <div class="flex flex-col gap-3 justify-between w-[calc(50%-20px)]">
                <button class="pos-return-item-button !ml-auto">
                    Return an Item
                </button>
                <div
                    class="bg-[#0074C8]/[0.7] w-[90%] py-2 px-4 ml-auto rounded-md text-[2rem] text-right"
                >
                    $2.00
                </div>
            </div>
        </div>
        <div class="pos-invoice-items-table">
            <div class="flex flex-row justify-between border-b-[1px] px-6 py-2">
                <span class="w-[30%]">Item</span>
                <span class="w-[20%]">Quantity</span>
                <span class="w-[15%]">Taxable</span>
                <span class="w-[15%]">Price</span>
                <span class="w-[20%]">Total</span>
            </div>
        </div>
        <div
            class="flex flex-col text-[0.8rem] w-[40%] min-w-[300px] ml-auto gap-2"
        >
            <div class="flex flex-row justify-between w-full">
                <span>Item Total</span>
                <span>$1.50</span>
            </div>
            <div class="flex flex-row justify-between w-full">
                <span>Sub Total</span>
                <span>$1.50</span>
            </div>
            <div class="flex flex-row justify-between w-full">
                <span>Sales Tax</span>
                <span>$0.50</span>
            </div>
            <hr class="my-1" />
            <div class="flex flex-row justify-between w-full text-[1rem]">
                <span>Total</span>
                <span>$2.00</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { PersonIcon } from "~~/components/icons";
</script>

<style scoped>
.pos-invoice-pane {
    @apply w-[calc(50%-1.25rem)] flex flex-col gap-5;
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
    @apply w-full rounded-md border-[1px] bg-[#191919] text-[0.8rem] flex flex-col gap-2 min-h-[30vh] font-light tracking-wide;
}
</style>
