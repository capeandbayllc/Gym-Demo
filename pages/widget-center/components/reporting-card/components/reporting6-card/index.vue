<template>
  <card-widget buttonSecondary buttonText="GO" title="Statistics 6">
    <template #summary>
      <div class="total-sale"><span class="total-symbol">$</span>18,000</div>
    </template>
    <template #content>
      <div class="total-sale"><span class="total-symbol">$</span>18,000</div>
      <div
        class="flex flex-row justify-center pl-5 items-center py-2 rounded-xl border border-base-content border"
      >
        <div class="mb-3">
          <h5 class="text-xl">Most Recent Location</h5>
          <p class="text-base-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi
            reprehenderit aspernatur quibusdam minus.
          </p>
        </div>
      </div>
    </template>
  </card-widget>
</template>

<script setup>
import CardWidget from "../../../card-widget.vue";
</script>
