<template>
    <simple-card title="Employee">
        <div class="employee-card-content">
            <div class="employee-docs">
                <div v-for="doc in docs" :key="doc.id" class="employee-doc">
                    <normal-doc class="mb-2" />
                    <div class="text-xs">{{doc.name}}</div>
                    <div class="doc-date">{{doc.date}}</div>
                </div>
            </div>
            <arrow-icon direction="right" class="h-fit"/>
        </div>
    </simple-card>
</template>
<style scoped>
.employee-card-content {
    @apply flex flex-row pt-4 pb-2 px-9 bg-transparent items-center w-full;
    .employee-docs {
        @apply grid grid-cols-7 gap-5 mr-6;
        .employee-doc {
            @apply flex flex-col items-center;
            .doc-date {
                @apply text-secondary;
                font-size: 9px;
            }
        }
    }
}
</style>
<script setup>
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
    }
]
</script>