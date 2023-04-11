<template>
    <div class="task-page">
    <div class="calendar-item">
        <div class="w-5/6"></div>
        <div class="w-2/6">
            <month-switcher class="pl-4" :onChange="switchMonth" :startMonth="startOfTheWeek" />
        </div>
    </div>

    <div class="bg-gradient-to-b from-[#0075C94D] to-black p-10 rounded-2xl border-blue-600 border-2">
        <task-date-switcher
                :startOfTheWeek="startOfTheWeek"
                :setStartOfTheWeek="setStartOfTheWeek"
                :selectedDate="selectedDate"
                :setSelectedDate="setSelectedDate"
            />
    </div>

    <div class="flex my-10 gap-4 w-[60rem]">
        <div class="text-secondary text-lg font-semibold">Tasks filters:</div>
        <div :class="all_tab?'tab-text':'tab-text-selected'" @click="selectAll('all')">
            All
        </div>
        <div :class="location_tab?'tab-text':'tab-text-selected'" @click="selectAll('location')">
            Location
        </div>
        <div :class="employees_tab?'tab-text':'tab-text-selected'" @click="selectAll('employees')">
            Employees
        </div>
    </div>

    <div class="dt-layer">
        <TaskDataTable title="Today" ></TaskDataTable>
        <TaskDataTable title="Overdue" ></TaskDataTable>
        <TaskDataTable title="Completed" ></TaskDataTable>
    </div>
</div>
</template>
<style>
.tab-text{
    @apply bg-secondary text-sm text-white m-auto py-0.5 px-2  mx-2 rounded-sm  cursor-pointer
    
}
.tab-text-selected{
    @apply bg-transparent border-secondary border text-sm text-white m-auto py-0.5 px-2  mx-2 rounded-sm  cursor-pointer
}
.dt-layer{ 
    @apply w-[62rem] bg-gradient-to-b from-[#0075C94D] to-black  rounded-2xl border-2 border-[#0075C9];
}
.calendar-item{
    @apply flex w-full mb-4;
}
.task-page{
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

}
</style>
<script setup>
import TaskDateSwitcher from "./components/TaskDateSwitcher"
import MonthSwitcher from "./components/MonthSwitcher";
import TaskDataTable from "./components/TaskDataTable.vue";
const selectedDate = ref(new Date());

const selectedDateFormatted = computed(() =>
    transformDate(selectedDate.value)
);
let all_tab = ref(false);

let location_tab= ref(false);
let employees_tab = ref(false);

let startDay = new Date();
let day = startDay.getDay() === 0 ? 7 : startDay.getDay();
startDay.setDate(startDay.getDate() - day + 1);
const startOfTheWeek = ref(startDay);
const setSelectedDate = (val) => {
    selectedDate.value = val;
};
const setStartOfTheWeek = (val) => {
    startOfTheWeek.value = val;
};
const switchMonth = (month) => {
    let start_date = new Date(
        startOfTheWeek.value.getFullYear(),
        month,
        startOfTheWeek.value.getDate()
    );
    setStartOfTheWeek(start_date);
};

const selectAll=(text)=>{
    
    if(text=='all'){
        all_tab.value?all_tab.value=false:all_tab.value=true;
    }
    if(text=='location'){
        location_tab.value?location_tab.value=false:location_tab.value=true;
    }
    if(text=='employees'){
        employees_tab.value?employees_tab.value=false:employees_tab.value=true;
    }
}
</script>