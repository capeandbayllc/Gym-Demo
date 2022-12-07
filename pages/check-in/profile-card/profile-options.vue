<template>
  <div class="profile-options-container">
    <div class="profile-options">
      <profile-option-item
        v-for="item in options"
        :key="item.key"
        :model-value="item.key === selected"
        @update:modelValue="handleSelect(item.key, $event)"
        :label="item.label"
      />
    </div>
    <div class="btn-close-selection">Close Member Selection</div>
  </div>
</template>
<style scoped>
.profile-options-container {
  @apply flex flex-col space-y-8 items-center;
  .profile-options {
    @apply flex flex-col space-y-12 border border-secondary rounded w-full xl:w-48 p-5;
  }
  .btn-close-selection {
    @apply w-full cursor-pointer bg-base-content text-secondary rounded p-2 font-semibold;
  }
}
</style>
<script setup>
import ProfileOptionItem from './profile-option-item.vue'
const props = defineProps({
    selected: String
})

const options = [{
    label: "POS",
    key: "pos",
    selected: false
}, {
    label: "Calendar",
    key: "calendar",
    selected: false
}, {
    label: "Notifications",
    key: "notification",
    selected: false
}, {
    label: "Guest Pass",
    key: "guest-pass",
    selected: false
}, {
    label: "Note Pad",
    key: "note",
    selected: false
}]

const emit = defineEmits(["update:selected"])
const handleSelect = (key, value) => {
  if (value) {
        emit('update:selected', key)
  } else {
        emit('update:selected', null)
  }
} 
</script>
