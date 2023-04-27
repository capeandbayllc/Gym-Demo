<template>
  <div class="max-w-[90vw] mx-auto">
    <table class="border-separate">
      <table-header :columns="columns" :stickyHeader="stickyHeader" />
      <table-body v-if="!rowComponent" />
      <tbody>
        <component
          v-for="item in data"
          :key="item.id"
          :is="rowComponent"
          @handle="eventHandle"
          :data="item"
          @click="rowClicked(item)"
        />
      </tbody>
    </table>
    <p class="pl-3 mt-3" v-show="!data.length">{{ noDataMessage }}</p>
  </div>
</template>
<style scoped lang="postcss">
table {
  @apply w-[99.5%];
  border-spacing: 0 10px;
}
</style>
<script setup>
import TableHeader from "./table-header.vue";
import TableBody from "./table-body.vue";
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
  noDataMessage:{
    type: String,
    default: ''
  },
  rowComponent: Object,
  headerComponent: {
    type: Object,
    default: false,
  },
  stickyHeader: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["row-clicked", "handle"]);

const rowClicked = (data) => {
  emit("row-clicked", data);
};

const eventHandle = (event) => {
  emit("handle", event);
};
</script>
