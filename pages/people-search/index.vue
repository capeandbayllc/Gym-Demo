<template>
  <div
    class="page-people-search-center-container bg-gradient-to-b from-[#031222]/75 to-black"
  >
    <div>
      <input
        type="text"
        placeholder="Search"
        class="input w-2/4 bg-secondary/50 text-white text-lg"
        v-model="searchInput"
      />
    </div>
    <!-- <people-search-action
        @peopleSearchActionSelected="filterSelected"
      ></people-search-action> -->
    <search-list :filter="tblFilter"></search-list>
  </div>
</template>
<style scoped>
.page-people-search-center-container {
  @apply p-6 w-full max-w-7xl rounded-2xl border-2 border-secondary;
  .page-content {
    @apply block;
  }
}
</style>
<style></style>
<script setup>
import PeopleSearchAction from "./components/people-search-action.vue";
import SearchList from "./components/search-list.vue";
const searchInput = ref("Kev");
const tblFilter = ref(null);
const filterSelected = (value) => {
  tblFilter.value = value;
};
</script>
