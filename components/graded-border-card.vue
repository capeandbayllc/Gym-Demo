<template>
  <slot name="title">
    <h3 v-if="title !== '$omit$'">{{ title }}</h3>
  </slot>

  <section
    class="gradient-bg p-4 border border-secondary rounded-2xl w-fit mx-auto"
  >
    <div class="p-4 border border-secondary rounded-2xl bg-black">
      <slot name="content">
        <div>Default content</div>
      </slot>
    </div>
  </section>
</template>

<script setup>
/** simple card with the gr gradient along it's vertical axis insetting the content
 * also an optional title field which can either be replaced via slots, used via props,
 * or excluded completely via omission.
 */

const props = defineProps({
  title: {
    type: [String, null],
    default: "$omit$",
  },
});
</script>
