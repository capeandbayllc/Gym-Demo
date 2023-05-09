<template>
  <div class="card-container" :class="{ collapsed: isCollapsed }">
    <div class="card-content">
      <div class="card-title-container">
        <slot name="header" />
        <div class="card-actions">
          <div class="w-5">
            <collapse-btn :size-full="true" v-model="isCollapsed" />
          </div>
        </div>
      </div>
      <slot v-if="isCollapsed" name="summary" />
      <slot v-else name="content" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply py-4 overflow-auto w-full;
  .card-content {
    @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left w-full max-w-[1600px];
  }
  .card-title-container {
    @apply flex justify-between items-center;
    .card-title {
      @apply font-bold;
    }
    .card-actions {
      @apply flex flex-row space-x-2 cursor-pointer items-center;
    }
  }
}
.card-container.collapsed {
  @apply h-fit;
}
</style>
<script setup>
import CollapseBtn from "~~/components/buttons/collapse-btn.vue";

const isCollapsed = ref(false);
</script>
