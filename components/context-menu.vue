<template>
  <div
    tabindex="1"
    ref="contextMenu"
    class="context-menu"
    @blur="$emit('isProfileMenuOpen', false)"
    @focus="$emit('isProfileMenuOpen', true)"
  >
    <slot />
  </div>
</template>
<style scoped>
.context-menu {
  @apply absolute shadow opacity-0 pointer-events-none;
}
:focus {
  @apply opacity-100 z-50 pointer-events-auto outline-none;
}
</style>
<script setup>
import { ref } from "vue";

const contextMenu = ref(null);
const open = () => {
  contextMenu.value.focus();
};
const close = () => {
  contextMenu.value.blur();
};
defineExpose({ open, close });
</script>
