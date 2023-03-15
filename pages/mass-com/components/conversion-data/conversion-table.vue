<template>
    <data-table
        :collapsed="true"
        :columns="columns"
        :data="data"
        :rowComponent="ConversionTableRow"
        class="conversion-table"
    />
</template>

<style>
.conversion-table {
    @apply h-80 overflow-x-auto w-full;
    table {
        @apply w-max md:w-full;

        th {
            @apply text-secondary
        }
    }
}
</style>

<script setup>
import ConversionTableRow from "./conversion-table-row.vue";

const columns = [
    {
        field: "id",
        label: " ",
    },
    {
        field: "name",
        label: "Name",
    },
    {
        field: "unit",
        label: "Unit(s) Sold",
    },
    {
        field: "membership",
        label: "Membership(s) Sold",
    },
    {
        field: "revenue",
        label: "Revenue",
    },
];

const data = [
    {
        id: 1,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
        src: '/chat-conversation/1.png'
    },
    {
        id: 2,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
        src: '/chat-conversation/1.png'
    },
    {
        id: 3,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
        src: '/chat-conversation/1.png'
    },
    {
        id: 4,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
        src: '/chat-conversation/1.png'
    },
    {
        id: 5,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
        src: '/chat-conversation/1.png'
    },
];
</script>
