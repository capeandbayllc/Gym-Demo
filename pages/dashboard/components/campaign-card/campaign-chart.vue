<template>
    <ClientOnly>
        <apexchart
            type="donut"
            height="240"
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
});

const options = {
    chart: {
        type: "donut",
    },
    labels: ["basic", "premimum", "platinum", "addon"],
    colors: [
        "hsl(var(--wa))",
        "hsl(var(--er))",
        "hsl(var(--in))",
        "hsl(var(--s))",
    ],
    legend: {
        show: false,
    },
    stroke: {
        lineCap: "round",
        show: false,
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