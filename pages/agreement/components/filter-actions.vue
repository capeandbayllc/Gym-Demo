<template>
    <div class="flex flex-wrap gap-2 md:gap-5">
        <select-box
            :items="nameList"
            value=""
            :label="'Name'" 
            class="bg-secondary rounded select-box-filter-size"
            >
        </select-box>
        <select-box
            :items="statusList"
            value=""
            :label="'Status'" 
            class="bg-secondary rounded select-box-filter-size"
            >
        </select-box>
        <select-box
            :items="scheduleList"
            value=""
            :label="'Schedule Types'"
            class="bg-secondary rounded select-box-filter-size">
        </select-box>
        <select-box
            :items="agreementList"
            value=""
            :label="'Agreement Types'"
            class="bg-secondary rounded select-box-filter-size">
        </select-box>
        <select-box
            :items="availabilityList"
            value=""
            :label="'Availability'"
            class="bg-secondary rounded select-box-filter-size">
        </select-box>
        <select-box
            :items="locationList"
            value=""
            :label="'Locations'"
            class="bg-secondary rounded select-box-filter-size">
        </select-box>
    </div>
</template>
<script setup>
    const nameList = [
        {
            id: '1',
            label: "Contracts"
        },
        {
            id: '2',
            label: "Forms"
        },
        {
            id: '3',
            label: "Training & Development"
        },
    ];
    const statusList = [
        {
            id: '1',
            label: "Contracts"
        },
        {
            id: '2',
            label: "Forms"
        },
        {
            id: '3',
            label: "Training & Development"
        },
    ];
    const scheduleList = [
        {
            id: '1',
            label: "Term"
        },
        {
            id: '2',
            label: "Open Ended"
        },
        {
            id: '3',
            label: "Paid in Full"
        },
    ];
    const agreementList = [
        {
            id: '1',
            label: "Membership"
        },
        {
            id: '2',
            label: "Personal Training"
        },
        {
            id: '3',
            label: "Childcare"
        },
        {
            id: '4',
            label: "Spa"
        },
        {
            id: '5',
            label: "Sports"
        },
    ];
    const availabilityList = [
        {
            id: '1',
            label: "Instore"
        },
        {
            id: '2',
            label: "Online"
        },
        {
            id: '3',
            label: "In App"
        },
    ];
    const locationList = [
        {
            id: '1',
            label: "Location ####"
        },
        {
            id: '2',
            label: "Location ####"
        },
        {
            id: '3',
            label: "Location ####"
        },
        {
            id: '4',
            label: "Location ####"
        },
        {
            id: '5',
            label: "Location ####"
        },
    ];
</script>