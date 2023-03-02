<template>
  <ul
    class="flex gap-4 bg-[#18203A] py-2 px-6 w-fit rounded-md border-2 border-[#073A76]"
  >
    <li
      :class="{
        'selected-button': currentValue === btn,
      }"
      class="px-6 py-1 rounded-md border-2 border-transparent font-bold"
      v-for="btn in choices"
      :key="btn"
    >
      <button
        class="capitalize"
        @click="
          {
            currentValue = btn;
            if (emitEvents) $emit(btn);
          }
        "
      >
        {{ String(btn).replaceAll("_", " ") }}
      </button>
    </li>
  </ul>
</template>

<script setup>
/**
 * Btn Group
 *  - give an array of 'choices' as strings, ex: ['one', 'two'] etc.
 *  - component may be bound to using v-model to get the active value.
 *  - you may set emitEvents to true and handle them via component consumer
 *  - emitted events (aside from update:modelValue) will be emitted as their initial unformatted string.
 *  ex: an array containing ['is_over', 'show']  would be listened to like this: `@is_over="handleIsOver"`
 *    dynamic event emission is not required but included for future edge cases where it may be necessary
 *
 *    for choices with spaces, use underscores instead, ex: ['is_over']
 *    use lower case utf-8 characters, it will be formatted by css
 */

const props = defineProps({
  choices: {
    type: Array,
    default: [],
  },
  modelValue: {
    type: String,
    default: "",
  },
  emitEvents: {
    type: Boolean,
    default: false,
  },
});

/** Component State */
const currentValue = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);
watch(currentValue, (nv, ov) => emit("update:modelValue", nv));
</script>

<style scoped>
.selected-button {
  @apply bg-[#0074C8] border-2 border-[#073A76];
}
</style>
