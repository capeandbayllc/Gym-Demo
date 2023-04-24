<template>
    <div class="grid grid-cols-6 gap-y-8 gap-x-5 py-8">
        <statistic1 class="statistic-item" />
        <statistic2 class="statistic-item" />
        <statistic3 class="statistic-item" />
        <statistic4 class="col-span-6" />
    </div>
    <div class="grid grid-cols-11    4xl:grid-cols-5 -md:grid-cols-1 -xl:grid-cols-2 gap-y-8 gap-x-5 py-8">
        <statistic5 class="col-span-12 md:col-span-8 xl:col-span-5" />
        <statistic6 :data="[31, 80, 68, 109, 92]" title="Income" :last-week="-0.07" class="col-span-12 md:col-span-3" />
        <statistic7 class="col-span-12 md:col-span-3"/>
    </div>
    <div class="grid grid-cols-6 gap-y-8 gap-x-5 py-8">
        <statistic8 class="col-span-6" />
        <statistic9 class="statistic-item" />
    </div>

</template>

<style scoped lang="postcss">
.statistic-item{
    @apply col-span-6 md:col-span-3 xl:col-span-2;
}
</style>

<script setup>
import statistic1 from './components/statistic1.vue';
import statistic2 from './components/statistic2.vue';
import statistic3 from './components/statistic3.vue';
import statistic4 from './components/statistic4.vue';
import statistic5 from './components/statistic5.vue';
import statistic6 from './components/statistic6.vue';
import statistic7 from './components/statistic7.vue';
import statistic8 from './components/statistic8.vue';
import statistic9 from './components/statistic9.vue';
</script>
