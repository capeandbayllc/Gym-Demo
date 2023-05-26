<template>
  <div class="modal-container relative">
    <div class="modal-content">
      <div class="text-center">
        <h3 class="text-xl font-semibold mb-2">
          Are you sure you want to cancel?
        </h3>
        <p>Unsaved changes will be discarded</p>
      </div>

      <div class="flex justify-center gap-4 pt-10">
        <Button
          size="sm"
          outline
          class="normal-case rounded-lg hover:text-secondary"
          @click="emit('cancel')"
        >
          Cancel
        </Button>
        <Button
          size="sm"
          secondary
          class="normal-case rounded-lg"
          @click="emit('close')"
        >
          Confirm
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply border-secondary text-base-content px-5 py-4 border-2 bg-base-300 rounded-2xl max-w-[560px] w-[90vw] gap-5;
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply border-secondary max-h-[90vh] overflow-y-auto text-base-content p-4 sm:px-8 sm:py-10 bg-gradient-to-b from-secondary-focus to-base-300 border-2 rounded-2xl;
  }
}
</style>

<script setup>
const emit = defineEmits(["cancel"]);
</script>
