<template>
  <div class="flex gap-4 flex-wrap xl:flex-nowrap mx-4 overflow-hidden">
    <div class="toggle-custom" :class="{ 'toggle-active': leadsCheck }">
      <div @click="changeLeadsCheck" class="circle"></div>
      <div @click="changeLeadsCheck" class="line"></div>
      <span @click="changeLeadsCheck"> Leads </span>
    </div>
    <div class="toggle-custom" :class="{ 'toggle-active': membersCheck }">
      <div @click="changeMembersCheck" class="circle"></div>
      <div @click="changeMembersCheck" class="line"></div>
      <span @click="changeMembersCheck"> Members </span>
    </div>
    <div class="toggle-custom" :class="{ 'toggle-active': employeesCheck }">
      <div @click="changeEmployeesCheck" class="circle"></div>
      <div @click="changeEmployeesCheck" class="line"></div>
      <span @click="changeEmployeesCheck"> Employees </span>
    </div>
    <div class="toggle-custom" :class="{ 'toggle-active': segmentsCheck }">
      <div @click="changeSegmentsCheck" class="circle"></div>
      <div @click="changeSegmentsCheck" class="line"></div>
      <span @click="changeSegmentsCheck"> Segments </span>
    </div>
    <button class="text-gray-400" @click="setActiveAction('')">Clear</button>
  </div>
</template>
<script setup>
const activeBtn = ref("");
const emit = defineEmits(["people-search-action-selected"]);

const leadsCheck = ref(false);
const changeLeadsCheck = () => {
  setActiveAction("leads");
  leadsCheck.value = !leadsCheck.value;
};

const membersCheck = ref(false);
const changeMembersCheck = () => {
  setActiveAction("members");
  membersCheck.value = !membersCheck.value;
};

const employeesCheck = ref(false);
const changeEmployeesCheck = () => {
  // No work
  // setActiveAction('employees');
  employeesCheck.value = !employeesCheck.value;
};

const segmentsCheck = ref(false);
const changeSegmentsCheck = () => {
  setActiveAction("segments");
  segmentsCheck.value = !segmentsCheck.value;
};

const setActiveAction = (name) => {
  if (name === activeBtn.value) {
    activeBtn.value = "";
    emit("people-search-action-selected", "");
  } else {
    activeBtn.value = name;
    emit("people-search-action-selected", name);
  }
};
</script>
