<template>
    <label for="toogleA" class="flex items-center cursor-pointer px-2">
        <div class="relative">
            <input id="toogleA" v-model="checked" @change="update" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
    </label>
</template>

<script setup>
const props = defineProps({
    modelValue: Boolean
});
const checked = ref(props.modelValue);
 
const emit = defineEmits(['update:modelValue']);

const update = (value)=>{
    emit('update:modelValue', checked.value)
}

</script>

<style scoped>
input{
    &:checked ~ .dot {
        @apply translate-x-full bg-secondary
    }
}
</style>