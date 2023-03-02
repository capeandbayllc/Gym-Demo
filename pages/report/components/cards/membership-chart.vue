<template>
    <ClientOnly>
        <apexchart
            type="donut"
            :width="width"
            :options="options"
            :series="data"
        />
    </ClientOnly>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: [54, 16, 23, 34],
    },
    width: {
        type: Number,
        default: 200,
    },
});

const options = {
    chart: {
        type: "donut",
    },
    labels: ["bronze", "silver", "gold", "platinum", "addon"],
    colors: [
        "hsl(var(--wa))",
        "hsl(var(--er))",
        "hsl(var(--in))",
        "hsl(var(--bc))",
    ],
    legend: {
        show: false,
    },
    stroke: {
        show: false,
        width: 0,
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        padding: {
            left: 0,
            right: 0
        }
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: false,
                    },
                    value: {
                        show: true,
                        fontSize: "22px",
                        color: "hsl(var(--bc))",
                        fontWeight: 400,
                        offsetY: 8,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                },
            },
        },
    },
};
</script>
