<template>
  <div class="side-bar" :class="{ collapsed: collapsed, expanded: !collapsed }">
    <div class="side-bar-toggler" @click="toggleCollapsed" v-if="collapsed">
      <div class="side-bar-arrow">
        <arrow-icon
          direction="left"
          class="collapse-icon scale-150 self-end cursor-pointer mt-4"
        />
      </div>
      <div class="side-bar-text">Check In Button</div>
    </div>
    <side-bar-content v-else @close="toggleCollapsed" />
  </div>
</template>
<style scoped>
.side-bar {
  @apply relative right-0 z-20 h-full transition-all duration-200 ease-linear;
  &.collapsed {
    @apply w-7 flex bg-secondary;
  }
  &.expanded {
    @apply w-80 border border-secondary bg-neutral;
    max-height: 100vh;
    position: fixed;
  }
}

.side-bar-text {
  @apply align-top w-max absolute text-sm font-semibold;
  transform: translate(0, 100%) rotate(-90deg);
  transform-origin: 0 0;
  top: 50%;
}
.side-bar-arrow {
  @apply pl-1;
}
.side-bar-toggler {
  @apply flex cursor-pointer h-full w-fit;
}
</style>
<script setup>
import { ref, onMounted, nextTick } from "vue";
import SideBarContent from "./side-bar-content/index.vue";
import { ArrowIcon } from "~~/components/icons";
const collapsed = ref(true);

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const windowWidth = ref(null);

onMounted(async () => {
  windowWidth.value = window.innerWidth;
  await nextTick();
  window.addEventListener("resize", onResize);
});

const onResize = () => {
  windowWidth.value = window.innerWidth;
};
</script>
