<template>
  <div class="goal-modal">
    <div class="modal-container gap-5">
      <div class="modal-content">
        <h2 class="text-2xl text-secondary">New Goal Name</h2>
        <Filters />
        <div class="grid md:grid-cols-2 gap-5">
          <description-card />
          <progress-card />
          <!-- <div>
            <staff-section />
            <location-section />
          </div>
          <last-months-progress-card /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.goal-modal {
  @apply pb-5 pt-4 mx-auto w-[800px] px-10 max-w-[1600px];
  .modal-container {
    @apply text-center p-6 border-secondary border-2 rounded-[26px] bg-gradient-to-b from-secondary-focus to-base-300 max-w-[85vw];
    .modal-content {
      @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left w-full max-w-[1600px];
    }
  }
}
</style>

<script setup>
import Filters from "./partials/filters.vue";
import descriptionCard from "./partials/description-card.vue";
import progressCard from "./partials/progress-card.vue";
// import staffSection from './partials/staff-section.vue';
// import locationSection from './partials/location-section.vue';
// import lastMonthCard from '~/pages/agreement-builder/components/last-month-card.vue';
</script>
