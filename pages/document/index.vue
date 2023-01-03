<template>
    <nav-bar :navigation="navigation"/>
    <div class="w-full relative">
        <div class="app-body mt-8">
            <div class="app-body-content">
                <div class="page-document-container">
                    <div class="page-title">Document Center</div>
                    <div class="page-content">
                        <filter-actions></filter-actions>
                        <div class="document-container">
                            <create-card />
                            <documents-card />
                            <!-- <employee-card />
                            <marketing-card /> -->
                        </div>
                    </div>
                </div>
            </div>
            <side-bar />
        </div>
    </div>
</template>
<style scoped>
.app-body {
	@apply flex flex-row justify-between relative;
	.app-body-content {
	    @apply flex flex-col w-full items-center;
		height: calc(100vh - 6rem);
	}
}
.page-document-container {
    @apply py-4 pr-5 w-full h-fit pl-16 -md:pl-0;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply grid gap-2 justify-center m-auto;
        .document-container {
            @apply grid border border-secondary bg-neutral py-7 px-7 rounded gap-5 -lg:block -lg:w-full;
        }
    }
}
</style>
<script setup>
import CreateCard from './components/create-card.vue';
import EmployeeCard from './components/employee-card.vue';
import MarketingCard from './components/marketing-card.vue';
import FilterActions from './components/filter-actions.vue';
import DocumentsCard from './components/documents-card.vue';
import NavBar from "~~/layouts/components/nav-bar/index.vue"
import SideBar from "~~/layouts/components/side-bar.vue"
import {
	ContractEditIcon,
	ContractIcon,
	TrainingIcon,
}
from '@/components/icons'
definePageMeta({
    layout: 'custom'
})
const navigation = [
    {
        label: 'Contracts',
        icon: ContractEditIcon,
        url: "/#"
    },
    {
        label: "Forms",
        url: "/#",
        icon: ContractIcon
    },
    {
        label: "Training & Development",
        url: "/#",
        icon: TrainingIcon
    },
]
</script>