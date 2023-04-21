<template>
    <div class="page-reporting-container">
        <div class="page-content">
            <simple-card
                title="Reporting Fields"
                class="reporting-fields-container"
            >
                <div class="reporting-fields">
                    <membership-card />
                    <goal-card />
                    <calendar-card />
                    <attrition-card />
                    <communication-card />
                    <kpi-card />
                    <sales-funnel-card />
                    <company-card />
                </div>
            </simple-card>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.page-reporting-container {
    @apply py-4 pr-5 w-full h-fit;
    .page-content {
        @apply border border-secondary rounded bg-neutral px-6 py-5;
        .reporting-fields-container {
            @apply bg-neutral;
        }

        .reporting-fields {
            @apply grid grid-cols-3 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 grid-rows-3 gap-y-8 gap-x-7 px-7 py-8;
        }
    }
}
</style>
<script setup>
import {
    MembershipCard,
    GoalCard,
    CalendarCard,
    AttritionCard,
    CommunicationCard,
    KpiCard,
    SalesFunnelCard,
    CompanyCard,
} from './components/cards';
</script>
