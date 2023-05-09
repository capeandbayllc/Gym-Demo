<template>
  <div
    class="inline-flex items-center justify-center w-full opacity-control relative"
  >
    <hr class="w-32 bg-gray-200" />
    <div class="absolute bg-black p-1">
      <button class="btn btn-xs plus-icon">
        <font-awesome-icon :icon="['fas', 'plus']" size="md" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.opacity-control {
  @apply opacity-50 hover:opacity-100;
}
.plus-icon {
  @apply rounded-full bg-secondary hover:bg-secondary border-black hover:text-white max-w-[24px];
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);
</script>
