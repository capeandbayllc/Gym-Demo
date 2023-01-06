<template>
    <div class="page-people-search-center-container">
        <div class="page-title">People Search</div>
        <div class="-md:px-4 page-content flex-col">
            <input type="text" placeholder="Search" class="input w-full bg-base-content text-black text-lg"  v-model="searchInput"/>
            <people-search-action @peopleSearchActionSelected="filterSelected"></people-search-action>
            <search-list :filter="tblFilter"></search-list>
        </div>
    </div>
</template>
<style scoped>
.page-people-search-center-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply block p-7 w-fit m-auto;
    }
}
</style>
<style>
    @media (max-width:1300px){
        .page-content {width:90% !important}
    }
</style>
<script setup>
import PeopleSearchAction from "./components/people-search-action.vue";
import SearchList from "./components/search-list.vue";
const searchInput =  ref("Kev");
const tblFilter = ref(null);
const filterSelected = (value) => {
    tblFilter.value = value;
};
</script>