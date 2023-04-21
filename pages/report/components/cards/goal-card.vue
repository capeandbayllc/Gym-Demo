<template>
    <card title="Goals" class="goal-card">
        <template #summary>
            <div class="total-sale">$33,000</div>
        </template>
        <template #content>
            <div class="goal-info">
                <div class="total-sale">$33,000</div>
            </div>
            <div class="goal-list">
                <div v-for="goal in goals" :key="goal.id">
                    <h2 class="text text-secondary">{{ goal.title }}</h2>
                    <p>
                        {{ goal.content }}
                    </p>
                </div>
            </div>
            <go-btn />
        </template>
    </card>
</template>
<style scoped lang="postcss">
.goal-card {
    @apply w-80 h-[300px];
    .total-sale {
        @apply text-secondary font-bold text-5xl;
    }
    .goal-info {
        .total-sale {
            @apply border-b pb-2 border-base-content/50;
        }
    }
    .goal-list {
        @apply flex flex-col gap-4 my-4 h-28 overflow-y-auto;
        h2 {
            @apply text-base font-bold;
        }
        p {
            @apply text-sm;
        }
    }
}
</style>
<script setup>
import GoBtn from './go-btn.vue';

const goals = [{
    id: 1,
    title: "Membership Revenue",
    content: "All membership-driven Sales actuals"
}, {
    id: 2,
    title: "PT Revenue",
    content: "All personal training-driven sales actuals"
}, {
    id: 3,
    title: "Membership Revenue",
    content: "All membership-driven Sales actuals"
}, {
    id: 4,
    title: "PT Revenue",
    content: "All personal training-driven sales actuals"
}]
</script>