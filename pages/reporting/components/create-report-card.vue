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
                        <div class="flex gap-2 justify-between" v-for="(item, index) in buildReportBy" :key="index">
                            <select-box
                                :items="item.filter1"
                                value="1"
                                :label="'Asset'"
                                class="dropdown-select"
                                :secondary="true" 
                            
                            >
                            </select-box>
                            <div class="relative w-9 h-9" :class="{'equal-to-icon': calculateByDropDown === item.id}"  ref="componentRef">
                                <span class="equation-icon flex w-9 h-9 rounded-full text-center border-base-content bg-secondary cursor-pointer border-[3px] border-opacity-50" @click="showCalculateByDropDown(item.id)">{{ item.equation }}</span>
                                <div class="calculation-dropdown" v-if="calculateByDropDown === item.id"> 
                                    <div class="gradient-bg border-4 border-base-content border-opacity-75 flex justify-between w-full py-3 px-2 rounded-xl">                                 
                                        <a class="dropdown-item cursor-pointer">
                                            <img src="/equal.png" alt="" />
                                        </a>
                                        <a class="dropdown-item cursor-pointer">
                                            <img src="/notequal.png" alt="" />
                                        </a>
                                        <a class="dropdown-item cursor-pointer">
                                            <img src="/greaterthan.png" alt="" />
                                        </a>
                                        <a class="dropdown-item cursor-pointer">
                                            <img src="/lessthan.png" alt="" />
                                        </a>
                                    </div>
                                </div>     
                            </div>
                            <select-box
                                :items="[]"
                                value=""
                                :label="item.mutiselect"
                                class="w-32 multiselect"
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

<style scoped lang="postcss">
.active{
    @apply border-secondary bg-transparent;
}
.dropdown-select {
    @apply min-w-[140px]
}
.multiselect {
    @apply min-w-[300px]
}
.equation-icon{
    @apply text-2xl px-[6px] leading-6;
    
}
.equal-to-icon {
    @apply relative z-10;
    .calculation-dropdown{
        @apply flex w-[180px] absolute -left-[70px] p-[7px] bg-secondary rounded-xl justify-between mt-[6px];
    }
}
.calculation-dropdown::before {
    @apply bg-no-repeat h-[120px] w-[120px] absolute top-[-47px] left-[25px] z-[-1];
    content: '';
    background-image: url('/equal_bg.png');
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
        equation: '=',
        mutiselect: 'abc123, def456, ghi789, jkl101112',
    }, 
    {
        id: 2,
        filter1:  [
            {
                value: "1",
                label: "Sensor Value"
            }, 
        ],
        equation: '=',
        mutiselect: 'Mode',
    }, 
    {
        id: 3,
        filter1:  [
            {
                value: "1",
                label: "Sensor Value"
            }, 
        ],
        equation: '=',
        mutiselect: 'Mode',
    }, 
];
const showAddNewForm = ref(false);
const calculateByDropDown = ref(null);
const showCalculateByDropDown = (id) => {
    calculateByDropDown.value = !calculateByDropDown.value ? id : calculateByDropDown.value = null;
}
</script>