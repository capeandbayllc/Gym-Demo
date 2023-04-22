<template>
    <card-widget title="Statistics 3">
        <template #summary>
            <div class="total-sale"><span class="total-symbol">$</span>44,000</div>
        </template>
        <template #content>
            <div class="total-sale"><span class="total-symbol">$</span>44,000</div>
            <div class="flex flex-row items-center py-2 rounded-xl border border-base-content border">
                <div class="px-3">
                    <p>Recent Statistics</p>
                    <div class="grid grid-cols-3 mt-3 -mb-3">
                        <div class="text-center">
                            <div class="-mb-3">
                                <div class="statistics-number">475</div>
                                <div>INCREASE</div>
                            </div>
                            <chart :color="'#1d89ee'" />
                        </div>
                        <div class="text-center">
                            <div class="-mb-3">
                                <div class="statistics-number">220</div>
                                <div>SPEND</div>
                            </div>
                            <chart :color="'#e7ab00'" />
                        </div>
                        <div class="text-center">
                            <div class="-mb-3">
                                <div class="statistics-number">471</div>
                                <div>DIFERENCE</div>
                            </div>
                            <chart :color="'#22a44e'" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </card-widget>
</template>
<style scoped lang="postcss">
.statistics-number{
    @apply text-3xl font-semibold text-warning;
}
</style>
<script setup>
import CardWidget from '../../../card-widget.vue';
import Chart from './chart.vue';
</script>