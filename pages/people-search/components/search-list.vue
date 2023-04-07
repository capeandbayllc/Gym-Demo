<template>
  <div class="mt-5 club-search-tbl-content">
    <people-search-table
      v-if="!filter || filter === 'members'"
      :columns="columns"
      :items="membersData"
      filter="id"
      @row-clicked="clickRow"
    />
  </div>
</template>
<script setup>
import PeopleSearchTable from "./people-search-table.vue";
import AlertSearchTable from "./alert-search-table.vue";
import { useQuery } from "@vue/apollo-composable";

import member from "~/api/queries/member";
import { getRandomInt } from "~/api/utils/number";
const props = defineProps({
  filter: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["row-clicked"]);

const clickRow = (data) => {
  emit("row-clicked", data);
};

const columns = [
  {
    label: "Segment",
  },
  {
    label: "Alerts",
  },
  {
    label: "Name",
  },
  {
    label: "Communication",
  },
  {
    label: "Location",
  },
  {
    label: "Type",
  },
  {
    label: "Info",
  },
];

const membersData = ref([]);
const types = ["platinum", "gold", "silver", "bronze"];

const { result } = useQuery(member.query.browse);
watch(result, () => {
  console.info("data.data.members", result.value.members);
  result.value.members.data.forEach((member) => {
    membersData.value.push(
      Object.assign(
        {},
        {
          segment: "New Member",
          type: types[getRandomInt(types.length - 1)],
        },
        member
      )
    );
  });
})

const employeeData = ref([]);
watch(
  () => props.filter,
  (newValue) => {
    if (newValue === "employees") {
      employeeData.value = [...membersData];
    } else {
      employeeData.value = [];
    }
  }
);
</script>
