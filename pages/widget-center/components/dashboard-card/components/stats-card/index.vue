<template>
  <card-widget class="slim-text" title="Statistics 1">
    <template #summary>
      <div class="flex flex-row justify-between gap-5">
        <component :is="icon" class="statistic-icon" />
        <span
          class="my-auto text-[2rem] font-normal tracking-wider border-t border-r border-b"
        >
          {{ statValue }}
        </span>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col justify-center items-center rounded-xl gap-5">
        <div class="flex flex-row justify-between gap-3">
          <component :is="icon" class="statistic-icon" />
          <span class="my-auto text-[2rem] font-normal tracking-wide">
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
