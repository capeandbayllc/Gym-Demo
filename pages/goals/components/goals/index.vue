<template>
  <div class="text-left mt-8">
    <h3 class="text-base-content text-xl">Goals</h3>
    <Filters @openGoalModal="openGoalModal" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4"
    >
      <goal-card v-for="(goal, i) in goals" :key="i" :goal="goal" />
    </div>
    <location-table type="future" />
    <div class="text-center mt-5">
      <Button size="sm" secondary class="normal-case"> Edit All Goals </Button>
    </div>
  </div>

  <daisy-modal ref="goalModal">
    <goal-modal />
  </daisy-modal>
</template>

<script setup>
import GoalCard from "./partials/goal-card.vue";
import Filters from "./partials/filters.vue";
import LocationTable from "./partials/location-table.vue";
import GoalModal from "../new-goal-modal/index.vue";

const goalModal = ref(null);

const openGoalModal = () => {
  goalModal.value.open();
};

const goals = [
  {
    count: "1",
    title: "NM Unit Goal",
    description: "NM Unit Goal is all in units sold for the month.",
    priority: "High",
    status: "Repeat",
  },
  {
    count: "2",
    title: "NM Unit Goal",
    description:
      "NM EFT amount will reflect all membership sold with the Dollar amount associated with all sales.",
    priority: "High",
    status: "Repeat",
  },
  {
    count: "3",
    title: "Personal Training Units",
    description: "PT Units will reflect all new packages sold for the month.",
    priority: "Medium",
    status: "Repeat",
  },
  {
    count: "4",
    title: "PT Total Cash Revenue",
    description:
      "All cash collected pertaining to PT sales: Down payments, Monthly paid installments, Processing fees, and PIFs.",
    priority: "Low",
    status: "Never",
  },
];
</script>
