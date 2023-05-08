<template>
  <div class="w-full">
    <input
      type="text"
      placeholder="Search"
      class="input w-full bg-base-content text-black text-lg mb-8"
      :value="searchValue"
      @input="updateSearchValue"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  searchValue: {
    type: String,
  },
});

const emit = defineEmits(["update"]);

const searchInput = ref(props.searchValue);

watch(searchInput, (newVal) => {
  emit("update", newVal);
});

const updateSearchValue = (event) => {
  searchInput.value = event.target.value;
};
</script>
