<template>
    <ClientOnly>
        <apexchart width="100%" height="80" type="line" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
  
<script setup>
const props = defineProps({
    color: String
});

const chartOptions = {
    colors: [
        props.color
    ],
    stroke: {
        width: 3,
    },
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        colors: ['#00']
    },
    grid: {
        show: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        labels: {
        show: false
        },
        axisBorder: {
        show: false
        },
        axisTicks: {
        show: false
        }
    },
    yaxis: {
        labels: {
        show: false
        }
    }
};

const series = [{
    data: Array.from({length: 8}, () => Math.floor(Math.random() * 101))
}]

</script>