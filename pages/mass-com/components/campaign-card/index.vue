<template>
    <simple-card
        :title-component="CampaignCardTitle"
    >
    <campaign-table class="mx-16 my-5 h-64 overflow-y-auto"/>
    </simple-card>
</template>
<script setup>
import CampaignCardTitle from './campaign-card-title.vue'
import CampaignTable from './campaign-table.vue'
</script>
