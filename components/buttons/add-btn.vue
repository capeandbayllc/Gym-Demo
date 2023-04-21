<template>
  <button class="bg-white hover:opacity-70 text-secondary w-[20px] h-[20px] flex justify-center items-center rounded-full">
    <PlusIcon />
  </button>
</template>
<style scoped lang="postcss">
.favorite-btn {
  @apply text-2xl select-none;
}
</style>
<script setup>
import {PlusIcon} from '~~/components/icons'
</script>
