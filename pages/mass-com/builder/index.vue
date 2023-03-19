<template>
    <div class="campaign-builder-container">
        <div class="page-topbar flex flex-1">
            Campaign Builder
        </div>

        <div class="page-content card-gradient-bg">
            <div class="page-content-block">
                <select-template v-if="activePage == 'select-template'" @next-page="activePage = $event" />
                <map-contacts v-if="activePage == 'map-contacts'" @next-page="activePage = $event" />
                <lead-sources v-if="activePage == 'lead-sources'" @next-page="activePage = $event" />
                <save-campaign v-if="activePage == 'save-campaign'" @next-page="activePage = $event" />
            </div>
        </div>

        <div class="flex flex-col mt-6 justify-center items-center" v-if="activePage == 'save-campaign'">
            <Button hover-secondary size="xs" class="rounded-full normal-case" @click.stop="$emit('next-page')">
                Launch Campaign
            </Button>
            <p class="text-[10px] mt-2">View your Campaign and Reports</p>
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
        @apply flex border border-secondary rounded-3xl min-h-[30rem] mt-[4rem] p-4 max-w-[768px];
        .page-content-block {
            @apply flex flex-1 bg-black border border-secondary rounded-2xl min-h-fit p-6 justify-center max-w-full;
        }
    }
}
</style>

<script setup>
import SelectTemplate from "./components/select-templates/index.vue";
import MapContacts from "./components/map-contacts/index.vue";
import LeadSources from "./components/lead-sources/index.vue";
import SaveCampaign from "./components/save-campaign/index.vue";

const props = defineProps({
    data: Object
})

let activePage = ref('select-template');

</script>
