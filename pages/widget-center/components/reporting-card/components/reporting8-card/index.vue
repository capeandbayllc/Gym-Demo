[<template>
    <card-widget buttonSecondary buttonText="GO" title="Statistics 8">
        <template #summary>
        </template>
        <template #content>
            <div class="flex flex-col p-7 mx-auto rounded-xl border border-base-content border prices-card">
                <div class="prices-list">
                    <div v-for="i in 7" :key="i" class="prices-item">
                        <div class="total-sale !text-4xl pt-4"><span class="total-symbol !text-lg mb-3">$</span>18,000</div>
                        <div>
                            <p class="text-base-content text-lg">Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </card-widget>
</template>

<style scoped lang="postcss">
.prices-card {
    @apply w-80;
    ::-webkit-scrollbar {
        @apply w-0 h-0;
    }
    .prices-list {
        @apply h-[220px] mt-[-30px] overflow-y-auto text-base-content;
        .prices-item {
            @apply border-b border-base-content flex justify-between items-center mb-[0px];
        }
    }
}
</style>

<script setup>
import CardWidget from '../../../card-widget.vue';
import FunnelIcon from '~/pages/report/components/cards/sales-funnel-card/funnel-icon.vue';
</script>]