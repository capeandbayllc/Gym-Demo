<template>
  <div>
    <button
      @click="isCollapsed = !isCollapsed"
      class="text-secondary flex items-center gap-2 mb-2"
    >
      <span> Staff </span>
      <div class="w-4">
        <collapse-btn :size-full="true" v-model="isCollapsed" />
      </div>
    </button>
    <div class="gap-3 flex flex-wrap" v-if="!isCollapsed">
      <Button
        v-for="(item, i) in staff"
        size="sm"
        class=""
        :class="item.selected ? 'staff-button-selected' : 'staff-button'"
        @click="toggleSelectStaff(i)"
        :key="i"
      >
        {{ item.label }}
        <div class="w-0" v-if="item.selected">
          <div class="deselect flex item-center justify-center">
            <cross-icon class="w-[12px] mt-[1px]" />
          </div>
        </div>
      </Button>
      <button class="text-base-content flex items-center gap-2 mb-2">
        <span> New </span>
        <div class="w-4">
          <collapse-btn :size-full="true" />
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.staff-button {
  @apply bg-base-content text-base-100 normal-case rounded-xl hover:bg-base-content hover:text-base-100;
}
.staff-button-selected {
  @apply bg-secondary text-base-content normal-case rounded-xl hover:bg-secondary hover:text-base-content;
}
.deselect {
  @apply rounded !h-[20px] !w-[20px] bg-error relative bottom-[12px];
}
</style>

<script setup>
import { CrossIcon } from "~~/components/icons";
import CollapseBtn from "~~/components/buttons/collapse-btn.vue";
const isCollapsed = ref(false);

const staff = ref([
  { label: "Ed Dupree", selected: false },
  { label: "Susan White", selected: false },
  { label: "George Davis", selected: false },
]);

const toggleSelectStaff = (index) => {
  staff.value[index].selected = !staff.value[index].selected;
};
</script>
