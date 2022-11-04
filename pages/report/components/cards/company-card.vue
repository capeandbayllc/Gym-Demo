<template>
    <card title="Company Overview" class="company-card">
        <template #summary>
            <div class="company-summary">
                <h2>-89</h2>
                <div class="text-sm">
                    Membership Net Change
                </div>
            </div>
        </template>
        <template #content>
            <div class="company-card-content">
                <div class="company-info-list">
                    <div class="company-summary">
                        <h2>-89</h2>
                        <div class="text-sm">
                            Membership Net Change
                        </div>
                    </div>
                    <div class="company-item"
                        v-for="item in data"
                        :key="item.id"
                    >
                        <h2>{{item.value}}%</h2>
                        <div class="text-sm">
                            {{item.data}}
                        </div>
                    </div>
                </div>
                <go-btn />
            </div>
        </template>
    </card>
</template>
<style scoped>
.company-card {
    @apply w-80;
    .company-summary {
        @apply flex flex-row items-center pb-2 mt-2;
        h2 {
            @apply font-bold text-3xl w-20;
        }
    }
    .company-card-content {
        .company-info-list {
            @apply flex flex-col space-y-2 mt-2;
        }
        .company-summary, .company-item {
            @apply flex flex-row items-center border-b border-base-content/50 pb-2;
            h2 {
                @apply font-bold text-3xl w-20;
            }
        }

        .company-summary {
            @apply border-t border-base-content/50 pt-2;
            h2 {
                @apply text-error;
            }
        }
        .company-item h2 {
            @apply text-secondary;
        }
        .company-summary, .company-item {
            @apply flex flex-row items-center border-b border-base-content/50 pb-2;
            h2 {
                @apply font-bold text-3xl w-16;
            }
        }
    }

    .company-summary h2 {
        @apply text-error;
    }
    .company-item h2 {
        @apply text-secondary;
    }
}
</style>
<script setup>
import GoBtn from './go-btn.vue';

const data = [{
    id: 1,
    value: 87,
    data: "Promo Click Rate"
}, {
    id: 2,
    value: 44,
    data: "Lead Conversion Rate"
}]
</script>