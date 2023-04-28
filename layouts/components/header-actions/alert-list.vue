<template>
  <div class="alet-list-container">
    <div class="alet-list-title">Alerts</div>
    <div class="alet-list-body">
      <div v-for="(item, i) in list" :key="i" class="alert-list-item">
        <div>{{ item.text }}</div>
        <Button error size="sm">View</Button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.alet-list-container {
  @apply border border-error rounded bg-black w-72;
  .alet-list-title {
    @apply flex items-center justify-center h-10 text-base font-bold text-base-content bg-error;
  }
  .alet-list-body {
    @apply flex flex-col space-y-4 p-4 pt-8;
    .alert-list-item {
      @apply flex flex-row justify-between pb-4 font-semibold px-2;
    }
    .alert-list-item:not(:last-child) {
      @apply border-b border-error;
    }
  }
}
</style>
<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>
