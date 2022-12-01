<template>
    <ClientOnly>
        <apexchart type="radialBar" height="400" :options="options" :series="data"></apexchart>
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
        type: "radialBar",
        offsetY: -20,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                strokeWidth: "100%",
                margin: 5,
                dropShadow: {
                    enabled: false,
                },
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    offsetY: -2,
                    fontSize: "22px",
                    color: "hsl(var(--bc))",
                },
            },
        },
    },
    colors: ["hsl(var(--s))"],
};
</script>
