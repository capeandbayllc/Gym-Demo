<template>
  <div class="address-container">
    <div class="columns-header">
      <label
        v-for="column in columns"
        class="column-item"
        :class="column.class"
      >
        {{ column.label }}
      </label>
    </div>
    <ul class="address-list">
      <li v-for="category in categorizedItems" :key="category.name">
        <label
          class="header block text-[14px] text-base-content text-left pt-4 pb-2"
          >{{ category.label }}</label
        >
        <ul>
          <li v-for="item in category.items" :key="item.id" class="address-row">
            <div class="w-[25%] flex">
              <div class="flex items-center gap-2">
                <img
                  class="rounded-lg h-12 w-12 object-cover bg-base-content/80 border-2 border-blue-400 hidden md:block"
                  :src="item.photo"
                  alt="{{ item.name }}"
                />
                <label class="ml-4 font-medium">{{ item.name }}</label>
              </div>
            </div>
            <div class="w-[20%] flex">
              <label>{{ item.company }}</label>
            </div>
            <div class="w-[20%] flex">
              <label>{{ item.phone }}</label>
            </div>
            <div class="w-[20%] flex">
              <label>{{ item.email }}</label>
            </div>
            <div class="w-[15%] hidden md:flex md:items-center">
              <ClubButton :btn_type="default" :label="'Contact'"></ClubButton>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="postcss">
.address-container {
  @apply py-[10px] px-[20px] border-2 border-secondary;
}
.columns-header {
  @apply border-b-[3px] border-secondary text-secondary py-[8px] px-[15px] mt-[15px] flex;
}
.column-item {
  @apply text-[12px];
}
.address-list {
  @apply mt-[5px] overflow-auto max-h-[240px];
}
.address-list::-webkit-scrollbar {
  @apply hidden;
}
.address-row {
  @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
}
.address-row .img-avatar {
  @apply shadow shadow-secondary shadow-lg rounded-[15px] w-[40px] h-[40px] border-[2px] border-solid border-solid;
}
.address-row label {
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
  categorizedItems: {
    type: Array,
    default: [],
  },
});
</script>
