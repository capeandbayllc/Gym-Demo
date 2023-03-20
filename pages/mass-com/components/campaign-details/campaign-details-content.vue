<template>
    <div 
        class="campaign-content-details card-gradient-bg"
        :class="{
            'max-h-[40vw]': fixedHeight
        }"
    >
        <div class="flex flex-row justify-between px-6">
            <div class="campaign-title">July 2022</div>

            <CampaignFilter :data="data" />
        </div>
        <CampaignRecentSummary :data="data" />
        <ConversionData :data="data" />
    </div>
</template>

<style scoped>
.campaign-content-details {
    @apply pt-4 px-4 items-center w-full border border-secondary rounded-3xl overflow-y-scroll;
}
.campaign-title {
    @apply text-2xl flex items-end;
}
</style>

<script setup>
import CampaignFilter from "./campaign-filter.vue"
import CampaignRecentSummary from "./campaign-recent-summary.vue"
import ConversionData from "./../conversion-data/index.vue"

const props = defineProps({
    data: Object,
    fixedHeight: {
        type: Boolean,
        default: false
    }
})

</script>