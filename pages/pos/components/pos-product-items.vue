<template>
    <div
        class="flex flex-col gap-5 h-full p-8 font-light tracking-wider overflow-y-scroll scrollbar-hide"
    >
        <div
            class="border-2 border-secondary flex flex-row gap-5 justify-between p-5"
            v-for="item in items"
        >
            <div class="flex flex-row gap-5 w-[55%]">
                <div>
                    <img class="w-[64px] h-auto" :src="item.image" />
                </div>
                <div class="flex flex-col my-auto">
                    <h4 class="mb-1">{{ item.name }}</h4>
                    <span class="text-[0.7rem]">Price: ${{ item.price }}</span>
                    <span class="text-[0.7rem]"
                        >Category: {{ item.category }}</span
                    >
                </div>
            </div>
            <div
                class="w-[64px] h-[64px] bg-secondary flex flex-col justify-center"
                :class="{
                    'bg-secondary': item.quantity > 0,
                    'bg-[#888]': item.quantity === 0,
                }"
            >
                <span class="text-[#ccc] tracking-tight text-[0.5rem] mx-auto"
                    ># Available</span
                >
                <span class="text-[1.7rem] mx-auto">{{ item.quantity }}</span>
            </div>
            <button class="item-select-button" v-if="item.quantity">
                Select
            </button>
            <button class="item-select-button" v-else></button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: [{}],
    },
});
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
.item-select-button {
    @apply border-[1px] rounded my-auto px-2 py-1 text-[0.9rem] hover:bg-secondary pos-style-transition w-[59px];
}
</style>
