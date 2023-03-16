<template>
    <div class="campaign-builder-container">
        <div class="page-topbar flex flex-1">
            Campaign Builder
        </div>

        <div class="page-content card-gradient-bg">
            <div class="page-content-block">
                <select-template @next-page="activePage = 'map-contacts'" v-if="activePage == 'select-template'" />
                <map-contacts v-if="activePage == 'map-contacts'" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.campaign-builder-container {
    @apply pb-4 w-full h-fit pr-5;
    .page-topbar {
        @apply pl-10 pr-4 mb-2
    }
    .page-content {
        @apply flex border border-secondary rounded-3xl min-h-[25rem] max-w-[45rem] mt-[4rem] p-4;
        .page-content-block {
            @apply flex-1 bg-black border border-secondary rounded-2xl min-h-fit p-6;
        }
    }
}
</style>

<script setup>
import SelectTemplate from "./components/select-templates/index.vue";
import MapContacts from "./components/map-contacts/index.vue";

const props = defineProps({
    data: Object
})

// let activePage = ref('select-template');
let activePage = ref('map-contacts');

</script>
