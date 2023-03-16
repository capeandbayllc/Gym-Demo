<template>
  <apexchart type="radialBar" :options="options" :series="data" />
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [75],
  },
});

const options = {
  chart: {
    width: "100%",
    height: "auto",
    type: "radialBar",
    offsetY: 12,
    offsetX: 28,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    lineCap: "round",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
    },
    radialBar: {
      hollow: {
        margin: 9,
        size: "67%",
      },
      track: {
        startAngle: 0,
        endAngle: 0,
        strokeWidth: "20%",
        margin: 0,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: 16,
          color: "white",
          offsetY: 6,
        },
      },
    },
  },
};
</script>
