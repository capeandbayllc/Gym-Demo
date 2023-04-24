<template>
  <button class="gr-membership-type" :class="membership">
    <span>
      {{ membership }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  membership: String,
  status: String,
  editIconOnHover: {
    type: Boolean,
    default: false,
  },
});
</script>
