<template>
  <tbody>
    <tr
      class="reports-table-row"
      v-for="item in data"
      :key="item.id"
      @handle="eventHandle"
      :data="item"
    >
      <td>
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            v-model="data.agreeElectronics"
          />
          <star-icon clear class="text-secondary text-2xl mb-1" />
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="rowClicked(item)"
          >
            {{ item.report_name ? item.report_name : "-" }}
          </button>
        </div>
      </td>
      <td>{{ item.description ? item.description : "-" }}</td>
      <td>{{ item.report_type ? item.report_type : "-" }}</td>
      <td>{{ item.date_created ? item.date_created : "-" }}</td>
      <td>{{ item.last_run_date ? item.last_run_date : "-" }}</td>
      <td>{{ item.created_by ? item.created_by : "-" }}</td>
      <td>{{ item.last_edited_by ? item.last_edited_by : "-" }}</td>
    </tr>
  </tbody>
  <p class="pl-3 mt-3" v-show="!data.length">No data available at the moment</p>
</template>

<style scoped lang="postcss">
.reports-table-row {
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
  input[type="checkbox"] {
    @apply rounded-[6px] bg-base-content appearance-none m-0 h-5 w-5 border border-neutral-content outline-none focus:border;
  }
  input[type="checkbox"]:checked {
    @apply bg-secondary border-primary;
  }
}
</style>

<script setup>
import { StarIcon } from "~/components/icons";
const props = defineProps({
  data: {
    type: Array,
    default: [],
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
