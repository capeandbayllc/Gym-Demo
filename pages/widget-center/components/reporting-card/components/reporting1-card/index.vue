<template>
    <card-widget buttonSecondary buttonText="GO" title="Statistics 2">
        <template #summary>
            <div class="total-sale"><span class="total-symbol">$</span>17,000</div>
        </template>
        <template #content>
            <div class="total-sale"><span class="total-symbol">$</span>17,000</div>
            <div class="flex flex-row justify-center pl-7 items-center py-2 rounded-xl border border-base-content border">
                <div class="flex flex-col gap-3">
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-secondary"></div>
                        <span>Stat 1</span>
                    </div>
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-secondary-focus"></div>
                        <span>Stat 2</span>
                    </div>
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-secondary-content"></div>
                        <span>Stat 3</span>
                    </div>
                    <div class="col-span-1 text-sm text-secondary">
                        <span class="text-secondary">Total: 100%</span>
                    </div>
                </div>
                <div>
                    <chart />
                </div>
            </div>
        </template>
    </card-widget>
</template>

<script setup>
import Chart from './chart';
import CardWidget from '../../../card-widget.vue';
</script>