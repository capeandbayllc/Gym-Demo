<template>
  <div class="inventory-container">
    <div class="columns-header">
      <label
        v-for="column in columns"
        class="column-item"
        :class="column.class"
      >
        {{ column.label }}
      </label>
    </div>
    <ul class="inventory-list">
      <li v-for="item in items" :key="item.id" class="inventory-row">
        <div class="w-[30%]">
          <label>{{ item.name }}</label>
        </div>
        <div class="w-[30%]">
          <ClubButton
            :btn_type="getKlass(item.quantity)"
            :label="item.quantity"
          ></ClubButton>
        </div>
        <div class="w-[40%]">
          <label>{{ item.item_number }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="postcss">
.inventory-container {
  @apply py-[10px] px-[20px] border-2 border-secondary;
}
.inventory-container {
  @apply border-b-[0px];
}
.columns-header {
  @apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
}
.column-item {
  @apply text-[12px];
}
.inventory-list {
  @apply mt-[5px] overflow-y-auto max-h-[260px];
}
.inventory-list::-webkit-scrollbar {
  @apply hidden;
}
.inventory-row {
  @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
}
.inventory-row .img-avatar {
  @apply shadow shadow-secondary shadow-lg w-[40px] h-[40px] rounded-[15px] border-[2px] border-solid border-secondary;
}
.inventory-row label {
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

const getKlass = (itemCount) => {
  if (itemCount <= 2) {
    return "bg-error bg-opacity-60";
  } else if (itemCount <= 5) {
    return "bg-warning bg-opacity-60";
  } else {
    return "bg-success bg-opacity-60";
  }
};
</script>
