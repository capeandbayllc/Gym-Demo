<template>
  <div class="modal-container relative">
    <div class="modal-content">
      <div class="pb-5">
        <h3 class="text-center text-xl font-semibold">Add Filter</h3>
      </div>

      <select-box
        :items="[{ label: 'Example', value: 'Example' }]"
        :bg-secondary-opened="true"
        :show-search="false"
        :showClearList="false"
        :label="'Example'"
        class="select-box"
      />

      <div class="flex justify-center sm:justify-end gap-4 pt-10">
        <Button
          size="sm"
          outline
          class="normal-case rounded-lg hover:text-secondary"
          @click="emit('close')"
        >
          Cancel
        </Button>
        <Button size="sm" secondary class="normal-case rounded-lg">
          Save
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply border-secondary text-base-content px-5 py-4 border-2 bg-base-300 rounded-2xl max-w-[1500px] w-[90vw] max-h-[85vh] overflow-y-auto gap-5 max-w-[500px] w-[90vw];
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply border-secondary text-base-content sm:px-20 py-8 bg-gradient-to-b from-secondary-focus to-base-300 border-2 rounded-2xl;
    .select-box {
      @apply bg-neutral text-base-content !h-10 py-2 rounded-lg !text-left;
    }
  }
}
</style>
<style lang="postcss">
.select-box {
  .select-box-btn {
    @apply !h-10 rounded-lg;
  }
  .select-box-content {
    @apply top-[8px];
  }
}
</style>

<script setup>
import { CloseMe } from "~/components/icons";

const emit = defineEmits(["close"]);
</script>
