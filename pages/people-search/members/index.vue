<template>
  <div>
    <div class="text-center mb-4">
      <AddIcon
        class="aspect-square w-10 h-auto border inline-block border-secondary rounded-full font-semibold cursor-pointer"
      />
      <p class="text-xs mt-1">Update Member</p>
    </div>
    <div class="py-4 pr-5 w-full h-fit">
      <div
        class="bg-secondary flex justify-between rounded-t-lg pl-6 p-3 font-semibold mx-auto w-full max-w-7xl"
      >
        <span>Members</span>
        <div class="flex items-center h-8">
          <button class="mx-4" @click="isSearchEnable = !isSearchEnable">
            <SearchIcon />
          </button>
          <input
            v-if="isSearchEnable"
            type="text"
            placeholder="Search"
            class="input input-sm max-w-xs bg-secondary border border-base-content rounded"
          />
        </div>
      </div>
      <div
        class="-md:px-4 block border border-secondary bg-base-300 rounded-b p-7 mx-auto w-full max-w-7xl flex-col"
      >
        <div class="flex flex-row justify-between space-x-4 mb-4">
          <div class="flex gap-4">
            <select-box
              :items="filterBy"
              value=""
              :label="'Filter By'"
              :secondary="true"
              class="w-40 filter-selected"
            >
            </select-box>
          </div>
        </div>
        <div>
          <data-table
            :columns="columns"
            :data="members"
            :row-component="MemberTableRow"
            class="h-96 overflow-y-auto pr-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MemberTableRow from "./components/member-table-row.vue";
import { SearchIcon, AddIcon } from "@/components/icons";
import { useQuery } from "@vue/apollo-composable";
import member from "~/api/queries/member";

const { result } = useQuery(member.query.browse);
const members = ref([]);
const membershipTypes = ["platinum", "gold", "silver", "bronze"];

const getRandomMembershipType = () => {
  return membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
};
watch(() => {
  members.value = result?.value?.members?.data.map((m) => {
    return {
      ...m,
      membership_type: getRandomMembershipType(),
    };
  });
});

const isSearchEnable = ref(false);
const filterBy = [
  {
    value: "1",
    label: "App Referal",
  },
  {
    value: "2",
    label: "Snapshot",
  },
  {
    value: "3",
    label: "Grand Opening",
  },
  {
    value: "4",
    label: "Free Trial",
  },
  {
    value: "5",
    label: "Streaming Preview",
  },
];

const columns = [
  {
    label: "Created",
    class: "text-secondary",
  },
  {
    label: "First Name",
    class: "text-secondary",
  },
  {
    label: "Last Name",
    class: "text-secondary",
  },
  {
    label: "mobile",
    class: "text-secondary",
  },
  {
    label: "email",
    class: "text-secondary",
  },
  {
    label: "Location",
    class: "text-secondary",
  },
  {
    label: "Type",
    class: "text-secondary",
  },
  {
    label: "Add-ons",
    class: "text-secondary",
  },
  {
    label: "Action",
    class: "",
  },
];
</script>
