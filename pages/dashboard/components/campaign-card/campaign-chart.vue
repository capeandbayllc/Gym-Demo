<template>
    <ClientOnly>
        <apexchart
            type="donut"
            height="280"
            :options="options"
            :series="data"
        />
    </ClientOnly>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: [25, 45, 20, 10],
    },
});

const options = {
    chart: {
        type: "donut",
    },
    labels: ["basic", "premimum", "platinum", "addon"],
    colors: [
        "#CBCBCB",
        "#0074C8",
        "#06538B",
        "#04375C",
    ],
    legend: {
        show: false,
    },
    stroke: {
        lineCap: "round",
        show: false,
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%"
        },
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
                background: '#0074c863',
                labels: {
                    show: true,
                    name: {
                        show: true,
                    },
                    value: {
                        show: true,
                        fontSize: "15px",
                        color: "hsl(var(--bc))",
                        fontWeight: 400,
                        offsetY: 8,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: '$14,145',
                        fontSize: '29px',
                        fontWeight: 600,
                        color: 'hsl(var(--bc))',
                        formatter: function (w) {
                            return 'Cash Report'
                        }
                    }
                },
            },
        },
    },
};
</script>