<template>
  <simple-card>
    <template #title>
      <fitness-card-title :title-icon="titleIcon" :title="title" />
    </template>
    <slot />
  </simple-card>
</template>
<script setup>
import FitnessCardTitle from "./fitness-card-title.vue";
const props = defineProps({
  titleIcon: Object,
  title: String,
});
</script>
