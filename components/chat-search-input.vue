<template>
  <div class="search-input-wrapper">
    <input
      :class="{
        'search-input': true,
        'bg-secondary': secondary,
        'border-secondary': border === 'secondary',
        'bg-base-content/20': neutral,
        'border-base-content/20': border === 'neutral',
        'bg-transparent': transparent,
        'h-6 text-sm': size === 'xs',
        'h-7 text-base': size === 'sm',
        'h-8 text-base': size === 'md',
        'search-input-lg text-lg': size === 'lg',
      }"
      :placeholder="placeholder"
      :modelValue="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<style scoped>
.search-input {
  @apply pr-3 w-full py-1 rounded border overflow-hidden px-2 text-right;
}
.search-input-lg {
  height: 34px;
}

.search-input:hover,
.search-input:focus {
  @apply text-left outline-0 bg-transparent;
}

.search-input-wrapper {
  @apply flex items-center relative pb-1;
}

.search-submit {
  font-size: 1.5rem;
  margin-left: auto;
  background: 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  transition: background 200ms ease-out;
  width: calc(var(--size) - 10px);
  height: calc(var(--size) - 10px);
  color: var(--clr-body);
}
</style>
<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "Search",
  },
  size: {
    type: String,
    default: "sm",
  },
  border: {
    type: String,
    default: "secondary",
  },
  secondary: {
    type: Boolean,
    default: true,
  },
  neutral: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  modelValue: String,
});
</script>
