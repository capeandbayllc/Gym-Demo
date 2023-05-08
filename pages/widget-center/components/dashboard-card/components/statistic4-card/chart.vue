<template>
  <div class="example">
    <apexchart
      width="100%"
      height="150"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
const chartOptions = {
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
    ],
    labels: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: "#e4e4e4",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 10,
    },
  },
  legend: {
    show: false,
  },
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    colors: ["#00"],
  },
  stroke: {
    width: 3,
  },
  tooltip: {
    enabled: false,
  },
};
const series = [
  { name: "Series A", data: [30, 40, 45, 50, 49, 60, 70, 91] },
  {
    name: "Series B",
    data: [23, 43, 54, 12, 44, 52, 32, 11],
  },
];
</script>
<style>
.apexcharts-xaxis-label,
.apexcharts-yaxis-label {
  fill: #ccc;
}
</style>
