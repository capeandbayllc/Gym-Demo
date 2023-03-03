<template>
    <!-- <ul> -->
    <!-- list header -->
    <div class="flex justify-between items-center">
        <h3 class="text-[1.2rem] font-semibold">
            Calendars ({{ calendars.length }})
        </h3>

        <!-- button group -->
        <div class="flex gap-2">
            <!-- chevron btn -->
            <button class="fill-white p-2 w-8 rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M238 82.7l22.6 22.6 192 192L475.3 320 430 365.3l-22.6-22.6L238 173.3 68.6 342.6 46 365.3 .7 320l22.6-22.6 192-192L238 82.7z"
                    />
                </svg>
            </button>
            <!-- actions button (new/subscribe) -->
            <div class="relative">
                <button
                    @click="enableDropdown"
                    class="fill-white border-secondary hover:bg-secondary border-2 p-2 w-8 rounded-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
                        />
                    </svg>
                </button>
                <template v-if="dropdownVisibility">
                    <DropdownMenu @outclick="disableDropdown" />
                </template>
            </div>
        </div>
    </div>

    <!-- list items (calendars) -->
    <ul class="max-h-[10vh] overflow-y-scroll">
        <li
            class="flex items-center justify-between my-1 pr-5"
            v-for="cal in calendars"
            :key="cal.id"
        >
            <div class="flex items-center gap-2">
                <input
                    type="checkbox"
                    :name="cal.title"
                    :id="'cal_' + cal.id"
                />
                <label
                    class="!text-[0.9rem] !font-normal"
                    :for="'cal_' + cal.id"
                    >{{ cal.title }}</label
                >
            </div>
            <div class="flex items-center gap-4">
                <!-- <button class="w-3 fill-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                        />
                    </svg>
                </button> -->
                <button class="w-[0.3125rem] fill-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                    >
                        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M48 464a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm0-160a48 48 0 1 1 0-96 48 48 0 1 1 0 96zM0 96a48 48 0 1 1 96 0A48 48 0 1 1 0 96z"
                        />
                    </svg>
                </button>
            </div>
        </li>
    </ul>
    <!-- </ul> -->
</template>

<script setup>
import DropdownMenu from "./dropdown-menu.vue";

const props = defineProps({
    calendars: {
        type: Array,
        default: [],
    },
});

const dropdownVisibility = ref(false);

const enableDropdown = () => {
    dropdownVisibility.value = true;
};

const disableDropdown = () => {
    dropdownVisibility.value = false;
};
</script>

<style scoped>
input[type="checkbox"] {
    @apply rounded bg-white appearance-none m-0 h-5 w-5 border border-[#C0BDCC] outline-none;
    @apply focus:border;
}

input[type="checkbox"]:checked {
    @apply bg-secondary border-primary;
}

label {
    @apply text-lg font-bold capitalize;
}
</style>
