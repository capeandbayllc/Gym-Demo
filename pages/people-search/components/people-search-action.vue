<template>
    <!-- <div class="flex flex-row justify-between space-x-4 mt-10 mb-4">
        <div class="flex gap-6">
            <Button size="sm" class="font-medium border-base-content text-base-content" :class="{'active' : activeBtn === item.type}" @click="setActiveAction(item.type)" v-for="(item, index) in actionsBtn" :key="index">
                {{ item.name }}
            </Button>
        </div>
        <div class="flex gap-6">
            <select-box
                :items="filterType"
                value=""
                :label="'Locations'" 
                :secondary="true"
                class="w-40">
            </select-box>
        </div>
    </div> -->
    <div class="flex gap-4 flex-wrap xl:flex-nowrap mx-4 overflow-hidden">
        <div class="toggle-custom" :class="{ 'toggle-active': leadsCheck }">
            <div @click="changeLeadsCheck" class="circle"></div>
            <div @click="changeLeadsCheck" class="line"></div>
            <span @click="changeLeadsCheck">
                Leads
            </span>
        </div>
        <div class="toggle-custom" :class="{ 'toggle-active': leads2Check }">
            <div @click="changeLeads2Check" class="circle"></div>
            <div @click="changeLeads2Check" class="line"></div>
            <span @click="changeLeads2Check">
                Leads
            </span>
        </div>
        <div class="toggle-custom" :class="{ 'toggle-active': employeesCheck }">
            <div @click="changeEmployeesCheck" class="circle"></div>
            <div @click="changeEmployeesCheck" class="line"></div>
            <span @click="changeEmployeesCheck">
                Employees
            </span>
        </div>
        <div class="toggle-custom" :class="{ 'toggle-active': segmentsCheck }">
            <div @click="changeSegmentsCheck" class="circle"></div>
            <div @click="changeSegmentsCheck" class="line"></div>
            <span @click="changeSegmentsCheck">
                Segments
            </span>
        </div>
        <button class="text-gray-400" @click="clearChecks">
            Clear
        </button>
    </div>
</template>
<style scoped>

.toggle-custom{
    @apply ml-[-20px] flex text-gray-400 font-semibold;
    animation-name: toggle-animation;
    animation-duration: 0.2s;
    animation-fill-mode: forwards; 
}

.toggle-custom *{
    @apply cursor-pointer;
}

.toggle-custom button{
    @apply flex;
}

.toggle-custom .line{
    @apply w-[42px] h-[8px] rounded-[12px] mx-1 my-auto bg-gray-200;
}

@keyframes toggle-circle-animation {
    from {
        @apply bg-secondary left-[45px];
    }
    to {
        @apply bg-gray-400 left-[22px];
    }
}


.toggle-custom .circle{
    @apply relative left-[22px] w-[22px] h-[22px] rounded-full bg-gray-400;
    animation-name: toggle-circle-animation;
    animation-duration: 0.2s;
    animation-fill-mode: forwards; 
}


@keyframes toggle-active-animation {
    from {
        @apply text-gray-400;
    }
    to {
        @apply text-secondary;
    }
}

.toggle-active{
    animation-name: toggle-active-animation;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;   
}

@keyframes toggle-active-circle-animation {
    from {
        @apply bg-gray-400 left-[22px];
    }
    to {
        @apply bg-secondary left-[45px];
    }
}

.toggle-active .circle{
    animation-name: toggle-active-circle-animation;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}
</style>
<script setup>
const props = defineProps({
    actionsBtn: Array,
});
const activeBtn = ref('');
const emit = defineEmits(['people-search-action-selected'])


const leadsCheck = ref(false);
const changeLeadsCheck = ()=>{
    leadsCheck.value = !leadsCheck.value;
};

const leads2Check = ref(false);
const changeLeads2Check = ()=>{
    leads2Check.value = !leads2Check.value;
};

const employeesCheck = ref(false);
const changeEmployeesCheck = ()=>{
    employeesCheck.value = !employeesCheck.value;
};

const segmentsCheck = ref(false);
const changeSegmentsCheck = ()=>{
    segmentsCheck.value = !segmentsCheck.value;
};


const setActiveAction = (name) => {
    if (name === activeBtn.value) {
        activeBtn.value = '';
        emit('people-search-action-selected', '');
    } else {
        activeBtn.value = name;
        emit('people-search-action-selected', name);
    }
}
const filterType = [
    {
        value: "1",
        label: "Location 1"
    },
    {
        value: "2",
        label: "Location 2"
    },
    {
        value: "3",
        label: "Location 3"
    },
    {
        value: "4",
        label: "Location 4"
    },
    {
        value: "5",
        label: "Location 5"
    },
];
</script>
