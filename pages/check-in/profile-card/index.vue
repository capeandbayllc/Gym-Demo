<template>
  <div class="checkin-profile-card">
    <profile-info
      @toggle-detail="$emit('toggle-detail', $event)"
      @open-engage="$emit('open-engage')"
      :row="row"
    />
    <profile-options
      :selected="activeOption"
      @update:selected="$emit('select-option', $event)"
      @update:check-in="$emit('check-in', $event)"
    />
  </div>
</template>
<style scoped>
.checkin-profile-card {
  @apply border bg-base-300 border-secondary rounded flex flex-col flex-1 -lg:grow-[2]   xl:flex-row xl:space-x-16 px-3 xl:px-8 pt-7 pb-4;
  width: 49rem;
}
</style>
<script setup>
import ProfileInfo from './profile-info.vue'
import ProfileOptions from './profile-options.vue'

const props = defineProps({
    activeOption: String,
    row:{
      type:Object,
    }
})

function test() {
  console.log(arguments, 111)
}
</script>
