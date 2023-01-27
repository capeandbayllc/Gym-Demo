<template>
    <card title="Create a Report" class="bg-neutral" :class="{'reporting-form-card' : showAddNewForm}"
        :options="{
            'collapse': false,
            'favorite': true,
        }"
    >
        <template #content>
            <div class="card-content">
                <create-report-form v-if="showAddNewForm" @closeReportingForm="showAddNewForm = false"/>
                <div class="filter-report-content" v-else>
                    <div class="flex justify-center mt-2">
                        <div class="text-center cursor-pointer" @click="showAddNewForm = true">
                            <div class="rounded-full w-12 h-12 m-auto text-center border-2 border-secondary hover:border-opacity-50">
                                <img class="w-full p-3" src="/plus-icon.svg" alt="">
                            </div>
                            <p class="text-base font-semibold text-base-content pt-2">
                                Add New
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-end gap-4">
                        <Button secondary size="sm" class="font-medium" :class="{'active' : activeBtn === item.type}"  v-for="(item, index) in actionsBtn" :key="index">
                            {{ item.name }}
                        </Button>
                    </div>
                    <div class="grid gap-3 mt-4 p-4 border border-secondary overflow-auto">
                        <div class="flex gap-5 justify-between" v-for="(item, index) in buildReportBy" :key="index">
                            <select-box
                                :items="item.filter1"
                                value="1"
                                :label="'Asset'"
                                class="w-32"
                                :secondary="true" 
                            >
                            </select-box>
                            <div class="w-9 h-9 rounded-full text-center border border-base-content bg-secondary cursor-pointer">
                                <span class="text-2xl">=</span>
                            </div>
                            <select-box
                                :items="[]"
                                value=""
                                :label="'abcd,def453,ghi789,jkl101112'"
                                class="w-32"
                                :secondary="true" 
                            >
                            </select-box>
                            <img class="h-7 w-7 cursor-pointer" src="/ellipsis-icon-vertical.svg" alt="">
                            <button
                                class="btn w-max hover:bg-error border-error rounded text-base-content btn-sm font-medium capitalize"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div class="grid justify-end pt-3">
                        <div>
                            <button
                                class="btn hover:bg-secondary border-secondary rounded text-base-content btn-sm font-medium"
                            >
                                Run Query
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>

<style scoped>
.active{
    @apply border-secondary bg-transparent;
}
</style>
<style>
.reporting-form-card {
    @apply bg-neutral-focus;
    .card-title {
        @apply text-secondary;
    }
}
</style>

<script setup>
import CreateReportForm from './create-report-form.vue'
const activeBtn = ref('view');
const actionsBtn = [
    {
        name: 'Build Report',
        type: 'build'
    },
    {
        name: 'View Report',
        type: 'view'
    },
];
const buildReportBy = [
    {
        id: 1,
        filter1:  [
            {
                value: "1",
                label: "Asset"
            }, 
        ],
        equation: '',
        filter2: '',
    }, 
    {
        id: 1,
        filter1:  [
            {
                value: "1",
                label: "Sensor Value"
            }, 
        ],
        equation: '',
        filter2: '',
    }, 
    {
        id: 1,
        filter1:  [
            {
                value: "1",
                label: "Sensor Value"
            }, 
        ],
        equation: '',
        filter2: '',
    }, 
];
const showAddNewForm = ref(false);
</script>