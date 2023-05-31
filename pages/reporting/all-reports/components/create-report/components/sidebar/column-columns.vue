<template>
  <div>
    <nav-columns
      actualSection="Columns"
      @changeActualSection="emit('changeActualSection', $event)"
    />
    <div class="mt-5 pb-5 px-5">
      <div v-for="(section, i) in columnsContent" :key="i">
        <div class="flex justify-between pt-3 pb-1">
          <h3 class="text-[16px] font-semibold">{{ section.title }}</h3>
          <button
            class="add-new-button"
            @click="emit('changeActualSection', 'SelectColumns')"
          >
            <plus-icon />
          </button>
        </div>
        <div
          v-for="(item, j) in section.items"
          v-if="section.items.length"
          :key="j"
        >
          <div class="section-item">
            <button class="flex gap-1 items-center w-full">
              <font-awesome-icon
                :icon="['far', 'bars']"
                size="md"
                class="mr-1 focus:outline-none h-[12px]"
                tabindex="0"
                @click.prevent.stop
              />
              {{ item }}
            </button>
            <button class="xmark-button">
              <font-awesome-icon
                :icon="['fas', 'xmark']"
                size="md"
                class="mr-1 focus:outline-none h-[12px] text-secondary"
                tabindex="0"
                @click.prevent.stop
              />
            </button>
          </div>
        </div>
        <div v-else>
          <span class="text-base-content/40 font-light tracking-wide">
            No Column Selected
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.section-item {
  @apply pb-1 hover:text-secondary flex justify-between pr-[14px] hover:pr-0;
  .xmark-button {
    @apply hidden;
  }
}
.section-item:hover .xmark-button {
  @apply !block;
}
.add-new-button {
  @apply border-secondary border text-white w-[25px] h-[25px] p-[4px] rounded-lg flex justify-center items-center hover:bg-secondary;
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { PlusIcon } from "~/components/icons";
import navColumns from "./nav-columns.vue";
library.add(faBars);
library.add(faXmark);

const emit = defineEmits(["changeActualSection"]);

const props = defineProps({
  columnsContent: {
    type: Array,
    default: [],
  },
});
</script>
