<template>
    <div class="grid grid-cols-6 gap-3 mb-2 -lg:flex -lg:text-xs">
        <select-box
            :items="categoriesList"
            value=""
            :label="'Categories'" 
            class="col-start-2"
            >
        </select-box>
        <select-box
            :items="scheduleList"
            value=""
            :label="'Schedule Types'">
        </select-box>
        <select-box
            :items="agreementList"
            value=""
            :label="'Agreement Types'">
        </select-box>
        <select-box
            :items="availabilityList"
            value=""
            :label="'Availability'">
        </select-box>
        <select-box
            :items="locationList"
            value=""
            :label="'Locations'">
        </select-box>
    </div>
</template>
<script setup>
    const categoriesList = [
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