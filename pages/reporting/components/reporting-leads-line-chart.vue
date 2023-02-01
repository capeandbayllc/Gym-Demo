<template>
    <ClientOnly>
        <apexchart class="gradient-bg rounded mt-2" type="area"  height="145" :options="options" :series="series"></apexchart>
    </ClientOnly>
</template>
<script setup>
const series = [
    {
        name: "series2",
        data: [22, 20, 40, 77, 87, 55, 108],
    },
    {
        name: "series3",
        data: [45, 15, 12, 30, 87],
    },
];
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
                x: 5,
                strokeDashArray: 0,
                style: {
                    color: "hsl(var(--bc))",
                },
            },
        ],
        points: [
            {
                x: 185,
                y: 80,
                marker: {
                    size: 6,
                    fillOpacity: 1,
                    strokeColor: '#0074C8',
                    radius: 2,
                },
            },
        ]
    },
    colors: ["hsl(var(--bc))", "hsl(var(--s))"],
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
        labels: {
            show: false,
        },
        tickAmount: 3,
        min: 0,
        max: 150,
    },
};
</script>
