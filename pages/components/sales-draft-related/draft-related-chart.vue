<template>
    <ClientOnly>
        <apexchart
            type="bar"
            :options="options"
            :series="data"
            :width="490"
            :height="280"
        />
    </ClientOnly>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
    data: {
        type: Array,
        default: [],
    },
});

const options = {
    chart: {
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    colors: ["hsl(var(--s))"],
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    annotations: {
        yaxis: [
            {
                y: 0,
                strokeDashArray: 0,
                borderColor: "hsl(var(--s))",
                offsetY: 0,
            },
            {
                y: 80,
                strokeDashArray: 0,
                borderColor: "hsl(var(--s))",
                offsetY: -2,
            },
        ],
    },
    grid: {
        borderColor: "hsl(var(--s))",
        show: true, // you can either change hear to disable all grids
        xaxis: {
            lines: {
                show: false, //or just here to disable only x axis grids
            },
        },
        yaxis: {
            lines: {
                show: false, //or just here to disable only y axis
            },
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            },
        },
    },
    yaxis: [
        {
            grid: false,
            labels: {
                style: {
                    colors: "hsl(var(--bc))",
                },
            },
            axisBorder: {
                show: true,
                color: "hsl(var(--s))",
            },
        },
        {
            opposite: true,
            axisBorder: {
                show: true,
                color: "hsl(var(--s))",
            },
            labels: {
                show: false,
            },
            width: 2,
        },
    ],
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        categories: [
            "PR",
            "RA",
            ["Customer", "Requirements"],
            ["System", "Requirements"],
            ["Related Use", "Scenarios"],
        ],
        grid: false,
        labels: {
            style: {
                colors: "hsl(var(--bc))",
                fontSize: 8,
            },
            rotate: 0,
        },
        tickAmount: 5,
        tooltip: { enabled: false },
    },
};
</script>
