<template>
  <div class="page-fitness-container">
    <div class="page-content grid grid-cols-2 gap-5">
      <assessments-card @assessment="handleOpenAssessment" class="col-span-2" />
      <waivers-card class="col-span-1 -lg:col-span-2" />
      <questionnaires-card class="col-span-1 -lg:col-span-2" />
      <reportings-card class="col-span-2" />
    </div>
    <daisy-modal ref="assessmentFormEl">
      <AssessmentForm @close="handleCloseAssessment" />
    </daisy-modal>
  </div>
</template>
<style scoped lang="postcss">
.page-fitness-container {
  @apply py-4 pr-5 w-full h-fit;
  .page-content {
    @apply text-center text-secondary p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[85vw];
  }
}
</style>
<script setup>
import AssessmentsCard from "./components/assessments-card/index.vue";
import WaiversCard from "./components/waivers-card/index.vue";
import ReportingsCard from "./components/reportings-card/index.vue";
import QuestionnairesCard from "./components/questionnaires-card/index.vue";
import AssessmentForm from "./components/assessment-form/assessment-form.vue";

const assessmentFormEl = ref(null);

const handleOpenAssessment = () => {
  assessmentFormEl.value.open();
};
const handleCloseAssessment = () => {
  assessmentFormEl.value.close();
};
</script>
