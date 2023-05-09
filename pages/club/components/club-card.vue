<template>
  <simple-card>
    <template #title>
      <club-card-title :title-icon="titleIcon" :title="title" />
    </template>
    <slot />
  </simple-card>
</template>
<script setup>
import ClubCardTitle from "./club-card-title.vue";
const props = defineProps({
  titleIcon: Object,
  title: String,
});
</script>
