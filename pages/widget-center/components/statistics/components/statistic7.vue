<template>
  <card
    title="Statistic 1"
    class="bg-base-300 text-base-content"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="flex justify-center">
        <apexchart
          width="220"
          type="radialBar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div class="px-7 pb-3">
        <div class="text-center">
          <h5 class="text-xl">Statistic Title</h5>
          <p class="text-xs text-neutral-content px-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            nulla nihil quia ad non amet elit.
          </p>
        </div>
        <div class="flex flex-wrap justify-center text-sm mt-5">
          <div class="box-container">
            <div class="box bg-blue-400"></div>
            Marketing
          </div>
          <div class="box-container">
            <div class="box bg-blue-500"></div>
            Finance
          </div>
          <div class="box-container">
            <div class="box bg-blue-600"></div>
            Influence
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<style scoped lang="postcss">
.box-container {
  @apply flex items-center m-1;

  .box {
    @apply w-3 h-3 mx-2 rounded;
  }
}
</style>

<script setup>
const chartOptions = {
  chart: {
    type: "radialBar",
  },
  stroke: {
    lineCap: "round",
  },
  legend: {
    show: false,
    position: "bottom",
    labels: {
      colors: ["#fff", "#fff", "#fff"],
    },
    fill: {
      colors: ["#04375c", "#0075c9", "#3fc0ff"],
    },
    markers: {
      width: 12,
      height: 12,
      strokeColor: "#fff",
      fillColors: ["#04375c", "#0075c9", "#3fc0ff"],
    },
  },
  plotOptions: {
    radialBar: {
      inverseOrder: true,
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "20px",
          fontWeight: 500,
          color: "#fff",
          offsetY: 6,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: true,
          label: "",
          style: {
            color: "#fff",
          },
          formatter: function (w) {
            return w.globals.initialSeries[0] + "%";
          },
        },
      },
      track: {
        show: true,
        background: "#0075c9",
        strokeWidth: "200px",
        opacity: 0.25,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
    },
  },
  fill: {
    colors: ["#3fc0ff", "#0075c9", "#04375c"],
  },
  labels: ["Marketing", "Finance", "Influence"],
};

const series = [48, 65, 85];
</script>
