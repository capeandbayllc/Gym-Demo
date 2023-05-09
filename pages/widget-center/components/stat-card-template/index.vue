<template>
  <card-widget
    class="slim-text"
    :class="cardClasses"
    :title="title"
    :button-text="buttonText"
  >
    <template #summary v-if="hasSummary">
      <stat-header
        :icon="icon"
        :statValue="statValue"
        :hideStatValue="hideStatValue"
        :isSummaryHeader="true"
      />
    </template>
    <template #content>
      <stat-content
        :icon="icon"
        :statValue="statValue"
        :hideStatValue="hideStatValue"
        :contentClasses="contentClasses"
      >
        <slot></slot>
      </stat-content>
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
import StatHeader from "./components/stat-header.vue";
import StatContent from "./components/stat-content.vue";
import CardWidget from "../card-widget.vue";

const props = defineProps({
  statValue: {
    type: String,
  },
  icon: {
    type: Object,
  },
  buttonText: {
    type: String,
  },
  title: {
    type: String,
    default: "Statistic Card",
  },
  hideStatValue: {
    type: Boolean,
    default: false,
  },
  cardClasses: {
    type: String,
    default: "",
  },
  hasSummary: {
    type: Boolean,
    default: true,
  },
  contentClasses: {
    type: String,
  },
});
</script>
