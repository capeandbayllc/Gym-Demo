<template>
    <card-widget title="Statistics 2">
        <template #summary>
            <div class="total-sale"><statistic2-icon class="statistic-icon" /><span class="total-symbol">$</span>18,000</div>
        </template>
        <template #content>
            <div class="total-sale"><statistic2-icon class="statistic-icon" /><span class="total-symbol">$</span>18,000</div>
            <div class="flex flex-row items-center py-2 rounded-xl border border-base-content border">
                <div class="px-3">
                    <p>Most Recent Location</p>
                    <p class="text-base-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi reprehenderit aspernatur quibusdam minus.
                    </p>
                </div>
            </div>
        </template>
    </card-widget>
</template>
<script setup>
import CardWidget from '../../../card-widget.vue';
import { Statistic2Icon } from '~/components/icons';
</script>