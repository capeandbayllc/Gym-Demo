<template>
  <ClientOnly>
    <apexchart
      type="donut"
      height="150"
      width="140"
      :options="options"
      :series="[25, 65, 10]"
    />
  </ClientOnly>
</template>
<script setup>
const options = {
  chart: {
    type: "donut",
  },
  labels: ["Online", "Instore", "Other"],
  colors: ["#cbccc9", "#0077cb", "#00375b"],
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
      return val + "%";
    },
  },
  grid: {
    padding: {
      left: 0,
      right: 0,
    },
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        offsetY: 100,
        labels: {
          show: true,
          name: {
            show: true,
            offsetY: 10,
          },
          value: {
            show: false,
            fontSize: "18px",
            color: "hsl(var(--bc))",
            fontWeight: 400,
            offsetY: 8,
          },
          total: {
            show: true,
            showAlways: true,
            label: "30%",
            fontSize: "30px",
            fontWeight: 500,
            color: "hsl(var(--bc))",
          },
        },
      },
    },
  },
};
</script>
