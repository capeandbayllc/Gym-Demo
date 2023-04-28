<template>
  <card
    title="Build a Campaign"
    class="bg-base-300 w-full"
    :options="{
      collapse: false,
      favorite: false,
    }"
  >
    <template #content>
      <div
        class="flex items-center border-t border-base-content/50 justify-center mt-2 h-full"
      >
        <div class="btn btn-outline btn-secondary btn-circle btn-lg my-6">
          <add-campaign-icon @click.stop="$router.push('/mass-com/builder')" />
        </div>
      </div>
    </template>
  </card>
</template>

<style lang="postcss">
.card-content-container {
  @apply w-full h-full;
}
</style>

<script setup>
import AddCampaignIcon from "./add-campaign-icon.vue";
</script>
