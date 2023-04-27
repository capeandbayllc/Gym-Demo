<template>
    <card title="KPI" class="kpi-card">
        <template #summary>
            <div class="total-sale">$42</div>
        </template>
        <template #content>
            <div class="kpi-info">
                <div class="total-sale">$42</div>
                <div class="kpi-data">
                    <div>
                        <h2>Rolling Revenue Per Member</h2>
                        <p>Membership Sales + Fitness Sales + Retail + Add-on</p>
                    </div>
                    <go-btn />
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped lang="postcss">
.kpi-card {
    @apply w-80 h-[300px];
    .total-sale {
        @apply text-secondary font-bold text-5xl;
    }
    .kpi-info {
        .total-sale {
            @apply border-b pb-2 border-base-content/50;
        }
        .kpi-data {
            @apply flex flex-col justify-between h-full;
            h2 {
                @apply text-secondary font-semibold;
            }
            p {
                @apply font-light;
            }
        }
    }
}
</style>
<script setup>
import GoBtn from './go-btn.vue';
</script>