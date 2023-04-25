<template>
  <button @click="$emit('click')" class="fitness-plus-button">
    <span>+</span>
    <label>{{ label }}</label>
  </button>
</template>

<style scoped lang="postcss">
.fitness-plus-button {
    @apply bg-transparent border-[2px] border-secondary rounded-full flex min-h-[44px] max-w-[200px] min-w-[120px] text-base-content cursor-pointer transition-all duration-300;
}
.fitness-plus-button:hover{
    @apply bg-secondary;
}
.fitness-plus-button span{
    @apply w-[30px] h-[30px] min-w-[30px] min-h-[30px] border-[2px] border-solid border-base-content rounded-full mx-[7px] my-auto;
}
.fitness-plus-button label{
    @apply my-auto mx-[7px];
}
</style>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "View",
  },
});
</script>
