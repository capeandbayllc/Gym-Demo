<template>
    <simple-card title="Marketing 2022" class="-lg:mb-4 mb-4">
        <div class="flex px-6 slide-docs">
            <scrollable-docs :docs="docs"></scrollable-docs>
        </div>
    </simple-card>
</template>
<script setup>
import ScrollableDocs from '~/components/scrollable-docs.vue';
import NormalDoc from './normal-doc.vue';
import { AddIcon, ArrowIcon } from '~~/components/icons';
const docs = [{
        id: 1,
        name: "Training Guide",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Onboarding",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Hiring Documents",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Job Performance",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Compensation",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Hiring Documents",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Compensation",
        date: "April 9, 2022"
    }, {
        id: 1,
        name: "Onboarding",
        date: "April 9, 2022"
    }
]
</script>