<template>
    <div class="campaign-card-title">
        <div class="text-xl">Current Campaign</div>
        <select-box
            class="text-sm"
            :items="items"
            label="Current Campaigns"
        />
    </div>
</template>
<style scoped>
.campaign-card-title {
    @apply flex flex-row justify-between items-center h-12 font-semibold px-6 text-base-content bg-secondary;
}
</style>
<script setup>
const items = [{
    value: 'current',
    label: 'Current Campaigns'
}]
</script>
