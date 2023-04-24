<template>
  <button class="gr-membership-type" :class="membership">
    <span>
      {{ membership }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  membership: {
    type: String,
    default: "bronze",
  },
  status: String,
  editIconOnHover: {
    type: Boolean,
    default: false,
  },
});
</script>
