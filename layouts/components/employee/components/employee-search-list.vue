<template>
  <div class="">
    <div class="columns-header">
      <label
        v-for="column in columns"
        class="column-item"
        :class="column.class"
      >
        {{ column.label }}
      </label>
    </div>
    <ul class="employee-list">
      <li v-for="item in items" :key="item.id" class="employee-row">
        <div class="w-48">
          <img :src="item.img_url" alt="Image" class="img-avatar" />
        </div>
        <div class="flex text-center justify-evenly w-full">
          <label class="text-sm textce">{{ item.location }}</label>
        </div>
        <div class="flex text-center justify-evenly w-full">
          <label class="text-sm textce">{{ item.day }}</label>
        </div>
        <div class="flex text-center justify-evenly w-full">
          <label class="text-sm textce">{{ item.hours }}</label>
        </div>
        <div class="flex text-center justify-evenly w-full">
          <label class="text-sm textce">{{ item.in }}</label>
        </div>
        <div class="flex text-center justify-evenly w-full">
          <label class="text-sm textce">{{ item.out }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.columns-header {
  color: #0077ac;
  border-bottom: 3px solid #0077ac;
  padding: 8px 15px;
  margin-top: 15px;
  display: flex;
  @apply justify-evenly;
}
.column-item {
  font-size: 12px;
}
.employee-list {
  margin-top: 5px;
  overflow-y: auto;
  max-height: 230px;
}
.employee-row {
  display: flex;
  margin-top: 8px;
  background: #181916;
  border: 2px solid #0075c9;
  border-radius: 10px;
  padding: 8px 15px;
  color: lightgrey;
}
.employee-row .img-avatar {
  border-radius: 15px;
  width: 40px;
  height: 40px;
  border: 2px solid #0075c9;
  box-shadow: 0px 2px 15px #0075c9;
}
.employee-row label {
  margin: auto;
}
</style>
<script setup>
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
