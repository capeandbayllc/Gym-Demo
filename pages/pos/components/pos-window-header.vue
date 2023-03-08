<template>
    <div class="flex flex-row justify-between">
        <div class="flex flex-row gap-10">
            <h3 class="text-[1.8rem] font-light tracking-wider">Purchase</h3>
            <button class="pos-admin-button">
                <PersonAdminIcon />
                <span class="my-auto">Admin</span>
            </button>
        </div>
        <div class="pos-header-right-components-container">
            <div class="flex flex-row gap-1 group">
                <span
                    class="my-auto text-[0.9rem] group-hover:text-secondary pos-style-transition"
                    >Scan Item</span
                >
                <BarcodeScanIcon class="pos-barcode-scan-icon" />
            </div>
            <div class="my-auto flex flex-row gap-5">
                <select-box
                    :items="locationsFilter"
                    value=""
                    :label="'Locations'"
                    :secondary="true"
                    class="w-40 text-[0.9rem] my-auto"
                >
                </select-box>
                <div>
                    <input
                        placeholder="Search Member"
                        class="text-[0.8rem] w-60 rounded-md px-3 text-black py-2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { PersonAdminIcon, BarcodeScanIcon } from "~~/components/icons";

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
.pos-admin-button {
    @apply rounded-md border-2 border-secondary bg-[#191919]/[0.3] text-[0.8rem] py-1 px-4 flex flex-row gap-2 hover:border-white hover:bg-[#191919]/[0.1] pos-style-transition;
}
.pos-header-right-components-container {
    @apply flex flex-row gap-5 w-full justify-end;
}
.pos-barcode-scan-icon path {
    @apply group-hover:!fill-secondary pos-style-transition;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
