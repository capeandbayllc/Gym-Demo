<template>
  <div
    class="menu-bg"
    :class="{
      'bg-secondary-focus border-primary-content': isMain,
      'bg-secondary-content border-info-content': !isMain,
    }"
    :style="`background-image: url('/${
      activeKey ? activeKey : 'main-bg'
    }.png');`"
  ></div>
</template>
<style scoped>
.menu-bg {
  @apply absolute rounded-full bg-contain;
  width: 36vw;
  height: 36vw;
  top: 2vw;
  right: 2vw;
  border-width: 24px;
  background-repeat: no-repeat;
  background-position: center;
  transform: scale(0.9);
}
</style>
<script setup>
import { computed } from "vue";

const props = defineProps({
  activeKey: String,
});

const isMain = computed(() => !props.activeKey || props.activeKey == "main-bg");
</script>
