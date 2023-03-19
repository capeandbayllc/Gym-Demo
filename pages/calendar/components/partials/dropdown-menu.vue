<template>
  <ul
    ref="container"
    class="absolute bg-neutral py-2 mx-2 w-48 z-50 right-0 top-10 border rounded-md border-zinc-600"
  >
    <li>
      <button>Subscribe to calendar</button>
    </li>
    <li>
      <button>Create a new calendar</button>
    </li>
  </ul>
</template>

<script setup>
const container = ref(null);
const emit = defineEmits(["outclick"]);

/** enforces clicks to happen within the container boundaries and emits an outclick event if not
 * this allows the consumer of the component to manage behavior
 */
const ensureClickBoundary = (e) => {
  if (!container.value.contains(e.target)) {
    emit("outclick");
  }
};

onMounted(() => {
  window.addEventListener("click", ensureClickBoundary, true);
});

onUnmounted(() => {
  window.removeEventListener("click", ensureClickBoundary, true);
});
</script>

<style scoped>
li {
  @apply py-2 px-4;
  @apply hover:bg-white hover:bg-opacity-10;
}
</style>
