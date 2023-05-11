<template>
  <card
    title="Statistic 1"
    class="bg-gradient-to-tr from-base-300 via-base-300/70 slim-text"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div>
        <div class="percentage-container p-4">
          <div class="flex relative items-center justify-between mb-4">
            <label
              class="header block text-[14px] py-2 whitespace-nowrap mr-2"
            ></label>
            <FormFilterButton>
              <template v-slot:filters>
                <div class="flex space-x-5">
                  <SwitchGroup as="div" class="flex items-center">
                    <Switch
                      v-model="filters.location"
                      class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                    >
                      <span
                        aria-hidden="true"
                        class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                        ]"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          filters.location
                            ? 'translate-x-5 bg-secondary border-secondary'
                            : 'translate-x-0 bg-neutral-content border-neutral-content',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                        ]"
                      />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3 text-sm">
                      <span
                        class="font-medium"
                        :class="
                          filters.location
                            ? 'text-secondary'
                            : 'text-neutral-content'
                        "
                        >Location</span
                      >
                    </SwitchLabel>
                  </SwitchGroup>

                  <SwitchGroup as="div" class="flex items-center">
                    <Switch
                      v-model="filters.type"
                      class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                    >
                      <span
                        aria-hidden="true"
                        class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                        ]"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          filters.type
                            ? 'translate-x-5 bg-secondary border-secondary'
                            : 'translate-x-0 bg-neutral-content border-neutral-content',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                        ]"
                      />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3 text-sm">
                      <span
                        class="font-medium"
                        :class="
                          filters.type
                            ? 'text-secondary'
                            : 'text-neutral-content'
                        "
                        >Type</span
                      >
                    </SwitchLabel>
                  </SwitchGroup>

                  <SwitchGroup as="div" class="flex items-center">
                    <Switch
                      v-model="filters.alert"
                      class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                    >
                      <span
                        aria-hidden="true"
                        class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                        ]"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          filters.alert
                            ? 'translate-x-5 bg-secondary border-secondary'
                            : 'translate-x-0 bg-neutral-content border-neutral-content',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                        ]"
                      />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3 text-sm">
                      <span
                        class="font-medium"
                        :class="
                          filters.alert
                            ? 'text-secondary'
                            : 'text-neutral-content'
                        "
                        >Alert</span
                      >
                    </SwitchLabel>
                  </SwitchGroup>

                  <SwitchGroup as="div" class="flex items-center">
                    <Switch
                      v-model="filters.segments"
                      class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-secondary focus:ring-offset-2"
                    >
                      <span
                        aria-hidden="true"
                        class="pointer-events-none absolute h-full w-full rounded-md bg-base-content"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          'bg-base-100 pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                        ]"
                      />
                      <span
                        aria-hidden="true"
                        :class="[
                          filters.segments
                            ? 'translate-x-5 bg-secondary border-secondary'
                            : 'translate-x-0 bg-neutral-content border-neutral-content',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                        ]"
                      />
                    </Switch>
                    <SwitchLabel as="span" class="ml-3 text-sm">
                      <span
                        class="font-medium"
                        :class="
                          filters.segments
                            ? 'text-secondary'
                            : 'text-neutral-content'
                        "
                        >Segments</span
                      >
                    </SwitchLabel>
                  </SwitchGroup>
                </div>
              </template>
            </FormFilterButton>
          </div>
          <div class="percent-item grid grid-cols-1">
            <apexchart
              id="drafting-report-chart"
              type="area"
              width="100%"
              height="400"
              :options="chartOptions"
              :series="chartSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const chartOptions = {
  chart: {
    type: "area",
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
    colors: ["#032b4a", "#0167b0", "#32afef"],
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
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
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
    name: "Location",
    data: [10, 20, 37, 30, 47, 25, 20, 10, 15, 20, 45, 30],
  },
  {
    name: "Timeline",
    data: [41, 54, 15, 23, 34, 21, 36, 17, 16, 47, 25, 20],
  },
  {
    name: "Trainer",
    data: [25, 43, 55, 30, 22, 18, 13, 47, 58, 10, 20, 37],
  },
];

const filters = ref({
  location: false,
  type: false,
  alert: false,
  segments: false,
});
</script>
