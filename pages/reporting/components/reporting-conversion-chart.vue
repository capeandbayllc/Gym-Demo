<template>
    <ClientOnly>
        <apexchart class="gradient-bg mt-2" height="145" type="area" :options="options" :series="data"></apexchart>
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
                x: 0,
                strokeDashArray: 0,
                style: {
                    color: "hsl(var(--bc))",
                },
            },
            {
                x: 1,
                strokeDashArray: 0,
                style: {
                    color: "hsl(var(--bc))",
                },
            },
            {
                x: 2,
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
                x: 4,
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
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 0.1,
        type: "gradient",
        gradient: {
            gradientToColors: ['#008CFF'],
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
        grid: false,
        tooltip: { enabled: false },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        categories: [0, 1, 2, 3, 4, 5 ],
        labels: {
            style: {
                colors: "hsl(var(--bc))",
            },
        },
    },
    yaxis: {
        tickAmount: 4,
        labels: {
            style: {
                colors: "hsl(var(--bc))",
            },
        },
        min: 0,
        max: 4,
        categories: [1.00, 2.00, 3.00, 4.00, 5.00]
    },
};
</script>
