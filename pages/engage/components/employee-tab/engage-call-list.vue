<template>
  <div class="engage-call-list-container">
    <h3 class="text-secondary text-lg">Upgrades:</h3>
    <data-table
      :columns="columns"
      :data="members2"
      :row-component="CallListItem"
      :stickyHeader="true"
      class="h-80 text-xs overflow-y-auto"
    />
  </div>
</template>
<style scoped>
.engage-call-list-container {
  @apply col-span-2 pb-1 -md:col-span-3;
}
</style>
<script setup>
import CallListItem from "./call-list-item.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import member from "~/api/queries/member";
import { request } from "~/api/utils/request";

const { result } = useQuery(member.query.browse);

const members = ref([]);

watch(result, (nv, ov) => {
  if (result) {
    console.log("result", result);
    members.value = result.value.members.data;
  }
});

const membershipTypes = ["platinum", "gold", "silver", "bronze"];

const getRandomMembershipType = () => {
  return membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
};

const members2 = computed(() => {
  return members.value.map((item) => {
    return {
      ...item,
      membership_type: getRandomMembershipType(),
      updated_at: new Date(item.updated_at)
        .toLocaleDateString()
        .replaceAll("/", "."),
    };
  });
});

const columns = [
  "",
  "Name",
  "Location",
  "",
  "Membership Type",
  "Date Upgraded",
  "",
];
</script>
