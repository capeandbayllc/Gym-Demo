<template>
  <div class="flex flex-col justify-center items-center rounded-xl gap-5">
    <stat-header
      :icon="icon"
      :statValue="statValue"
      :hideStatValue="hideStatValue"
    />
    <div
      class="rounded-3xl bg-gray-600/60 w-full h-[12rem] flex flex-col justify-center px-5 overflow-y-scroll no-scrollbar"
    >
      <div class="">
        <slot>
          <h3 class="text-center w-full text-white">No Data to Display</h3>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.stat-title-container {
  @apply flex flex-row justify-between gap-3 rounded-full pr-3 w-full bg-gradient-to-r from-gray-900 to-gray-600/50 via-gray-600/50;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  @apply hidden;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<script setup>
import StatHeader from "./stat-header.vue";

const props = defineProps({
  statValue: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
  },
  hideStatValue: {
    type: Boolean,
  },
});
</script>
