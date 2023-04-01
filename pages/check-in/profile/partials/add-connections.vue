<template>
  <div
    class="border-2 border-secondary rounded-2xl p-4 pl-24 max-w-3xl mx-auto block w-full mt-16"
  >
    <div class="flex justify-between items-end">
      <h6 class="text-xl font-semibold">Add Connection</h6>
      <div class="bg-secondary p-2 rounded-2xl ml-auto w-fit">
        <MembersIcon />
      </div>
    </div>
    <TextField
      id="lead-member-cnt"
      label="Lead/Member to Connect"
      placeholder="Search by last name or email"
    />
    <div>
      <select id="relationship" class="">
        <option selected value="0" key="0">Relationship</option>
        <option v-for="item in relationships" :key="item.id" value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { MembersIcon } from "@/components/icons";
import TextField from "./textfield.vue";
</script>
