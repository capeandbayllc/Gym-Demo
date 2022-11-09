<template>
    <ClientOnly>
        <apexchart
            type="area"
            :height="170"
            :options="options"
            :series="mock"
        />
    </ClientOnly>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: [],
    },
});

const mock = [
    {
        name: "New Members",
        data: [65, 80, 70, 150, 90, 210, 180],
    },
    {
        name: "Renewals",
        data: [20, 65, 250, 80, 150, 120, 90],
    },
];

const options = {
    chart: {
        type: "area",
        toolbar: {
            show: false,
        },
    },
    colors: ["hsl(var(--in))", "hsl(var(--af))"],
    fill: {
        type: "gradient",
        opacity: 0.1,
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0.5,
            stops: [100, 100, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
        padding: {
            left: 0,
            right: 0,
            bottom: 0
        },
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: "smooth",
        width: 1,
    },
    xaxis: {
        grid: false,
        tooltip: { enabled: false },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
        },
    },
    yaxis: {
        min: 0,
        max: 250,
        tickAmount: 5,
        labels: {
            show: false,
        },
    },
};
</script>
