<template>
  <tbody>
    <tr
      class="reports-details-table-row"
      v-for="item in data"
      :key="item.id"
      @handle="eventHandle"
      :data="item"
    >
      <td>{{ item.name ? item.name : "-" }}</td>
      <td>{{ item.annual_revenue ? item.annual_revenue : "-" }}</td>
      <td>{{ item.brand_category ? item.brand_category : "-" }}</td>
      <td>{{ item.city ? item.city : "-" }}</td>
      <td class="text-center">{{ item.company ? item.company : "-" }}</td>
    </tr>
  </tbody>
  <p class="pl-3 mt-3" v-show="!data.length">No data available at the moment</p>
</template>

<style scoped lang="postcss">
.reports-details-table-row {
  @apply bg-base-300 h-12;
  td {
    @apply border-y-2 border-secondary pl-2 border-r;
  }
  td:first-child {
    @apply border-l-2 rounded-l px-4;
  }
  td:last-child {
    @apply border-r-2 rounded-r capitalize px-4;
  }
}
</style>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const eventHandle = (event) => {
  emit("handle", event);
};
</script>
