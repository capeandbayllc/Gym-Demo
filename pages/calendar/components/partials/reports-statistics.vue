<template>
    <section>
        <!-- widget label / mod -->
        <div class="flex justify-between mb-3">
            <span class="text-[1.2rem] font-semibold">Reports</span>
            <button class="w-[0.3125rem] fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M48 464a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm0-160a48 48 0 1 1 0-96 48 48 0 1 1 0 96zM0 96a48 48 0 1 1 96 0A48 48 0 1 1 0 96z"
                    />
                </svg>
            </button>
        </div>
        <div class="border-secondary border-2 rounded-md bg-neutral p-3">
            <span class="capitalize border-b block text-[0.9rem]">{{
                title
            }}</span>
            <span class="block uppercase text-[#6fb3e4] mb-2 text-[0.7rem]">
                {{ subtitle }}
            </span>
            <div
                class="grid grid-cols-[1rem_repeat(6,_1fr)] grid-rows-[repeat(6,_1fr)] h-48"
            >
                <!-- row label -->
                <span class="row-[1] col-[1] self-end text-right text-[0.7rem]"
                    >40</span
                >
                <span class="row-[2] col-[1] self-end text-right text-[0.7rem]"
                    >30</span
                >
                <span class="row-[3] col-[1] self-end text-right text-[0.7rem]"
                    >20</span
                >
                <span class="row-[4] col-[1] self-end text-right text-[0.7rem]"
                    >10</span
                >
                <span class="row-[5] col-[1] self-end text-right text-[0.7rem]"
                    >0</span
                >

                <!-- col label -->
                <span class="row-[6] col-[2] justify-self-center text-[0.7rem]"
                    >0</span
                >
                <span class="row-[6] col-[3] justify-self-center text-[0.7rem]"
                    >10</span
                >
                <span class="row-[6] col-[4] justify-self-center text-[0.7rem]"
                    >20</span
                >
                <span class="row-[6] col-[5] justify-self-center text-[0.7rem]"
                    >30</span
                >
                <span class="row-[6] col-[6] justify-self-center text-[0.7rem]"
                    >40</span
                >
                <span class="row-[6] col-[7] justify-self-center text-[0.7rem]"
                    >50</span
                >

                <!-- data plots -->
                <span
                    class="plotted-bar w-2 rounded-full justify-self-center h-full row-start-2 row-end-6 col-[2] bg-secondary"
                ></span>
                <span
                    class="plotted-bar w-2 rounded-full justify-self-center h-full row-start-3 row-end-6 col-[3] bg-secondary"
                ></span>

                <span
                    class="plotted-bar w-2 rounded-full justify-self-center h-full row-start-4 row-end-6 col-[4] bg-secondary"
                ></span>

                <span
                    class="plotted-bar w-2 rounded-full justify-self-center h-full row-start-5 row-end-6 col-[5] bg-secondary"
                ></span>

                <span
                    class="plotted-bar w-2 rounded-full justify-self-center h-full row-start-3 row-end-6 col-[6] bg-secondary"
                ></span>

                <span
                    class="plotted-bar w-2 rounded-full justify-self-center h-full row-start-2 row-end-6 col-[7] bg-secondary"
                ></span>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "New PT Clients",
    },
    subtitle: {
        type: String,
        default: "Today",
    },
    set: {
        type: Array,
        default: [15, 43, 88, 23, 52],
    },
});
</script>

<style scoped>
.plotted-bar {
    @apply bg-gradient-to-t to-secondary from-[#042137];
}
</style>
