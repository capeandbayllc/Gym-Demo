<template>
    <div class="page-reporting-container">
        <div class="page-content ">
            <h3 class="text-base-content text-xl">Reporting</h3>
            <div class="reporting-fields">
                <reporting1-card />
                <reporting2-card />
                <!-- <reporting3-card />
                <reporting4-card /> -->
            </div>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.page-reporting-container {
    @apply py-4 pr-5 w-full;
    .page-content {
        @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left w-full max-w-[1600px];
        .reporting-fields-container {
            @apply bg-neutral;
        }

        .reporting-fields {
            @apply grid grid-cols-3 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 grid-rows-3 gap-y-8 gap-x-5 py-8;
        }
    }
}
</style>

<script setup>
import Reporting1Card from './components/reporting1-card/index.vue';
import Reporting2Card from './components/reporting2-card/index.vue';
// import Reporting3Card from './components/reporting3-card/index.vue';
// import Reporting3Card from './components/reporting4-card/index.vue';

</script>
