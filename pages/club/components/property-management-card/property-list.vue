<template>
  <div class="property-container">
    <div class="columns-header">
      <label
        v-for="column in columns"
        class="column-item"
        :class="column.class"
      >
        {{ column.label }}
      </label>
    </div>
    <ul class="property-list">
      <li v-for="item in items" :key="item.id" class="property-row">
        <div class="w-[30%]">
          <label>{{ item.location }}</label>
        </div>
        <div class="w-[40%]">
          <label>{{ item.address }}</label>
        </div>
        <div class="w-[30%]">
          <label>{{ item.manager }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="postcss">
.property-container {
  @apply py-[10px] px-[20px] border-2 border-secondary;
}
.property-container {
  @apply border-b-[0px];
}
.columns-header {
  @apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
}
.column-item {
  @apply text-[12px];
}
.property-list {
  @apply mt-[5px] overflow-y-auto max-h-[260px];
}
.property-list::-webkit-scrollbar {
  @apply hidden;
}
.property-row {
  @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
}
.property-row .img-avatar {
  @apply shadow shadow-secondary shadow-lg w-[40px] h-[40px] rounded-[15px] border-[2px] border-solid border-secondary;
}
.property-row label {
  @apply m-auto;
}
</style>
<script setup>
import ClubButton from "../club-button.vue";
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  items: {
    type: Array,
    default: [],
  },
});
</script>
