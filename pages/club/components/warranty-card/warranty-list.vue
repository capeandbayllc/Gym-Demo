<template>
  <div class="warranty-container">
    <div class="columns-header">
      <label
        v-for="column in columns"
        class="column-item"
        :class="column.class"
      >
        {{ column.label }}
      </label>
    </div>
    <ul class="warranty-list">
      <li v-for="item in items" :key="item.id" class="warranty-row">
        <div class="w-[25%]">
          <label>{{ item.type }}</label>
        </div>
        <div class="w-[25%]">
          <label>{{ item.company }}</label>
        </div>
        <div class="w-[25%]">
          <ClubButton
            :btn_type="item.expiration.klass"
            :label="item.expiration.label"
          ></ClubButton>
        </div>
        <div class="w-[25%]">
          <ClubButton :btn_type="default" :label="View"></ClubButton>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="postcss">
.warranty-container {
  @apply pt-[10px] px-[20px] border-2 border-secondary;
}
.warranty-container {
  @apply border-b-[0px];
}
.columns-header {
  @apply text-secondary border-b-[3px] border-secondary py-[8px] px-[15px] mt-[15px] flex;
}
.column-item {
  @apply text-[12px];
}
.warranty-list {
  @apply mt-[5px] overflow-y-auto max-h-[260px];
}
.warranty-list::-webkit-scrollbar {
  @apply hidden;
}
.warranty-row {
  @apply flex mt-[8px] bg-base-200 border-[3px] border-solid border-secondary rounded-[10px] py-[8px] px-[15px] text-base-content/90;
}
.warranty-row .img-avatar {
  @apply shadow shadow-secondary shadow-lg w-[40px] h-[40px] rounded-[15px] border-[2px] border-solid border-secondary;
}
.warranty-row label {
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
