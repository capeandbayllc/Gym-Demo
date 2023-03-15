<template>
    <div class="multi-select">
        <multiselect
            :modelValue="modelValue"
            :multipleLabel="() => label"
            @update:modelValue="$emit('update:modelValue', $event)"
            :options="options"
            mode="multiple"
            :placeholder="label"
            :classes="getDefaultMultiselectTWClasses()"
            :close-on-select="true"
        />
        <div class="multi-select-tags">
            <div v-for="value in modelValue" :key="value" @click="removeOption(value)">
                {{getLabel(value)}}
            </div>
        </div>
    </div>
</template>
<style scoped>
.multi-select {
    @apply flex flex-col gap-2;
    .multi-select-tags {
        > div {
            @apply float-left h-9 bg-secondary rounded px-1.5 mr-2 mt-2 cursor-pointer pt-2 ;
        }
    }
}
</style>
<script>
export default {
  name: "multi-select-dropdown",
}
</script>

<script setup>
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import { getDefaultMultiselectTWClasses } from './getDefaultMultiselectTWClasses.js';

const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    },
    label: String,
    options: {
        type: Array,
        default: []
    }
});

const emit = defineEmits(["update:modelValue"]);

const getLabel = (value) => {
    let label = props.options.filter(item => item.value === value)[0].label
    return label;
};

const removeOption = (value) => {
    let updated = props.modelValue.filter(item => item != value)
    emit('update:modelValue', updated)
};
</script>
