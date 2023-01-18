<template>
    <ClientOnly>
        <apexchart class="reporting-members-line-chart mt-6" type="area" height="500" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<style scoped>
.reporting-members-line-chart {
    background: linear-gradient(to bottom,  #191919 0%,#191919 0%,#171f25 1%,#11344f 1%,#0e3d5f 1%,#0d436b 1%,#0d4168 99%,#0e4064 100%,#152531 100%,#191919 100%);
}
</style>
<script setup>
const series = [
    {
        name: 'series1',
        data: [75, 51, 59, 57, 72]
    }, 
];

const  chartOptions = {
    chart: {
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1,
    },
    legend: {
        show: false,
    },
    annotations: {
        xaxis: [
            {
                x: 25,
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: false,
                }
            }
        ],
        points: [
            {
                x: 25,
                y: 80,
                marker: {
                    size: 8,
                    strokeColor: '#0074C8',
                    radius: 2,
                    cssClass: 'apexcharts-custom-class'
                },
            },
        ]
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
        categories: [22, 23, 24, 25, 26],
        labels: {
            style: {
                colors: "hsl(var(--bc))",
            },
        },
    },
    yaxis: {
        tickAmount: 6,
        min:40,
        max:100,
        labels: {
            style: {
                colors: "hsl(var(--bc))",
            },
        },
    }
}
</script>
