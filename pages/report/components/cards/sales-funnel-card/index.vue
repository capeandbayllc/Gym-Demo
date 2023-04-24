<template>
    <card
        title="Sales Funnel"
        class="sales-funnel-card"
    >
        <template #summary>
            <div class="total-sale">$17,000</div>
        </template>
        <template #content>
            <div class="sales-funnel-info">
                <div class="total-sale">$17,000</div>
                <div class="sales-funnel-date">April 2, 2022</div>
                <div class="funnel-chart">
                    <funnel-icon />
                </div>
                <div class="sales-funnel-description">
                    Sales funnel focuses on all leads and conversion attempts.
                </div>
                <go-btn />
            </div>
        </template>
    </card>
</template>
<style scoped lang="postcss">
.sales-funnel-card {
    @apply w-80;
    .total-sale {
        @apply text-secondary text-5xl font-bold;
    }
    .sales-funnel-info {
        @apply flex flex-col;
        .total-sale {
            @apply border-b pb-2 border-base-content/50;
        }
        .sales-funnel-date {
            @apply text-base font-semibold text-secondary py-2;
        }
        .sales-funnel-description {
            @apply text-sm font-light pt-2 w-2/3;
        }
    }
}
</style>
<script setup>
import FunnelIcon from './funnel-icon.vue';
import GoBtn from '../go-btn.vue';
</script>
