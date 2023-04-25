<template>
  <img :src="img" />
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  firstName: String,
  lastName: String,
});
const img = computed(
  () =>
    "https://ui-avatars.com/api/?name=" +
    props.firstName[0].toUpperCase() +
    "+" +
    props.lastName[0].toUpperCase() +
    "&color=FFFFFF&background=0079FF"
);
</script>
