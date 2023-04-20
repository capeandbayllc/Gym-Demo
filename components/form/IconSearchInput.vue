<template>
  <div class="mb-[12px] icon-search-input">
    <div
      class="search-icon"
      :class="{
        'text-secondary': openSearchInput,
        'text-white': !openSearchInput,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.026"
        height="14.967"
        viewBox="0 0 15.026 14.967"
      >
        <path
          fill="currentColor"
          id="search_icon"
          data-name="search icon"
          d="M415.835,566.937l-2.582-2.515h0l-.061-.092a.61.61,0,0,0-.854,0h0a6.115,6.115,0,0,1-7.9.254,5.729,5.729,0,0,1-1.282-7.6,6.081,6.081,0,0,1,7.571-2.22,5.784,5.784,0,0,1,3.241,7.021.581.581,0,0,0,.137.578.619.619,0,0,0,.581.174.6.6,0,0,0,.446-.4h0a6.974,6.974,0,0,0-3.757-8.417,7.347,7.347,0,0,0-9.111,2.352,6.9,6.9,0,0,0,1.022,9.124,7.379,7.379,0,0,0,9.418.385l2.287,2.227a.617.617,0,0,0,.854,0,.585.585,0,0,0,.009-.83l-.009-.008h0Z"
          transform="translate(-400.993 -553.013)"
        />
      </svg>
    </div>
    <input
      type="text"
      placeholder="Search"
      class="search-input"
      :class="height ?? 'h-[50px]'"
      @focusin="changeOpenSearchInput(true)"
      @focusout="changeOpenSearchInput(false)"
      v-model="searchInput"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
  height: String || Number
})

const openSearchInput = ref(false);
const changeOpenSearchInput = (value) => {
  openSearchInput.value = value;
};
</script>
<style scoped>
.icon-search-input .search-input::placeholder {
  @apply text-white font-light;
}
.icon-search-input .search-input {
  @apply pl-[45px] text-white w-full bg-primary rounded-[19px] md:w-[427px] block;
}

.icon-search-input .search-input:focus {
  @apply outline-none border-[2px] border-secondary bg-white text-secondary;
}
.icon-search-input .search-icon {
  @apply relative top-[31px] left-[18px] w-0;
}
</style>
