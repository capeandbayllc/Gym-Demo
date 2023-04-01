<template>
  <div
    class="border-2 border-secondary rounded-2xl p-4 max-w-3xl mx-auto block w-full mt-16"
  >
    <div class="flex justify-between items-end">
      <h6 class="text-xl font-semibold">Add Connection</h6>
      <div class="bg-secondary p-2 rounded-2xl ml-auto w-fit">
        <MembersIcon />
      </div>
    </div>
    <div class="flex gap-4 mt-4">
      <TextField
        id="lead-member-cnt"
        label="Lead/Member to Connect"
        placeholder="Search by last name or email"
      />
      <div class="w-full">
        <label for="relationship" class="gr-base-label"> Relationship </label>
        <select
          id="relationship"
          class="gr-base-textfield gr-neutral-selection"
        >
          <option selected value="0" key="0">Relationship</option>
          <option v-for="item in relationships" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MembersIcon } from "@/components/icons";
import TextField from "./textfield.vue";

let relationships = [
  {
    id: 1,
    name: "Relationship 1",
  },
  {
    id: 2,
    name: "Relationship 2",
  },
  {
    id: 3,
    name: "Relationship 3",
  },
  {
    id: 4,
    name: "Relationship 4",
  },
];
</script>
