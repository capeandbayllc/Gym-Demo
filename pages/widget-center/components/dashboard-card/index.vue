<template>
    <div class="page-statistics-container">
        <div class="page-content">
            <h3 class="text-base-content text-xl">Dashboard</h3>
            <div class="statistics-fields">
                <statistic1-card />
                <statistic2-card />
                <statistic3-card />
                <statistic4-card />
            </div>
            <div class="flex justify-end">
                <Button secondary="" size="xs" class="hover:border-2 hover:bg-base-300">
                    <font-awesome-icon :icon="['fas', 'plus']" size="md" class="mr-1 focus:outline-none" tabindex="0" @click.prevent.stop/>
                    Add to page
                </Button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.page-statistics-container {
    @apply py-4 pr-5 w-full;
    .page-content {
        @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left w-full max-w-[1600px];
        .statistics-fields-container {
            @apply bg-neutral;
        }

        .statistics-fields {
            @apply grid grid-cols-3 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 gap-y-8 gap-x-5 py-8;
        }
    }
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Statistic1Card from './components/statistic1-card/index.vue';
import Statistic2Card from './components/statistic2-card/index.vue';
import Statistic3Card from './components/statistic3-card/index.vue';
import Statistic4Card from './components/statistic4-card/index.vue';

</script>
