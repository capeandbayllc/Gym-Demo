<template>
    <ClientOnly>
        <apexchart type="area" :options="options" :series="data"></apexchart>
    </ClientOnly>
</template>
<script setup>

const props = defineProps({
    data: {
        type: Array,
        default: [],
    },
});

const options = {
    chart: {
        type: "spline",
        toolbar: {
            show: false,
        },
    },
    annotations: {
        xaxis: [
            {
                x: 1,
                strokeDashArray: 0,
                style: {
                    color: "hsl(var(--bc))",
                },
            },
            {
                x: 3,
                strokeDashArray: 0,
                style: {
                    color: "hsl(var(--bc))",
                },
            },
            {
                x: 5,
                strokeDashArray: 0,
                style: {
                    color: "hsl(var(--bc))",
                },
            },
        ],
    },
    colors: ["hsl(var(--s))", "hsl(var(--su))", "hsl(var(--a))"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 0.1,
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0,
            opacityTo: 0,
        },
    },
    grid: {
        show: false,
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: "smooth",
        width: 1,
    },
    xaxis: {
        min: 1,
        max: 7,
        grid: false,
        tooltip: { enabled: false },
        tickAmount: 2,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        tickAmount: 3,
        labels: {
            style: {
                colors: "hsl(var(--bc))",
            },
        },
        min: 0,
        max: 150,
    },
};
</script>
