<template>
  <club-card :title-icon="ReportingIcon" title="Reporting">
    <PercentageRadar />
  </club-card>
</template>
<script setup>
import { ReportingIcon } from "~~/components/icons";
import ClubCard from "../club-card.vue";
import PercentageRadar from "./percentage-radar.vue";
onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});
</script>
