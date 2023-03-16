<template>
  <apexchart type="line" :options="options" :series="data" />
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [{ type: "line", data: [0, 2, 2, 15, 12, 8, 13, 8, 14, 15, 12] }],
  },
});

const options = {
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  stroke: {
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  chart: {
    toolbar: {
      show: false,
    },
    height: "100%",
    width: "100%",
    offsetY: 60,
  },
};
</script>
