<template>
    <simple-card title="Campaign Details">
        <div class="flex flex-row justify-between">
            <div class="recent-campaign-title">July 2020</div>
            
            <CampaignFilter />
        </div>
        <CampaignRecentSummary />
        <ConversionData />
    </simple-card>
</template>

<script setup>
import CampaignFilter from "./campaign-filter.vue"
import CampaignRecentSummary from "./campaign-recent-summary.vue"
import ConversionData from "./../conversion-data/index.vue"
</script>