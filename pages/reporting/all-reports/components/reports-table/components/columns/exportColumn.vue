<template>
  <div class="flex items-center justify-center relative dropdown dropdown-end">
    <Button
      size="sm"
      class="ellipsis-button bg-transparent border-0"
      @click.stop="showDropdown = true"
    >
      <vertical-ellipsis class="ellipsis" />
    </Button>
    <div
      class="dropdown-content"
      @click.stop="toggleDropdown"
      v-show="showDropdown"
    >
      <div class="dropdown-container">
        <div class="dropdown-item">
          <Button secondary size="sm"> PDF </Button>
        </div>
        <div class="dropdown-item">
          <Button secondary size="sm"> CSV </Button>
        </div>
        <div class="dropdown-item">
          <Button secondary size="sm"> EXCEL </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.ellipsis-button {
  @apply h-8;
}
.ellipsis-button:hover .ellipsis {
  @apply fill-secondary;
}
.ellipsis {
  @apply h-6 fill-base-content  transform rotate-90;
}
.dropdown-content {
  @apply absolute top-[0px] right-[90px] h-auto z-[20];
  .dropdown-container {
    @apply bg-base-300 border-secondary border text-base font-normal rounded-2xl p-3 px-5 w-[110px] flex flex-col gap-[3px];
    .dropdown-item {
      @apply mb-2 cursor-pointer rounded flex justify-center;
      button {
        @apply normal-case border border-secondary rounded px-2 py-1 bg-transparent hover:bg-secondary;
      }
    }
  }
}
</style>

<script setup>
import { VerticalEllipsis } from "~/components/icons";
const props = defineProps({
  item: {
    type: Array,
    default: {},
  },
  column: {
    type: Array,
    default: {},
  },
});
const showDropdown = ref(false);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>
