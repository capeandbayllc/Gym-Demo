<template>
    <simple-card title="">
        <div class="search-filer-action-card-content">
            <div class="search-filer-action-title">
                <h3>Search</h3>
                <!-- <div class="flex gap-4">
                    <search-input neutral size="md" border="neutral"/>
                </div> -->
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
        </div>
    </simple-card>
</template>
<style scoped>
.search-filer-action-card-content {
    @apply pt-1 pb-2 px-3 bg-transparent items-center w-full;
    .search-filer-action-title {
        @apply flex flex-row justify-between items-center;
        h3 {
            @apply text-xl font-semibold pl-4;
        }
    }
    .search-filer-action {
        @apply flex flex-row space-x-8 justify-end mb-2 mt-5
    }
}
</style>
<script setup>
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
</script>