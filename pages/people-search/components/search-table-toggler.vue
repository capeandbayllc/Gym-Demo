<template>
  <div
    class="flex justify-between items-center bg-secondary rounded-t-lg pl-6 p-3 font-semibold"
  >
    <span>{{ heading }}</span>
    <div class="flex items-center h-8">
      <button class="mx-4" @click="searchInputVisible = !searchInputVisible">
        <SearchIcon />
      </button>

      <template v-if="searchInputVisible">
        <input
          v-model="searchInputValue"
          type="text"
          placeholder="Search"
          class="input input-sm max-w-xs bg-secondary border border-base-content rounded"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from "@/components/icons";
interface Props {
  heading: string;
  input: string;
}

const props = withDefaults(defineProps<Props>(), {
  heading: () => "table heading",
  input: () => "",
});

const searchInputVisible: Ref<boolean> = ref(false);
const searchInputValue: Ref<string> = ref(props.input);
</script>
