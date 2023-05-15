<template>
  <card
    title="Statistic Title"
    class="bg-gradient-to-tr from-base-300 via-base-300/70 slim-text"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="px-5 pl-3" style="width: 100%">
        <apexchart
          id="drafting-report-chart"
          type="bar"
          width="100%"
          height="400"
          :options="chartOptions"
          :series="chartSeries"
        ></apexchart>
      </div>
    </template>
  </card>
</template>
<script setup>
const chartOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
      type: "",
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      barHeight: "0%",
      borderRadius: 4.5,
      borderRadiusApplication: "around",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  fill: {
    colors: ["#0275c9", "#293e4d"],
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.1,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 50, 100],
    },
  },
  colors: ["#40c0ff", "#b8c0c6", "#04365c"],
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (val) {
        return val + "k";
      },
      style: {
        colors: ["#fff"],
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      console.log(seriesIndex, dataPointIndex, "context");
      return `<div class="px-3">
                ${series[seriesIndex][dataPointIndex]}
            </div>`;
    },
  },
};
const chartSeries = [
  {
    name: "Statistic 1",
    data: [
      10, 20, 37, 30, 47, 25, 20, 10, 15, 20, 30, 15, 20, 10, 23, 30, 17, 20,
      42, 10, 20, 25, 20, 45, 48, 52, 55, 50, 55, 60, 45, 30, 40, 37, 27, 17, 7,
      25, 28, 32, 27, 30, 26, 23, 19, 23, 12,
    ],
  },
  {
    name: "Statistic 2",
    data: [
      25, 43, 55, 30, 22, 18, 13, 47, 58, 33, 41, 54, 15, 23, 34, 21, 36, 17,
      16, 26, 47, 36, 18, 10, 42, 49, 47, 51, 36, 28, 12, 29, 22, 57, 56, 39,
      19, 27, 12, 18, 25, 41, 19, 60, 33, 47, 12,
    ],
  },
];
</script>

<style lang="postcss">
#drafting-report-chart .apexcharts-legend {
  @apply flex justify-start pt-6;
}

#drafting-report-chart .apexcharts-legend-series {
  @apply bg-base-content/90 flex p-2 rounded-lg px-4;
}

#drafting-report-chart .apexcharts-legend-series .apexcharts-legend-marker {
  @apply rounded-[3px] mr-2;
}

#drafting-report-chart .apexcharts-legend-series .apexcharts-legend-text {
  @apply font-bold text-base-300 text-[14px];
}
</style>
