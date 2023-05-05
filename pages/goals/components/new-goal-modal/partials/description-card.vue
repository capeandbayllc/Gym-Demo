<template>
  <card>
    <template #header>
      <h3 class="text-base-content text-secondary text-lg">Description</h3>
    </template>
    <template #content>
      <div class="overflow-auto max-w-full">
        <div class="mx-2 text-sm">
          <textarea
            class="description-textarea"
            v-model="description"
          ></textarea>
        </div>
        <div class="flex justify-end gap-3 mt-3">
          <div>
            <Button size="sm" class="normal-case" ghost> Cancel </Button>
            <Button size="sm" class="normal-case" ghost> Edit </Button>
          </div>
          <Button size="sm" class="normal-case px-4" secondary> Save </Button>
        </div>
      </div>
    </template>
  </card>
</template>

<style setup lang="postcss">
.description-textarea {
  @apply border p-3 rounded-xl mt-3 bg-base-300 w-full focus:outline-none h-40 resize-none;
}
</style>

<script setup>
import Card from "./card.vue";

const description = ref(`Location 1 Goal: 50% Rate
Location 2 Goal: 25% Rate
Location 3 Goal: 25% Rate`);
</script>
