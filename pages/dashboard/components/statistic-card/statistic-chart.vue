<template>
    <ClientOnly>
        <apexchart
            type="area"
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
        data: [220, 170, 165, 140, 160, 125, 235],
    },
    {
        name: "Renewals",
        data: [180, 155, 125, 200, 210, 160, 200],
    },
];

const options = {
    chart: {
        type: "area",
        toolbar: {
            show: false,
        },
    },
    colors: ["hsl(var(--s))", "hsl(var(--s))"],
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
    annotations: {
        points: [
            {
                x: 120,
                y: 125,
                marker: {
                    size: 8,
                    fillColor: '#0074C8',
                    strokeColor: '#0074C8',
                    radius: 2,
                    cssClass: 'apexcharts-custom-class'
                },
                label: {
                    borderColor: '#004B81',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#004B81',
                        fontSize: '12px',
                        fontWeight: 400,
                    },
                    text: '11 Febuary $24.150',
                }
            },
            {
                x: 320,
                y: 130,
                marker: {
                    size: 8,
                    fillColor: '#0074C8',
                    strokeColor: '#0074C8',
                    radius: 2,
                    cssClass: 'apexcharts-custom-class'
                },
                label: {
                    borderColor: '#004B81',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#004B81',
                        fontSize: '12px',
                        fontWeight: 400,
                    },
                    text: '11 March $24.150',
                }
            }
        ],
    },
};
</script>
