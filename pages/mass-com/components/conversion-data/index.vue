<template>
  <div class="flex flex-col mt-9 mb-4">
    <div class="flex flex-row flex-wrap justify-between pb-3">
      <div class="text-xl font-bold">Conversion Data</div>
      <ConversionFilters />
    </div>
    <div
      class="flex flex-col lg:flex-row border border-secondary justify-between rounded-2xl p-4 bg-base-300"
    >
      <div class="flex flex-col lg:w-2/3 w-full">
        <div class="text-xl">April</div>
        <div
          class="flex flex-col items-center md:flex-row md:justify-between mb-4"
        >
          <div
            v-for="item in conversions"
            :key="item.label"
            class="flex flex-col items-center w-fit"
          >
            <apexchart
              type="donut"
              :width="200"
              :options="options"
              :series="chartData"
              class="flex justify-center"
            />
            <span>{{ item.label }}</span>
          </div>
        </div>
        <ConversionTable />
      </div>
      <div class="mt-4 lg:mt-0 lg:w-1/3 w-fit self-center lg:pl-6">
        <ConversionSummary />
      </div>
    </div>
  </div>
</template>

<script setup>
import ConversionFilters from "./conversion-filters.vue";
import ConversionTable from "./conversion-table.vue";
import ConversionSummary from "./conversion-summary.vue";

const props = defineProps({
  data: Object,
});

let conversions = [
  { label: "Success", progress: 65 },
  { label: "Bounced", progress: 25 },
  { label: "Rescheduled", progress: 10 },
];

const chartData = [54, 16, 23, 34];

const options = {
  chart: {
    type: "donut",
  },
  labels: ["Take Home", "Taxes", "Benefits", "Retirement"],
  colors: ["#057BAF", "#FF9D00", "#D0DEE8", "#82D300"],
  legend: {
    show: false,
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
