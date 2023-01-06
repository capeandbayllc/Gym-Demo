<template>
    <simple-card title="New Member Campaigns 2021" class="-lg:mb-4">
        <div class="member-card-content">
            <div class="member-docs">
                <div v-for="doc in docs" :key="doc.id" class="member-doc">
                    <normal-doc class="mb-2" />
                    <div class="text-xs">{{doc.name}}</div>
                    <div class="doc-date">{{doc.date}}</div>
                </div>
            </div>
            <arrow-icon direction="right" class="h-fit cursor-pointer"/>
        </div>
    </simple-card>
</template>
<style scoped>
.member-card-content {
    @apply flex flex-row pt-4 pb-2 px-9 bg-transparent items-center w-full;
    .member-docs {
        @apply grid w-full grid-cols-7 gap-5 mr-6 -lg:flex overflow-x-auto;
        .member-doc {
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