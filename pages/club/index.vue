<template>
    <div class="page-club-container">
        <div class="page-title">Club Reference</div>
        <div class="page-content">
            <simple-card title="Location Search">
                <div class="px-4 md:px-12 py-6 bg-neutral">
                    <div class="location-filter">
                        <div class="location-filter-options">
                            <select-box :items="states" label="State" class="w-36"/>
                            <select-box :items="cities" label="City" class="w-36"/>
                        </div>
                        <search-input neutral size="md" border="neutral"/>
                    </div>
                    <data-table
                        class="club-table"
                        :columns="columns"
                        :data="mock"
                        :row-component="ClubTableRow"
                    />
                </div>
            </simple-card>
        </div>
    </div>
</template>
<style scoped>
.page-club-container {
    @apply py-4 pr-5 bg-base-300 w-full h-fit border-b border-secondary pl-16 -md:pl-0;

    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply flex flex-col-reverse md:flex-row gap-5 px-5 justify-center;
        .location-filter {
            @screen -md {
                .search-input-wrapper {
                    @apply	w-full;
                }
            }
            @apply flex flex-col gap-2 md:flex-row justify-between mb-3;
        }
        .location-filter-options {
            @screen -md {
                .select-box-wrapper {
                    @apply w-full;
                }
            }
            @apply flex flex-col md:flex-row gap-2 md:gap-5
        }
        .club-table {
            @apply bg-neutral overflow-y-auto;
            height: 50vh;
        }
    }
}
</style>
<script setup>
import ClubTableRow from './components/club-table-row.vue';
const states = [{
    value: 1,
    label: "State 1"
}, {
    value: 2,
    label: "State 2"
}, {
    value: 3,
    label: "State 3"
}, {
    value: 4,
    label: "State 4"
}, {
    value: 5,
    label: "State 5"
}]
const cities = [{
    value: 1,
    label: "City 1"
}, {
    value: 2,
    label: "City 2"
}, {
    value: 3,
    label: "City 3"
}, {
    value: 4,
    label: "City 4"
}, {
    value: 5,
    label: "City 5"
}]

const columns = ["Club Number", "Address", "Phone", "Email", ""]
const mock = new Array(10).fill({id: 0}).map((item, ndx) => ({id: ndx}))
</script>