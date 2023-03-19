<template>
  <div
    class="absolute bottom-4 w-full max-w-[800px] h-[280px] bg- transition-all"
  >
    <ClientOnly>
      <apexchart
        type="bar"
        height="280"
        :options="popupChartOptions"
        :series="data[activeFilter]"
      ></apexchart>
    </ClientOnly>

  </div>
</template>
<script setup>
const props = defineProps({
  activeFilter: Boolean,
  data: Array
});
const popupChartOptions = {
  chart: {
    type: "bar",
    height: "100%",
    background: "#000",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      barHeight: "0%",
      borderRadius: 4.5,
      borderRadiusApplication: "around",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  labels: [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
    170, 180, 190, 200, 210,
  ],
  xaxis: {
    tickPlacement: "on",
    tooltip: {
      enabled: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    min: 0,
    max: 70,
    labels: {
      show: true,
      style: {
        colors: ["#fff"],
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  fill: {
    // opacity: 1,
    colors: ["#c0c0c0"],
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["gray", "black"],
      inverseColors: false,
      opacityTo: 0.1,
      stops: [0, 100],
      opacityFrom: 1,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
};
</script>

