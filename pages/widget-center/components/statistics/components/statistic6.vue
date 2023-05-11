<template>
  <card
    title="Statistic 1"
    class="bg-gradient-to-tr from-base-300 via-base-300/70 slim-text"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div>
        <div class="chart-area flex flex-col justify-between">
          <div class="grid grid-cols-10 header">
            <label class="col-span-2 text-[12px] text-base-content">{{
              title
            }}</label>
            <div class="col-span-5"></div>
            <div class="col-span-3 grid grid-cols-5">
              <div class="col-span-1 flex">
                <button
                  class="btn-status"
                  :class="lastWeek < 0 ? 'rotate-90' : '-rotate-90'"
                >
                  >
                </button>
              </div>
              <div class="col-span-4 grid grid-cols-1 ml-1">
                <span class="col-span-1 text-base-content text-[12px] text-left"
                  >Last Week</span
                >
                <span class="col-span-1 text-[14px] text-left">
                  {{
                    (lastWeek < 0 ? "-" : "+") + Math.abs(lastWeek).toFixed(2)
                  }}%</span
                >
              </div>
            </div>
          </div>
          <ClientOnly class="col-span-5">
            <apexchart
              height="225px"
              type="area"
              class="unit-sold-apex-chart"
              :options="options"
              :series="series"
            />
          </ClientOnly>
        </div>
      </div>
    </template>
  </card>
</template>
<style scoped lang="postcss">
.chart-area .btn-status {
  @apply w-[15px] h-[15px] bg-secondary rounded-full text-base-300 text-[10px] font-bold m-auto;
}
.chart-area {
  @apply p-[10px];
}
.chart-area .header {
  @apply mt-[5px] mb-[10px];
}
</style>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  title: {
    type: Array,
    default: [],
  },
  lastWeek: {
    type: Number,
    default: 0.1,
  },
  colorLightBlue: {
    type: Boolean,
    default: false,
  },
});

const series = [
  {
    name: "comming",
    data: props.data,
  },
];

const options = {
  chart: {
    type: "area",
    background: "",
    toolbar: {
      show: false,
    },
    events: {
      mouseMove: function (event, chartContext, config) {
        var tooltip = chartContext.el.querySelector(".apexcharts-tooltip");
        var pointsArray = config.globals.pointsArray;
        var seriesIndex = config.seriesIndex;
        var dataPointIndex =
          config.dataPointIndex === -1 ? 0 : config.dataPointIndex;

        if (seriesIndex !== -1) {
          var position = pointsArray[seriesIndex][dataPointIndex];

          tooltip.style.top = position[1] + "px";
          tooltip.style.left = position[0] + "px";
        }
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
    colors: ["#FFF"],
  },
  xaxis: {
    type: "category",
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    tooltip: {
      enabled: false,
    },
    color: "#FFF",
    labels: {
      style: {
        colors: "#FFF",
      },
    },
    crosshairs: {
      show: true,
      position: "front",
      opacity: 0.9,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  fill: {
    type: "gradient",
    colors: props.colorLightBlue ? "#3FC0FF" : "#008efa",
    gradient: {
      shade: props.colorLightBlue ? "light" : "dark",
      type: "vertical",
      shadeIntensity: props.colorLightBlue ? 10 : 1,
      gradientToColors: props.colorLightBlue
        ? ["#003650", "#3FC0FF"]
        : ["#0C1C31", "#0077ac"],
      inverseColors: true,
      opacityTo: props.colorLightBlue ? 6 : 1,
      opacityFrom: props.colorLightBlue ? 10 : 1,
    },
  },
  markers: {
    size: 0,
    strokeColors: "#fff",
    strokeWidth: 4,
    strokeOpacity: 0.9,
    radius: 2,
    hover: {
      size: 5,
      sizeOffset: 3,
    },
  },
  tooltip: {
    enabled: true,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="arrow_box p-2">
                    <span class="text-neutral-content">Earning</span>
                    <p>$${series[seriesIndex][dataPointIndex]}</p>
                </div>`;
    },
  },
};
</script>
