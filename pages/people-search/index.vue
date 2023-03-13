<template>
    <div class="page-people-search-center-container">
        <div class="-md:px-4 page-content flex-col">
            <div class="text-center">
              <input
                  type="text"
                  placeholder="Search"
                  class="input w-2/4 bg-base-content text-black text-lg"
                  v-model="searchInput"
              />
            </div>
            <people-search-action
                @peopleSearchActionSelected="filterSelected"
            ></people-search-action>
            <search-list :filter="tblFilter"></search-list>
        </div>
    </div>
</template>
<style scoped>
.page-people-search-center-container {
    @apply py-4 pr-5 w-full h-fit;
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
