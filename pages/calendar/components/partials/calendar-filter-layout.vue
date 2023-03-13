<template>
    <div
        class="flex flex-col p-3 border-2 border-secondary rounded-xl bg-neutral"
    >
        <div class="flex flex-row justify-between font-light">
            <h3 class="text-[1rem] my-auto">
                {{ title }} ({{ options.length }})
            </h3>
            <div class="flex flex-row gap-2">
                <button class="border-secondary border-2 p-1.5 rounded-xl">
                    <PlusIcon class="fill-white w-[15px] h-[15px]" />
                </button>
                <ArrowIcon
                    class="fill-white w-[10px] h-[10px] my-auto calendar-style-transition cursor-pointer"
                    :class="{
                        '-rotate-0': isOpen,
                        '-rotate-270': !isOpen,
                    }"
                    @click="toggleFilterOption(filter_id)"
                />
            </div>
        </div>
        <div
            class="flex flex-col gap-1 scrollbar-hide overflow-y-scroll h-auto max-h-[6.5rem] calendar-style-transition"
            :class="{
                'h-[6.5rem] opacity-100 mt-2': isOpen,
                'h-[0rem] opacity-0 mt-0': !isOpen,
            }"
        >
            <div
                class="flex flex-row justify-between"
                v-for="(option, optionIndex) in options"
            >
                <div class="flex flex-row gap-3 w-full">
                    <input
                        type="checkbox"
                        :id="`filter-${option.id}`"
                        :checked="selected.includes(option.id)"
                        @change="selectOption(filter_id, option.id)"
                    />
                    <label
                        class="my-auto text-[0.8rem] cursor-pointer w-[calc(100%-28px)] line-clamp-1"
                        :for="`filter-${option.id}`"
                    >
                        {{ option.name }}
                    </label>
                </div>
                <div class="flex flex-row gap-3">
                    <CrossIcon class="fill-white w-[15px] my-auto" />
                    <VerticalEllipsis class="fill-white h-[15px] my-auto" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    ArrowIcon,
    PlusIcon,
    CrossIcon,
    VerticalEllipsis,
} from "~~/components/icons";
const props = defineProps({
    title: {
        type: String,
        default: "Some Title",
    },
    options: {
        type: Array,
        default: [
            { id: "1", name: "Name 1" },
            { id: "2", name: "Name 2" },
            { id: "3", name: "Name 3" },
            { id: "4", name: "Name 4" },
            { id: "5", name: "Name 5" },
        ],
    },
    selected: {
        type: Array,
        default: ["1", "2", "5"],
    },
    selectOption: Function,
    toggleFilterOption: Function,
    isOpen: {
        type: Boolean,
        default: false,
    },
    filter_id: String,
});
</script>

<style scoped>
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

input[type="checkbox"] {
    @apply rounded bg-white appearance-none m-0 h-4 w-4 border border-[#C0BDCC] outline-none my-auto;
    @apply focus:border;
}

input[type="checkbox"]:checked {
    @apply bg-secondary border-primary;
}
</style>
