<template>
  <div class="mt-5 club-search-tbl-content">
    <div v-if="!filter || filter === 'members'">
      <people-search-table
        :columns="columns"
        :items="membersData"
        filter="id"
        @row-clicked="clickRow"
      />
    </div>
  </div>
</template>
<script setup>
import PeopleSearchTable from "./people-search-table.vue";
import { request } from "~/api/utils/request";
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
    width: 200,
  },
  {
    label: "Alerts",
    width: 100,
  },
  {
    label: "Name",
    width: 200,
  },
  {
    label: "Communication",
    width: 250,
  },
  {
    label: "Location",
    width: 100,
  },
  {
    label: "Type",
    width: 120,
  },
  {
    label: "Info",
    width: 10,
  },
];

const membersData = ref([]);
const types = ["platinum", "gold", "silver", "bronze"];
request(member.query.browse).then(({ data }) => {
  data.data.members.data.forEach((member) => {
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
});

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
