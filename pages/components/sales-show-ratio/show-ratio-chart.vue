<template>
  <ClientOnly>
    <apexchart type="bar" :options="options" :series="data" />
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
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["hsl(var(--s))"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
  },
  grid: {
    borderColor: "hsl(var(--s))",
    show: true, // you can either change hear to disable all grids
    xaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    yaxis: {
      lines: {
        show: true, //or just here to disable only y axis
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  yaxis: {
    grid: false,
    labels: {
      style: {
        colors: "hsl(var(--bc))",
      },
      formatter: function (val, index) {
        return parseInt(val) + "%";
      },
    },
    min: 0,
    max: 100,
    tickAmount: 2,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: ["No-Show", "Show", "Reschedule", "Closed"],
    grid: false,
    labels: {
      style: {
        colors: "hsl(var(--bc))",
      },
      rotate: 0,
    },
    tickAmount: 3,
    tooltip: { enabled: false },
  },
};
</script>
