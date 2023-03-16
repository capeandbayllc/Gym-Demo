<template>
  <apexchart type="bar" :options="options" height="100%" :series="data" />
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [
      {
        type: "bar",
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 12,
          },
          {
            x: "category C",
            y: 15,
          },
          {
            x: "category D",
            y: 8,
          },
          {
            x: "category E",
            y: 21,
          },
          {
            x: "category F",
            y: 15,
          },
        ],
      },
    ],
  },
});

const options = {
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
    type: "bar",
    toolbar: {
      show: false,
    },
    height: "100%",
    width: "100%",
    offsetY: 20,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: 50,
    },
  },
};
</script>
