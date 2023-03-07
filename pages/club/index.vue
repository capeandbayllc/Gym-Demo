<template>
    <div class="page-club-container">
        <div class="page-content">
            <simple-card title="Location Search X">
                <div class="px-4 md:px-12 py-7 bg-neutral">
                    <div class="location-filter">
                        <div class="location-filter-options">
                            <select-box
                                :items="states"
                                :label="'State'+(selectedState?': '+selectedState:'')"
                                v-model="selectedState"
                                :onChange="filterState"
                                placeholderSearch="Search State"
                                class="w-36 z-50"
                                secondary
                            />
                            <select-box
                                :items="cities"
                                :onChange="filterCity"
                                :label="'City'+(selectedCity?': '+selectedCity:'')"
                                placeholderSearch="Search City"
                                class="w-36"
                                secondary
                                v-if="cities.length"
                            />
                        </div>
                        <search-input
                            neutral
                            size="md"
                            border="neutral"
                        />
                    </div>
                    <div class="club-search-tbl-content">
                        <data-table
                            class="club-table overflow-y-auto"
                            :columns="columns"
                            :data="locations"
                            :row-component="ClubTableRow"
                            />
                    </div>
                </div>
            </simple-card>
        </div>
    </div>
</template>
<style scoped>
.page-club-container {
    @apply py-4 w-full h-fit;

    .page-content {
        @apply flex flex-col-reverse md:flex-row gap-5 justify-center px-4;
        .simple-card {
            @apply w-full;
        }
        .location-filter {
            @screen -md {
                .search-input-wrapper {
                    @apply w-full;
                }
            }
            @apply flex flex-col md:flex-row gap-2 justify-between mb-3;
        }
        .location-filter-options {
            @screen -md {
                /* .select-box-wrapper {
                    @apply w-full;
                } */
            }
            @apply flex flex-wrap md:flex-nowrap gap-2 md:gap-5;
        }
        .club-table {
            @apply bg-neutral overflow-y-auto;
            height: 50vh;
        }
    }

    .search-input-wrapper{
        @apply w-72;
    }
}
</style>

<script setup>
import ClubTableRow from './components/club-table-row.vue';
import data from '../../api/data/data.json'

const locations = ref(data.locations);

function filterLocations(){
    locations.value = data.locations.filter((e)=>{
        if(selectedCity.value != '' && selectedState.value != ''){
            return e.state == selectedState.value && e.city == selectedCity.value
        }else if(selectedState.value != ''){
            return e.state == selectedState.value
        }else if(selectedCity.value != ''){
            return e.city == selectedCity.value
        }else{
            return true
        }
    })
}

const selectedCity = ref('');
const filterCity = (value) => {
    selectedCity.value = value
    filterLocations()
};

const selectedState = ref('');
const filterState = (value) => {
    selectedState.value = value
    filterLocations()
};

// Load cities
const cities = ref([]);
const uniqueCities = [];
data.locations.forEach(location => {
    const city = location.city;
    if (!uniqueCities.some(item => item.value === city)) {
        uniqueCities.push({
            value: city,
            label: city
        });
    }
});
cities.value = uniqueCities;

// Load states
const states = ref([]);
const uniqueStates = [];
data.locations.forEach(location => {
    const state = location.state;
    if (!uniqueStates.some(item => item.value === state)) {
        uniqueStates.push({
            value: state,
            label: state
        });
    }
});
states.value = uniqueStates;

const columns = ['Club Name', 'Address', 'Phone', 'Email', ''];
</script>
