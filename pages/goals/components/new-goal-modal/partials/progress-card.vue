<template>
  <card>
    <template #header>
      <h3 class="text-base-content text-secondary text-lg font-semibold">
        Progress
      </h3>
    </template>
    <template #content>
      <div class="overflow-auto max-w-full">
        <div class="flex items-end overflow-hidden">
          <apexchart
            width="250"
            class="w-[195px] ml-[-60px]"
            type="radialBar"
            :options="chartOptions"
            :series="series"
          ></apexchart>
          <div class="mb-[20px]">
            <div class="box-container">
              <div class="box bg-secondary"></div>
              Completed
            </div>
            <div class="box-container">
              <div class="box bg-secondary/60"></div>
              To Go
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-3 mt-1">
          <p class="font-semibold">
            <span class="text-sm text-secondary mr-2">Total:</span> $0.00
          </p>
          <Button size="sm" class="normal-case px-4" secondary> Detail </Button>
        </div>
      </div>
    </template>
  </card>
</template>

<style setup lang="postcss">
.description-textarea {
  @apply border p-3 rounded-xl mt-3 bg-base-300 w-full focus:outline-none h-40 resize-none;
}
.box-container {
  @apply flex items-center m-1 mb-2 text-sm;

  .box {
    @apply w-4 h-4 mr-3;
  }
}
</style>

<script setup>
import Card from "./card.vue";
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
      colors: [],
    },
    markers: {
      width: 12,
      height: 12,
      strokeColor: "#fff",
      fillColors: [],
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
        background: "#06538b",
        strokeWidth: "100px",
        opacity: 1,
        margin: 2,
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
    colors: ["#0075c9"],
  },
  labels: ["Marketing", "Finance", "Influence"],
};
const series = [0];
</script>
