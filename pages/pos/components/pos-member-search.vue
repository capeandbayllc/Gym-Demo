<template>
    <div class="pos-member-search-modal">
        <div class="pos-member-search-modal-box">
            <input
                class="border-[1px] w-full rounded-md p-3 border-[#aaa] !text-black"
                placeholder="Person Search"
                v-model="searchTerm"
            />
            <div class="mt-5 flex flex-row gap-5">
                <div class="flex flex-row justify-between w-full">
                    <div class="flex flex-row gap-5">
                        <button class="pos-search-category-button">
                            Members
                        </button>
                        <button class="pos-search-category-button">
                            Employees
                        </button>
                    </div>
                </div>
                <select-box
                    :items="locationsFilter"
                    value=""
                    :label="'Locations'"
                    :secondary="true"
                    class="w-40 text-[0.9rem] my-auto"
                >
                </select-box>
            </div>
        </div>
    </div>
</template>

<script setup>
const searchTerm = ref("");

const locationsFilter = [
    {
        value: "1",
        label: "Location 1",
    },
    {
        value: "2",
        label: "Location 2",
    },
    {
        value: "3",
        label: "Location 3",
    },
    {
        value: "4",
        label: "Location 4",
    },
    {
        value: "5",
        label: "Location 5",
    },
];
</script>

<style scoped>
.pos-member-search-modal {
    @apply w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#191919]/[0.2] backdrop-blur-sm flex flex-col justify-center  text-[0.9rem] pos-style-transition;
}

.pos-member-search-modal-box {
    @apply relative w-[70%] h-[55%] bg-[#191919]/[0.9] mx-auto rounded-xl border-2 border-secondary p-5 pos-style-transition;
}

.pos-search-category-button {
    @apply border-[1px] bg-black p-2.5 rounded-lg;
}

.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
