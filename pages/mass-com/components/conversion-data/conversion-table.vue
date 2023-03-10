<template>
    <data-table
        :collapsed="true"
        :columns="columns"
        :data="data"
        noHeader
        class="conversion-table"
    ></data-table>
</template>

<style>
.conversion-table {
    @apply h-80 overflow-x-auto;
    table {
        @apply w-max md:w-full;
    }
}
@media only screen and (max-width: 768px) {
    .conversion-table {
        width: calc(100vw - 96px);
    }
}
</style>

<script setup>
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
    },
    {
        id: 2,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
    },
    {
        id: 3,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
    },
    {
        id: 4,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
    },
    {
        id: 5,
        name: "Chad Hodges",
        unit: "Unit #",
        membership: "Membership",
        revenue: "$0.00",
    },
];
</script>
