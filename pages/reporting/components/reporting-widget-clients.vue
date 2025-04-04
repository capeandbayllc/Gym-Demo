<template>
  <card
    @click.self="(prevMonth = false), (prevYear = false)"
    title="Reporting Widget 4"
    class="bg-neutral"
    :options="{
      collapse: false,
      favorite: false,
      add: true,
    }"
  >
    <template #content>
      <div class="card-content">
        <div
          class="flex justify-center text-secondary text-xl -xl:text-sm -lg:text-xs font-medium mt-2"
        >
          NEW PT CLIENTS
        </div>
        <div
          class="grid grid-cols-10 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs text-center"
        >
          <filter-list
            @setFilter="setFilter($event)"
            :active-filter="activeFilter"
            :return-name="true"
          />
          <div class="col-span-5 mt-[-7px]">
            <comparison-selector
              label="Compare"
              :items="['Previous Month', 'Previous Year']"
              @change="reportBy($event)"
              :compareReport="compareReport"
            />
          </div>
        </div>
        <div id="chart">
          <ClientOnly>
            <apexchart
              type="bar"
              height="320"
              :options="chartOptions"
              :series="series[activeFilter]"
            ></apexchart>
          </ClientOnly>
        </div>
        {{ series["name"] }}
      </div>
      <Transition name="slide-fade">
        <ClientWidgetPopup
          v-if="prevMonth"
          :activeFilter="activeFilter"
          :data="series"
        />
      </Transition>
      <Transition name="slide-fade">
        <ClientWidgetPopup
          v-if="prevYear"
          :activeFilter="activeFilter"
          :data="series"
        />
      </Transition>
    </template>
  </card>
</template>
<script setup>
import { ref } from "vue";
import FilterList from "../components/filter-list.vue";
import ComparisonSelector from "../components/comparison-selector.vue";
import ClientWidgetPopup from "./client-widget-popup.vue";

// Data
const activeFilter = ref("TODAY");

let prevMonth = ref(false);
let prevYear = ref(false);

// Methods
const setFilter = (item) => {
  activeFilter.value = item;
};
const reportBy = (type) => {
  // if(type === 'prevMonth') {
  // 	prevMonth.value = !prevMonth.value
  // 	prevYear.value = false
  // }
  // if(type === 'prevYear'){
  // 	prevYear.value = !prevYear.value
  // 	prevMonth.value = false
  // }
};

// Chart Data
const series = {
  TODAY: [
    {
      data: [
        16, 27, 19, 32, 25, 32, 55, 60, 58, 55, 32, 32, 32, 55, 32, 27, 10, 25,
        55, 5, 34, 55,
      ],
    },
  ],
  MTD: [
    {
      data: [
        27, 32, 19, 55, 32, 27, 30, 25, 55, 12, 25, 32, 55, 60, 58, 55, 32, 55,
        32, 32, 34, 55,
      ],
    },
  ],
  QTD: [
    {
      data: [
        35, 22, 19, 12, 32, 55, 32, 27, 10, 25, 5, 34, 25, 32, 55, 60, 58, 55,
        55, 32, 32, 55,
      ],
    },
  ],
  YTD: [
    {
      data: [
        22, 22, 29, 62, 55, 32, 32, 32, 25, 32, 55, 60, 55, 58, 55, 32, 17, 10,
        25, 15, 34, 55,
      ],
    },
  ],
  RANGE: [
    {
      data: [
        32, 22, 19, 12, 25, 32, 55, 60, 58, 55, 32, 55, 32, 32, 55, 32, 7, 10,
        25, 5, 34, 55,
      ],
    },
  ],
};
const chartOptions = {
  chart: {
    type: "bar",
    height: "100%",
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
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
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
    // colors:  ['#0169b4'],
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#0074c8", "#042137"],
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
<style scoped lang="postcss">
.slide-fade-enter-active {
  @apply transition-all duration-300 ease-out;
}

.slide-fade-leave-active {
  @apply transition-all duration-300;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply transform translate-x-20 opacity-0;
}
</style>
