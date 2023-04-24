<template>
    <card-widget title="Statistics 3">
        <template #summary>
            <div class="total-sale"><statistic4-icon class="statistic-icon" /> 27</div>
        </template>
        <template #content>
            <div class="total-sale"><statistic4-icon class="statistic-icon" /> 27</div>
            <div class="flex flex-row justify-center pr-5 items-center py-2 rounded-xl border border-base-content border">
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
import { Statistic4Icon } from '~/components/icons';
</script>