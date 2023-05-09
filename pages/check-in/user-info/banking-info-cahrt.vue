<template>
  <ClientOnly>
    <apexchart
      type="donut"
      :width="width"
      :options="options"
      :series="data"
      class="flex justify-center"
    />
  </ClientOnly>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [54, 16, 23, 34],
  },
  width: {
    type: Number,
    default: 200,
  },
});

const options = {
  chart: {
    type: "donut",
  },
  labels: ["Take Home", "Taxes", "Benefits", "Retirement"],
  colors: ["#057BAF", "#FF9D00", "#D0DEE8", "#82D300"],
  legend: {
    show: true,
    labels: {
      colors: "#057BAF",
      useSeriesColors: false,
    },
    offsetY: 50,
    itemMargin: {
      horizontal: 0,
      vertical: 0,
    },
  },
  stroke: {
    show: false,
    width: 0,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    padding: {
      left: 0,
      right: 0,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },
          value: {
            show: true,
            fontSize: "22px",
            color: "hsl(var(--bc))",
            fontWeight: 400,
            offsetY: 8,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
            label: "Score",
          },
        },
      },
    },
  },
};
</script>
