<template>
    <dashboard-card :title-icon="CampaignIcon" title="Drip Campaigns">
        <div class="text-lg p-4 font-semibold">December: 2022</div>
        <div class="capmaign-chart-container">
            <capmaign-chart />
        </div>
        <div class="absolute bottom-3 left-4 text-sm">View full details</div>
    </dashboard-card>
</template>
<script setup>
import DashboardCard from '../dashboard-card.vue'
import CampaignIcon from './campaign-icon.vue'
import CapmaignChart from './campaign-chart.vue'
onMounted(async () => {
    await nextTick();
    window.dispatchEvent(new Event('resize'))
});
</script>