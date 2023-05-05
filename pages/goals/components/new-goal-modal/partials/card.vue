<template>
  <div class="card-container">
    <div class="card-content">
      <div class="card-title-container">
        <slot name="header" />
        <div class="card-actions">
          <button @click.stop="toggleDropdown">
            <vertical-ellipsis class="h-5 fill-base-content" />
          </button>
          <div
            class="dropdown"
            @click.stop="toggleDropdown"
            v-show="showDropdown"
          >
            <div class="dropdown-container">
              <div class="dropdown-item">Daily</div>
              <div class="dropdown-item">Sort By</div>
              <div class="dropdown-item">Monthly</div>
            </div>
          </div>
        </div>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply py-4 overflow-auto w-full overflow-visible;
  .card-content {
    @apply border border-secondary rounded-2xl bg-base-300 p-4 text-left w-full max-w-[1600px];
  }
  .card-title-container {
    @apply flex justify-between items-center;
    .card-actions {
      @apply flex flex-row space-x-2 cursor-pointer items-center relative;
    }
  }
}
.dropdown {
  @apply text-white absolute top-[28px] right-[-50px] h-auto;
  .dropdown-container {
    @apply bg-base-content text-base-300 p-3 w-[110px];
  }
}
.dropdown-item {
  @apply mb-2 cursor-pointer;
}
</style>
<script setup>
import { VerticalEllipsis } from "~/components/icons";

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>
