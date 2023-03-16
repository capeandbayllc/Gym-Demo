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
    </div>
</template>
<style scoped>
.multi-select {
    @apply flex flex-col gap-2;
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

</script>
