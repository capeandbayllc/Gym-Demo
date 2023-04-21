<template>
    <card title="Statistic 1" :options="{favorite: false, collapse:true}" class="statistics-card">
        <template #summary>
            <div class="statistics-info">
                <div class="total-sale">102</div>
            </div>
        </template>
        <template #content>
            <div class="statistics-info">
                <div>
                    <div class="total-sale">102</div>
                    <div class="flex flex-row justify-center pr-5 items-center py-2 rounded-xl border border-base-content border">
                        <div>
                            <statistic-chart />
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="status-div col-span-1">
                                <div class="circled-div bg-info-content"></div>
                                <span>Online</span>
                            </div>
                            <div class="status-div col-span-1">
                                <div class="circled-div bg-primary"></div>
                                <span>Instore</span>
                            </div>
                            <div class="status-div col-span-1">
                                <div class="circled-div bg-neutral-content"></div>
                                <span>Other</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute right-[10px] bottom-[-10px] text-white text-right py-4 mt-auto">
                    <button>View more</button>
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped lang="postcss">
.status-div{
    @apply m-auto flex w-full;
}
.status-div span{
    @apply text-base-content pl-[2px] text-[11px];
}
.circled-div{
    @apply w-[14px] h-[14px] rounded-full my-auto mx-[3px];
}
</style>
<script setup>
import StatisticChart from './charts/statistic-chart.vue';
</script>