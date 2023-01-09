<template>
    <card
        title="" class="global-search-popup-card"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="global-search-popup-container">
                <input type="text" placeholder="Search" class="input w-full bg-primary-content text-black text-lg"  v-model="searchInput"/>
                <people-search-action @peopleSearchActionSelected="filterSelected" :actions-btn="actionsBtn"></people-search-action>
                <search-list :filter="tblFilter" class="modal_scroll" ></search-list>
            </div>
        </template>
    </card>
</template>
<style scoped>
 .global-search-popup-card {
    @apply rounded-2xl bg-neutral;
    .global-search-popup-container {
        @apply pl-2 pr-2 pt-6 pb-6;
        .modal_scroll{
            @apply overflow-y-auto;
            height: 60vh;
        }
    }
}

</style>
<style>
	
</style>
<script setup>
import PeopleSearchAction from "~~/pages/people-search/components/people-search-action.vue";
import SearchList from "~~/pages/people-search/components/search-list.vue";
const searchInput =  ref("Kev");
const tblFilter = ref(null);
const filterSelected = (value) => {
    tblFilter.value = value;
};
const actionsBtn = [
    {
        name: 'Leads',
        type: 'leads'
    },
    {
        name: 'Members',
        type: 'members'
    },
    {
        name: 'Employees',
        type: 'employees'
    },
    {
        name: 'Segments',
        type: 'segments'
    },
];
</script>