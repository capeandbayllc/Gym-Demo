<template>
  <simple-card title="Create" class="-lg:mb-4">
    <div class="create-card-content">
      <div v-for="(type, ndx) in types" :key="ndx" class="create-option">
        <empty-file-icon class="mb-2" />
        <span class="text-center">{{ type }}</span>
      </div>
      <div class="create-option">
        <NuxtLink to="/agreement" class="text-center">
          <add-icon class="mb-2.5" />
          Create New
        </NuxtLink>
      </div>
      <div class="create-option">
        <add-icon class="mb-2.5" />
        Add a Report
      </div>
    </div>
  </simple-card>
</template>
<style scoped lang="postcss">
.create-card-content {
  @apply grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 py-6 px-9 bg-transparent;
  .create-option {
    @apply flex flex-col items-center text-sm;
  }
}
</style>
<script setup>
import { AddIcon, EmptyFileIcon } from "~~/components/icons";
const types = [
  "Blank",
  "Project Proposal",
  "Meeting Notepad",
  "Campaign",
  "Campaign",
];
</script>
