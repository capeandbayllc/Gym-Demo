<template>
  <div class="checkin-profile-card">
    <profile-info
      @create-alert="$emit('create-alert')"
            @create-note="$emit('create-note')" @open-engage="$emit('select-option','engage')" />
    <profile-options
      :selected="activeOption"
      @update:selected="$emit('select-option', $event)"
    />
  </div>
</template>
<style scoped>
.checkin-profile-card {
  @apply border bg-black border-secondary rounded flex flex-col flex-grow-0 -lg:grow-[2]  xl:flex-row xl:space-x-16 px-3 xl:px-12 pt-7 pb-4;
}
</style>
<script setup>
import ProfileInfo from './profile-info.vue'
import ProfileOptions from './profile-options.vue'

const props = defineProps({
    activeOption: String
})
</script>