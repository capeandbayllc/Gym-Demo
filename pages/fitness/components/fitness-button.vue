<template>
    <button :class="['fitness-button', `${btn_type}`]">
        {{ label }}
    </button>
  </template>
   
<style scoped lang="postcss">
.fitness-button {
    @apply border-none m-auto text-base-content py-[4px] px-[10px] text-center no-underline block text-[14px] font-normal mx-auto cursor-default rounded-[12px] min-w-[90px] transition-all duration-300;
}
.default{
    @apply border-[2px] border-solid border-secondary min-w-[70px] cursor-pointer px-[10px] py-[1px] text-[18px] bg-neutral;
}
.default:hover{
    @apply bg-secondary;
}
.Premium{
    @apply bg-warning text-base-100;
}
.Basic{
    @apply bg-success;
}
.Pending{
    @apply bg-neutral-content;
}
.Completed{
    @apply bg-neutral border-[2px] border-solid border-success;
}

</style>
<script setup>
import { createDOMCompilerError } from '@vue/compiler-dom';

const props = defineProps({
    btn_type :{
        type : String,
        default : "default"
    },
    label :{
        type : String,
        default : "View"
    }
});

</script>