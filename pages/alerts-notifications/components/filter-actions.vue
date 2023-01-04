<template>
    <div class="grid grid-cols-6 gap-3 mb-2 -lg:flex -lg:text-xs">
        <select-box
            :items="categoriesType"
            value=""
            :label="'Categories'" 
            class="col-start-2"
            >
        </select-box>
        <select-box
            :items="notificationType"
            value=""
            :label="'Notifications'">
        </select-box>
        <select-box
            :items="alertsType"
            value=""
            :label="'Alert Types'">
        </select-box>
        <select-box
            :items="urgencyType"
            value=""
            :label="'Urgency'">
        </select-box>
        <select-box
            :items="locationType"
            value=""
            :label="'Locations'">
        </select-box>
    </div>
</template>
<script setup>
    const categoriesType = [
        {
            id: '1',
            label: "Categories ####"
        },
        {
            id: '2',
            label: "Categories ####"
        },
        {
            id: '3',
            label: "Categories ####"
        },
    ];
    const notificationType = [
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
    const alertsType = [
        {
            id: '1',
            label: "Alerts ####"
        },
        {
            id: '2',
            label: "Alerts ####"
        },
        {
            id: '3',
            label: "Alerts ####"
        },
    ];
    const urgencyType = [
        {
            id: '1',
            label: "Urgency  ####"
        },
        {
            id: '2',
            label: "Online"
        },
        {
            id: '3',
            label: "Urgency  ####"
        },
    ];
    const locationType = [
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