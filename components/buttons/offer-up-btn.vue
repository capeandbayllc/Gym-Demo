<template>
  <button
    type="button"
    class="bg-secondary flex items-center justify-between group/offer-btn gap-2 px-2 text-base rounded-xl font-semibold py-1 h-10 hover:bg-white hover:text-secondary transition-all"
    @click="$emit('click', context)"
  >
    <slot name="copy">
      <span>Offer Up</span>
      <span
        class="w-5 rotate-90 fill-white group-hover/offer-btn:-scale-y-100 transition-all group-hover/offer-btn:fill-secondary duration-300 ease-out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M489 377c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V56c0-13.3-10.7-24-24-24s-24 10.7-24 24V398.1l-55-55c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0l96-96zM137 39c-9.4-9.4-24.6-9.4-33.9 0L7 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L137 39z"
          />
        </svg>
      </span>
    </slot>
  </button>
</template>

<script setup>
/** context is added for cases where this might be in a list or such among many others. */
const props = defineProps({
  context: {
    type: [Object, String, Number, Date, null, undefined],
    default: null,
  },
});
</script>
