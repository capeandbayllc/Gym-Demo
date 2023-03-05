<template>
    <div :class="className">
        <button
			class="select-box-btn"
            :class="{
                'bg-secondary': secondary,
                'bg-transparent border-secondary': transparent && !secondary,
                'rounded-t': !isCollapsed,
                'rounded': isCollapsed
            }"
            :onClick="toggleCollapsed"
        >
            {{ value ? selected : label }}
            <select-box-icon
                :isCollapsed="isCollapsed"
                :color="color"
            />
        </button>
        <select-box-content v-if="!isCollapsed">
            <select-box-search-input 
                :secondary="false"
                :placeholder="placeholderSearch" 
                size="xs" 
            ></select-box-search-input>
            <select-box-item
                v-for="item in items"
                :key="item.value"
                :value="item.value"
                :label="item.label"
                :selected="item.value === value"
                :onClick="onChange"
            />
            <p class="select-box-clear-btn" :onClick="clearList">Clear List</p>
        </select-box-content>
    </div>
</template>
<style>
.select-box-wrapper {
    @apply relative min-w-fit;
}
.select-box-btn {
	@apply flex flex-row border px-2 py-1 items-center justify-between w-full;
}
.select-box-clear-btn {
	@apply text-right font-medium mr-3 text-sm cursor-pointer;
}

</style>
<script setup>
import { ref, computed } from "vue";
import SelectBoxIcon from "./select-box-icon.vue";
import SelectBoxContent from "./SelectBoxContent.vue";
import SelectBoxItem from "./SelectBoxItem.vue";

const props = defineProps({
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
        default: false
    },
    transparent: {
        type: Boolean,
        default: true
    }

});
const isCollapsed = ref(true);
const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value;
};

const clearList = () => {
    toggleCollapsed();
    props.onChange('');
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

const selected = computed(() => props.items?.filter(item => item.value === props.value)[0]?.label)
</script>