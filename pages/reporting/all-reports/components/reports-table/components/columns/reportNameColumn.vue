<template>
  <div class="flex items-center gap-2">
    <input type="checkbox" name="agree" id="agree" />
    <Button
      size="sm"
      class="bg-transparent border-0 px-0 mb-1"
      @click="emit('toggleIsFavorite')"
    >
      <star-icon
        clear
        class="text-2xl mb-1"
        :class="{
          'text-secondary': item.isFavorite,
          'text-base-content/80': !item.isFavorite,
        }"
      />
    </Button>
    <button class="whitespace-nowrap cursor-pointer" @click="rowClicked(item)">
      {{ item[column.value] ? item[column.value] : "-" }}
    </button>
  </div>
</template>

<style scoped lang="postcss">
input[type="checkbox"] {
  @apply rounded-[6px] bg-base-content appearance-none m-0 h-5 w-5 border border-neutral-content outline-none focus:border;
}
input[type="checkbox"]:checked {
  @apply bg-secondary border-primary;
}
</style>

<script setup>
import { StarIcon } from "~/components/icons";

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

const emit = defineEmits(["row-clicked", "handle", "toggleIsFavorite"]);

const rowClicked = (data) => {
  emit("row-clicked", data);
};
</script>
