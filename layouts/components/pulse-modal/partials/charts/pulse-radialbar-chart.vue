<template>
  <apexchart type="radialBar" :options="options" height="140" :series="data" />
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
    type: "radialBar",
    toolbar: {
      show: false,
    },

    width: "100%",
    offsetY: 30,
    offsetX: 30,
  },
  stroke: {
    lineCap: "round",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "67%",
      },
      track: {
        background: "#fff",
        strokeWidth: 8,
        margin: 0,
      },
      dataLabels: {
        show: true,
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
