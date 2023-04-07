<template>
    <div class="flex w-full mb-4">
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
        <div class="tab-text ">
            All
        </div>
        <div class="tab-text">
            Location
        </div>
        <div class="tab-text">
            Employees
        </div>
    </div>

    <div class="dt-layer">
        <TaskDataTable title="Today" ></TaskDataTable>
        <TaskDataTable title="Overdue" ></TaskDataTable>
        <TaskDataTable title="Completed" ></TaskDataTable>
    </div>



</template>
<style>
.tab-text{
    @apply bg-secondary text-sm text-white m-auto py-0.5 px-2  mx-2 rounded-sm  cursor-pointer  active:bg-transparent active:border-secondary  active:border focus:outline-none focus:ring focus:ring-violet-300 ;
}
.dt-layer{ 
    @apply w-[62rem] bg-gradient-to-b from-[#0075C94D] to-black  rounded-2xl border-2 border-[#0075C9];
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
 onUpdated(()=>{
     console.log(startOfTheWeek.value.getMonth())
}) 
</script>