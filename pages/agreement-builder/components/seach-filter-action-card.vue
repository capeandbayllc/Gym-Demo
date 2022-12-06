<template>
    <simple-card title="">
        <div class="search-filer-action-card-content">
            <div class="search-filer-action-title">
                <search-input class="agreement-search" neutral size="md" border="neutral" v-model="seachInput"/>
                <div class="search-filer-action">
                    <select-box
                        :items="filterType"
                        value=""
                        :label="'Member Type'" 
                        class="w-48">
                    </select-box>
                    <select-box
                        :items="filterType"
                        value=""
                        :label="'Location Type'" 
                        class="w-48">
                    </select-box>
                    <select-box
                        :items="filterType"
                        value=""
                        :label="'Sort by: Featured'" 
                        class="w-48">
                    </select-box>
                </div>
            </div>
            <div class="mt-10" v-if="seachInput">
                <div class="text-xl font-semibold">Leads</div>
                <people-lead-table  class="search-filter-table"/>
                <div class="text-xl font-semibold mt-5">Members</div>
                <people-member-table class="search-filter-table" />
            </div>
        </div>
    </simple-card>
</template>
<style>
    .agreement-search .search-input  {
        background-color: transparent !important;
        border: 0;
        padding-right: 0;
        text-align: left;
        font-size: 20px !important;
    }
</style>
<style scoped>
.search-filer-action-card-content {
    @apply pt-1 pb-2 px-3 bg-transparent items-center w-full;
    .search-filer-action-title {
        @apply flex flex-row justify-between items-center;
        h3 {
            @apply text-xl font-medium pl-4;
        }
    }
    .search-filer-action {
        @apply flex flex-row space-x-8 justify-end mb-2 mt-5
    }
}
</style>
<script setup>
import PeopleLeadTable from '~~/layouts/components/common-tables/people-lead-table.vue';
import PeopleMemberTable from '~~/layouts/components/common-tables/people-member-table.vue';
const filterType = [
    {
        value: "1",
        label: "Filter 1"
    }, 
    {
        value: "2",
        label: "Filter 2"
    }, 
    {
        value: "3",
        label: "Filter 3"
    },
    {
        value: "4",
        label: "Filter 4"
    },
    {
        value: "5",
        label: "Filter 5"
    },
];
const seachInput = ref(null);
</script>