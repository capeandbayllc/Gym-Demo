<template>
    <card-widget title="Statistics 2">
        <template #summary>
            <div class="total-sale">102</div>
        </template>
        <template #content>
            <div class="total-sale">102</div>
            <div class="flex flex-row justify-center pr-5 items-center py-2 rounded-xl border border-base-content border">
                <div>
                    <chart />
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
        </template>
    </card-widget>
</template>

<script setup>
import Chart from './chart';
import CardWidget from '../../../card-widget.vue';
</script>