<template>
    <div :class="className">
        <button
			class="select-box-btn"
            :class="{
                'bg-secondary': secondary,
                'bg-transparent border-secondary': transparent
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
            <select-box-item
                v-for="item in items"
                :key="item.value"
                :value="item.value"
                :label="item.label"
                :selected="item.value === value"
                :onClick="onChange"
            />
        </select-box-content>
    </div>
</template>
<style>
.select-box-wrapper {
    @apply relative min-w-fit;
}
.select-box-btn {
	@apply flex flex-row border rounded px-2 py-1 items-center justify-between w-full;
}

</style>
<script setup>
import { ref, computed } from "vue";
import SelectBoxIcon from "./SelectBoxIcon.vue";
import SelectBoxContent from "./SelectBoxContent.vue";
import SelectBoxItem from "./SelectBoxItem.vue";

const props = defineProps({
    label: {
        type: String,
        default: "Select...",
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
        default: true
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