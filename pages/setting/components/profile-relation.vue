<template>
  <multi-select
    :options="locations"
    label="Home Location(s)"
    v-model="form.location"
  />
  <multi-select :options="roles" label="Role(s)" v-model="form.roles" />
  <multi-select
    :options="departments"
    label="Department(s)"
    v-model="form.departments"
  />
  <multi-select :options="teams" label="Team(s)" v-model="form.teams" />
  <multi-select
    :options="security_roles"
    label="Security Role(s)"
    v-model="form.security_roles"
    :disabled="true"
  />
</template>
<script setup>
import { ref } from "vue";

const form = ref({
  location: [],
});
const locations = new Array(6)
  .fill({ value: 1 })
  .map((_, ndx) => ({ value: ndx, label: "Club " + ndx }));
const teams = new Array(6)
  .fill({ value: 1 })
  .map((_, ndx) => ({ value: ndx, label: "Team " + ndx }));
const security_roles = new Array(6)
  .fill({ value: 1 })
  .map((_, ndx) => ({ value: ndx, label: "Role " + ndx }));
const roles = [
  {
    value: 1,
    label: "Front Desk",
  },
  {
    value: 2,
    label: "Trainer",
  },
  {
    value: 3,
    label: "Trash",
  },
];
const departments = [
  {
    value: 1,
    label: "Operations",
  },
  {
    value: 2,
    label: "Memberships",
  },
  {
    value: 3,
    label: "Group Fitness",
  },
];
</script>
