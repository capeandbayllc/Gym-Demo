<template>
  <stat-card-template
    title="Statistics 2"
    statValue="$10,000"
    buttonText="Go"
    buttonSecondary
  >
    <div
      class="flex flex-row justify-center items-center py-2 rounded-xl border-base-content"
    >
      <div>
        <div class="mb-3">
          <h5 class="text-[1.2rem]">Goal One</h5>
          <p class="text-base-content text-[0.7rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
            expedita, eius laborum inventore.
          </p>
        </div>

        <div>
          <h5 class="text-[1.2rem]">Goal One</h5>
        </div>
      </div>
    </div>
  </stat-card-template>
</template>

<script setup>
import StatCardTemplate from "../../../stat-card-template";
</script>
