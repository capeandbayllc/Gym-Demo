<template>
    <div :class="className">
        <button
            class="select-box-btn"
            :class="{
                'bg-secondary': secondary,
                'bg-white text-[#292929]': !secondary,
                'rounded-t-md': !isCollapsed,
                'rounded-md': isCollapsed,
                'font-light tracking-wide !py-[17px] text-black w-full !border-[0px] text-[0.9rem]':
                    formInput,
                'py-1 border ': !formInput,
            }"
            :onClick="toggleCollapsed"
        >
            {{ value ? selected : label }}
            <select-box-icon :isCollapsed="isCollapsed" :color="color" />
        </button>
        <transition name="fade">
            <SelectBoxContent v-if="!isCollapsed">
                <SelectBoxOption
                    v-for="item in items"
                    :key="item.value"
                    :value="item.value"
                    :label="item.label"
                    :selected="item.value === value"
                    :onClick="onChange"
                />
            </SelectBoxContent>
        </transition>
    </div>
</template>
<style>
.select-box-wrapper {
    @apply relative min-w-fit;
}
.select-box-btn {
    @apply flex flex-row px-2 items-center justify-between w-full;
}
.select-box-clear-btn {
    @apply text-right font-medium mr-3 cursor-pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<script setup>
import { ref, computed } from "vue";
import SelectBoxIcon from "./select-box-icon.vue";
import SelectBoxContent from "./select-box-content.vue";
import SelectBoxOption from "./select-box-option.vue";

const props = defineProps({
    formInput: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: "Select...",
    },
    placeholderSearch: {
        type: String,
        default: "Search",
    },
    items: {
        type: Array,
        default: [],
    },
    value: {
        type: String,
    },
    color: {
        type: String,
    },
    onChange: {
        type: Function,
        default: () => null,
    },
    class: {
        type: String,
        default: "",
    },
    secondary: {
        type: Boolean,
        default: false,
    },
    transparent: {
        type: Boolean,
        default: true,
    },
});
const isCollapsed = ref(true);
const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value;
};

const onChange = (value) => {
    toggleCollapsed();
    props.onChange(value);
};

const className = computed({
    get() {
        let additional = isCollapsed.value ? " collapsed" : "";
        return "select-box-wrapper " + props.class + additional;
    },
});

const selected = computed(
    () => props.items?.filter((item) => item.value === props.value)[0]?.label
);
</script>
