<template>
  <card-widget class="slim-text" title="Statistics 1">
    <template #summary>
      <div class="stat-title-container">
        <component :is="icon" class="statistic-icon" />
        <span
          class="my-auto text-[1.5rem] font-normal tracking-wide text-white"
        >
          {{ statValue }}
        </span>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col justify-center items-center rounded-xl gap-5">
        <div class="stat-title-container">
          <component :is="icon" class="statistic-icon" />
          <span
            class="my-auto text-[1.5rem] font-normal tracking-wide text-white"
          >
            {{ statValue }}
          </span>
        </div>
        <slot></slot>
      </div>
    </template>
  </card-widget>
</template>

<style scoped lang="postcss">
.slim-text {
  @apply tracking-wider font-light;
}
.stat-title-container {
  @apply flex flex-row justify-between gap-3 rounded-full pr-3 w-full bg-gradient-to-r from-gray-900 to-gray-600/50 via-gray-600/50;
}
</style>

<script setup>
import CardWidget from "../../../card-widget.vue";

const props = defineProps({
  statValue: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
  },
  content: {
    type: Object,
  },
});
</script>
