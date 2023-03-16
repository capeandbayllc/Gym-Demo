<template>
  <ul>
    <li v-for="(event, ix) in events" :key="ix">
      <div>
        <span>{{ event.name }}</span>
        <span>{{ event.time }}</span>
        <span>{{ event.subject }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    default: [],
  },
});
</script>
