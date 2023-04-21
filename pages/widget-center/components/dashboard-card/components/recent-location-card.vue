<template>
    <card title="Statistic 2" :options="{favorite: false, collapse:true}" class="statistics-card">
        <template #summary>
            <div class="statistics-info">
                <div class="total-sale"><span class="total-symbol">$</span>18,000</div>
            </div>
        </template>
        <template #content>
            <div class="statistics-info">
                <div>
                    <div class="total-sale"><span class="total-symbol">$</span>18,000</div>
                    <div class="flex flex-row items-center py-2 rounded-xl border border-base-content border">
                        <div class="px-3">
                            <p>Most Recent Location</p>
                            <p class="text-base-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi reprehenderit aspernatur quibusdam minus.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="absolute right-[10px] bottom-[-10px] text-white text-right py-4">
                    <button>View more</button>
                </div>
            </div>
        </template>
    </card>
</template>
<script setup>
// import StatisticChart from './charts/statistic-chart.vue';

</script>