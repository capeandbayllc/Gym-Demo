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
        data: [180, 200, 220, 250,230,220,200,180,150],
    },
    {
        name: "Renewals",
        data: [220, 200, 170, 160,150,160,180,200,220 ],
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
                x: 270,
                y: 180,
                marker: {
                    size: 5,
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
                    text: '11 December $24.150',
                }
            },
            
            {
                x: 85,
                y: 175,
                marker: {
                    size: 5,
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
                        height:'3rem',
                    },
                    text: '27 November $241.150',
                }
            }
        ],
    },
};
</script>
