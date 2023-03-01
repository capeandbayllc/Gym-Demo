<template>
  <div
    class="w-full from-secondary to-transparent bg-gradient-to-r py-2 px-6 border-l-4 border-white rounded-md"
  >
    <slot name="title">
      <h1 class="text-4xl font-semibold">{{ title }}</h1>
    </slot>
    <div class="mt-2 flex gap-4 items-center">
      <slot name="subtitle">
        <span>{{ subtitle }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup>
/**
 * Section Header
 *  - you can either use props, or slots for more control over the way content is shown.
 *  - simply use whichever method you require and component will handle the rest.
 *  - choose either props OR slots. title/subtitle are independant so you may mix and match methods.
 */

const props = defineProps({
  title: {
    type: String,
    default: "Default Section Heading Title",
  },
  subtitle: {
    type: String,
    default: "Default Section Subtitle",
  },
});
</script>
