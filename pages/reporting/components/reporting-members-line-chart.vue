<template>
  <ClientOnly>
    <apexchart
      class="gradient-bg mt-6"
      type="area"
      height="550"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </ClientOnly>
</template>
<script setup>
const series = [
  {
    name: "series1",
    data: [75, 51, 59, 57, 72],
  },
];

const chartOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  legend: {
    show: false,
  },
  annotations: {
    xaxis: [
      {
        x: 25,
        strokeDashArray: 3,
        borderColor: "#0074C8",
        yAxisIndex: 0,
        label: {
          show: false,
        },
      },
    ],
    points: [
      {
        x: 25,
        y: 80,
        marker: {
          size: 10,
          strokeColor: "#0074C8",
          radius: 2,
          cssClass: "apexcharts-custom-class",
        },
      },
    ],
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
    categories: [22, 23, 24, 25, 26],
    labels: {
      style: {
        colors: "hsl(var(--bc))",
      },
    },
  },
  yaxis: {
    tickAmount: 6,
    min: 40,
    max: 100,
    labels: {
      style: {
        colors: "hsl(var(--bc))",
      },
    },
  },
};
</script>
