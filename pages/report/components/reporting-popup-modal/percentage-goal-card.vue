<template>
    <card title="Percentage to Goal" class="percentage-goal-card"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="py-14">
                    <percentage-goal-chart :data="[80]"/>
                </div>
            </div>
        </template>
    </card>
</template>
<script setup>
    import PercentageGoalChart from './percentage-goal-chart.vue';
</script>
<style scoped>
.percentage-goal-card {
    .card-content {
        @apply flex items-center border-t border-base-content/50 mt-2 h-full;
    }
}
</style>