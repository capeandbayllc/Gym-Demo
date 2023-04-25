<template>
  <div class="select-templates-layouts-container">
    <p class="py-2">Featured</p>

    <div class="flex gap-3">
      <div class="block-border templates-block">
        <div class="slide-docs flex w-full">
          <ScrollableDocs :docs="docs" />
        </div>
      </div>
      <div class="block-border add-block">
        <div class="btn btn-outline btn-secondary btn-circle btn-lg mt-6">
          <add-campaign-icon @click.stop="$router.push('/mass-com/builder')" />
        </div>
        <p class="text-[10px] mt-3">Create New</p>
      </div>
    </div>

    <div class="flex pt-6 justify-center">
      <Button
        hoverSecondary
        hoverIcon
        size="xs"
        class="rounded-full normal-case pl-3"
        @click.stop="$emit('next-page')"
      >
        Build Your Campaign
        <right-arrow-icon class="ml-2" />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.select-templates-layouts-container {
  .block-border {
    @apply border border-white rounded-md;
  }
  .templates-block {
    @apply flex flex-grow overflow-y-auto gap-3 p-3;
  }
  .add-block {
    @apply px-8 flex flex-col flex-grow justify-center items-center max-w-[8rem];
  }
}
</style>

<script setup>
import ScrollableDocs from "~/components/scrollable-docs.vue";
import NormalDoc from "~/pages/mass-com/components/normal-doc.vue";
import AddCampaignIcon from "~/pages/mass-com/components/build-campaign-card/add-campaign-icon.vue";
import RightArrowIcon from "~/components/icons/arrow.vue";

const docs = [
  {
    id: 1,
    name: "Training Guide",
    date: "April 09, 2022",
  },
  {
    id: 1,
    name: "Onboarding",
    date: "April 09, 2022",
  },
  {
    id: 1,
    name: "Hiring Documents",
    date: "April 09, 2022",
  },
  {
    id: 1,
    name: "Job Performance",
    date: "April 09, 2022",
  },
  {
    id: 1,
    name: "Compensation",
    date: "April 09, 2022",
  },
  {
    id: 1,
    name: "Hiring Documents",
    date: "April 09, 2022",
  },
  {
    id: 1,
    name: "Compensation",
    date: "April 09, 2022",
  },
];
</script>
