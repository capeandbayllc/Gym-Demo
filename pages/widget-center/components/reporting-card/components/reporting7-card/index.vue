<template>
    <card-widget buttonSecondary buttonText="GO" title="Statistics 7">
        <template #summary>
            <div class="total-sale"><span class="total-symbol">$</span>15,000</div>
        </template>
        <template #content>
            <div class="total-sale"><span class="total-symbol">$</span>15,000</div>
            <div class="flex flex-col py-2 rounded-xl border border-base-content border">

                    <div class="mx-5 mb-3">April 2, 2022</div>
                    <div class="w-full">
                        <funnel-icon />
                    </div>
                    <div class="text-base-content mx-5 mt-3">
                        Lorem ipsum dolor sit amet.
                    </div>

            </div>
        </template>
    </card-widget>
</template>

<script setup>
import CardWidget from '../../../card-widget.vue';
import FunnelIcon from '~/pages/report/components/cards/sales-funnel-card/funnel-icon.vue';
</script>