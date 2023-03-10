<template>
    <ClientOnly>
        <apexchart
            type="donut"
            height="200"
            :options="options"
            :series=[25,65,10]
        />
    </ClientOnly>
</template>
<script setup>

const options = {
    chart: {
        type: "donut",
    },
    labels: ["Closed", "Shown", "Scheduled"],
    colors: [
        "#cbccc9",
        "#0077cb",
        "#00375b",
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
            expandOnClick: false,
            donut: {
                background: '#0074c863',
                labels: {
                    show: true,
                    name: {
                        show: true,
                    },
                    value: {
                        show: false,
                        fontSize: "25px",
                        color: "hsl(var(--bc))",
                        fontWeight: 400,
                        offsetY: 8,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: '65%',
                        fontSize: '40px',
                        fontWeight: 600,
                        color: 'hsl(var(--bc))'
                    }
                },
            },
        },
    },
};
</script>