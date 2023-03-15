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
  @apply bg-neutral-700 w-full rounded border overflow-hidden px-2 md:ml-10 transition-all duration-300;
}
.search-input::placeholder {
  @apply left-[95%] absolute transition-all duration-300;
  top: 2px;
  margin-left: -55px;
}
.search-input:hover::placeholder,
.search-input:focus::placeholder {
  @apply left-[5%] pl-0 ml-0;
}
.search-input-lg {
  height: 34px;
}

.search-input:hover,
.search-input:focus {
  @apply outline-0 bg-transparent;
}

.search-input-wrapper {
  @apply flex items-center relative w-fit;
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
