<template>
  <simple-card title="Notes" class="rounded-xl">
    <div
      class="bg-gradient-to-t from-secondary-content to-secondary/60 p-5 w-[420px]"
    >
      <div
        class="bg-base-content p-4 border-[1px] border-info-content rounded-xl"
      >
        <div class="text-info-content flex justify-between">
          <p>14:34:56 PM</p>
          <p>December 6, 2022</p>
        </div>
        <div class="mb-4">
          <input
            type="text"
            :placeholder="placeholderTitle"
            class="w-full font-semibold placeholder-secondary text-neutral-content"
          />
        </div>
        <div class="text-neutral-content">
          <textarea class="w-full h-[150px] p-2"></textarea>
        </div>

        <div class="text-center mt-2">
          <button
            class="bg-success border border-success px-8 py-2 rounded-3xl hover:text-base-300 hover:bg-base-content"
          >
            Create an action
          </button>
        </div>
      </div>
    </div>
  </simple-card>
</template>

<script setup>
const props = defineProps({
  placeholderTitle: {
    type: String,
  },
});
</script>
