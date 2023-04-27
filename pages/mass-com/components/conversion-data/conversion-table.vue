<template>
  <data-table
    :collapsed="true"
    :columns="columns"
    :data="data"
    :rowComponent="ConversionTableRow"
    class="conversion-table"
  />
</template>

<style lang="postcss">
.conversion-table {
  @apply h-80 overflow-x-auto w-full;
  table {
    @apply w-max md:w-full;

    th {
      @apply text-secondary p-0 text-left px-4;
    }
  }
}
</style>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import ConversionTableRow from "./conversion-table-row.vue";

const columns = [
  {
    field: "id",
    label: " ",
  },
  {
    field: "name",
    label: "Name",
  },
  {
    field: "unit",
    label: "Unit(s) Sold",
  },
  {
    field: "membership",
    label: "Membership(s) Sold",
  },
  {
    field: "revenue",
    label: "Revenue",
  },
];

const query = gql`
  query MassCommsConversionDataQuery {
    employee(first: 10) {
      data {
        id
        first_name
        last_name
        profile_photo_path
      }
      paginatorInfo {
        count
        perPage
        total
      }
    }
  }
`;
const { result } = useQuery(query);
const membershipTypes = ["platinum", "gold", "silver", "bronze"];
const getRandomMembershipType = () => {
  return membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
};

const data = computed(() => {
  return result?.value
    ? result.value.employee.data.map((employee) => {
        return {
          ...employee,
          name: `${employee.first_name} ${employee.last_name}`,
          src: employee.profile_photo_path,
          membership: getRandomMembershipType(),
          unit: `Unit #${Math.floor(Math.random() * 10)}`,
          revenue: `$${Number(Math.floor(Math.random() * 100).toFixed(2))}`,
        };
      })
    : [];
});
</script>
