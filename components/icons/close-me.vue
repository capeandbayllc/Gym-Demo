<template>
  <div class="cross-container">
    <div
      class="border-[2px] p-[3px] overflow-hidden rounded-full hover:bg-secondary"
    >
      <div
        class="cross"
        :class="{ 'w-6 h-6 rounded-full': size == 'big' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: String,
});
</script>

<style scoped lang="postcss">
.cross {
  @apply relative w-4 h-4 rotate-0 hover:bg-secondary mr-[1px];
}

.cross::before,
.cross::after {
  content: "";
  @apply absolute bg-base-content transition-all duration-300;
}

.cross::before {
  @apply top-[46%] left-[4%] w-full h-[2px] rounded opacity-100 rotate-[-45deg];
}

.cross::after {
  @apply top-0 left-[50%] w-[2px] h-[100%] rounded opacity-100 rotate-[-45deg];
}

.cross-container:hover .cross::before {
  @apply opacity-0;
}

.cross-container:hover .cross::after {
  animation: rotateAnimation 0.3s ease forwards;
}

.cross::after {
  animation: rotateReverseAnimation 0.5s ease both;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(-45deg);
  }
  to {
    transform: rotate(-135deg);
  }
}

@keyframes rotateReverseAnimation {
  from {
    transform: rotate(-135deg);
  }
  to {
    transform: rotate(-45deg);
  }
}
</style>
