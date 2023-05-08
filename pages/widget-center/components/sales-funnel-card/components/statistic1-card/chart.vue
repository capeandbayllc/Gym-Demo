<template>
  <ClientOnly>
    <apexchart
      type="donut"
      height="140"
      width="190"
      :options="options"
      :series="[23, 34, 54, 16]"
    />
  </ClientOnly>
</template>
<script setup>
const options = {
  chart: {
    type: "donut",
  },
  labels: ["Online", "Instore", "Other"],
  colors: ["#c5c8ca", "#06538d", "#0074c8", "#04385e"],
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
            label: "48%",
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
