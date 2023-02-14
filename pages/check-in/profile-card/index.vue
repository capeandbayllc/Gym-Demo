<template>
  <div class="checkin-profile-card">
    <profile-info
      @toggle-detail="$emit('toggle-detail', $event)"
      @open-engage="$emit('open-engage')"
    />
    <profile-options
      :selected="activeOption"
      @update:selected="$emit('select-option', $event)"
    />
  </div>
</template>
<style scoped>
.checkin-profile-card {
  @apply border bg-base-300 border-secondary rounded flex flex-col flex-1 -lg:grow-[2]  xl:flex-row xl:space-x-16 px-3 xl:px-8 pt-7 pb-4;
}
</style>
<script setup>
import ProfileInfo from './profile-info.vue'
import ProfileOptions from './profile-options.vue'

const props = defineProps({
    activeOption: String
})
</script>