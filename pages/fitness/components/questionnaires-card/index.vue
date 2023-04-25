<template>
  <fitness-card :title-icon="QuestionnaireIcon" title="Medical Questionnaires">
    <div class="page-container">
      <div class="search-bar grid grid-cols-10">
        <div class="col-span-3">
          <FitnessPlusButton :label="'Questionnaires'" />
        </div>
        <div class="col-span-1"></div>
        <div class="col-span-6">
          <input class="search-input" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="slide-docs flex">
        <ScrollableDocs :docs="doc_data" />
      </div>
    </div>
  </fitness-card>
</template>
<style scoped lang="postcss">
.page-container {
  @apply py-[10px] px-[20px];
}
.search-input {
  @apply bg-primary min-h-[36px] w-full rounded-[10px] bg-primary mx-auto text-base-content float-right mt-[4px] py-[2px] px-[10px] transition-all duration-300 text-[16px];
}
.search-input:hover,
.search-input:focus {
  @apply bg-secondary;
}
.search-input:focus {
  box-shadow: none;
  outline: none;
}
.slide-docs {
  @apply border-[2px] border-solid border-secondary rounded-[8px] py-[18px] px-[10px] mt-[15px];
}
</style>
<script setup>
import { QuestionnaireIcon } from "~~/components/icons";
import FitnessCard from "../fitness-card.vue";
import FitnessPlusButton from "../fitness-plus-button.vue";
import ScrollableDocs from "~/components/scrollable-docs.vue";

const doc_data = [
  {
    id: 1,
    name: "Questionnaire 1",
    date: "April 1, 2023",
  },
  {
    id: 2,
    name: "Questionnaire 2",
    date: "April 2, 2023",
  },
  {
    id: 3,
    name: "Questionnaire 3",
    date: "April 3, 2023",
  },
  {
    id: 4,
    name: "Questionnaire 4",
    date: "April 4, 2023",
  },
  {
    id: 5,
    name: "Questionnaire 5",
    date: "April 5, 2023",
  },
  {
    id: 6,
    name: "Questionnaire 6",
    date: "April 6, 2023",
  },
  {
    id: 7,
    name: "Questionnaire 7",
    date: "April 7, 2023",
  },
  {
    id: 8,
    name: "Questionnaire 8",
    date: "April 8, 2023",
  },
];
</script>
