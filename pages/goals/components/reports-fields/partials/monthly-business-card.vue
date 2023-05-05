<template>
  <card>
    <template #header>
      <div>
        <h3 class="text-base-content text-xl">Monthly Business Projections</h3>
      </div>
    </template>
    <template #content>
      <div class="overflow-auto h-[400px]">
        <span class="text-[14px] text-base-content/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sunt
          tempore.
        </span>
        <div class="flex max-w-[500px]">
          <div class="">
            <div class="items-container">
              <h5 class="text-xl font-semibold mt-3">Title</h5>
              <div
                v-for="item in data"
                class="item"
                :class="`item-${item.bgColor}`"
                :key="i"
              >
                <div class="flex">
                  <span class="ml-[7px] mr-[4px]">
                    <person-walk-icon class="w-5"></person-walk-icon>
                  </span>
                  <div class="">
                    {{ item.title }}
                  </div>
                </div>
                <div class="item-count">
                  {{ item.count }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <div>
              <div class="mx-[-60px]">
                <apexchart
                  width="320"
                  type="radialBar"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
              <div class="text-center">
                <p class="text-xs text-neutral-content">Fourth quarter 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>
<style scoped lang="postcss">
.items-container {
  @apply w-[260px] px-4 py-2;
  .item {
    @apply text-[13.5px] flex items-center justify-between py-3 pr-3 my-3 h-[35px] rounded-[16px] border border-secondary hover:bg-base-300 hover:text-secondary cursor-pointer;
  }
  .item-count {
    @apply text-[15px] font-semibold;
  }
  .item-black {
    @apply border border-secondary hover:text-base-content;
  }
  .item-secondary {
    @apply bg-secondary text-base-content;
  }
}
</style>
<script setup>
import Card from "./card.vue";
import { PersonWalkIcon } from "~~/components/icons/index";

const data = [
  {
    title: "New Membership Units",
    count: "97",
    bgColor: "black",
  },
  {
    title: "NM Dollar Amount",
    count: "$2,716",
    bgColor: "secondary",
  },
  {
    title: "PT Packages Sold",
    count: "22",
    bgColor: "secondary",
  },
  {
    title: "PT Sessions Sold",
    count: "132",
    bgColor: "secondary",
  },
  {
    title: "PT Dollar Amount",
    count: "$3,960",
    bgColor: "secondary",
  },
  {
    title: "Calls",
    count: "654",
    bgColor: "secondary",
  },
];

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
          fontSize: "30px",
          fontWeight: 500,
          color: "#fff",
          offsetY: 12,
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
        strokeWidth: "100px",
        opacity: 0.25,
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
    colors: ["#04375c", "#0075c9", "#416783", "#3fc0ff", "#0075c9", "#04375c"],
  },
  labels: ["Marketing", "Finance", "Influence"],
};

const series = [82, 65, 85, 32, 54];
// const series = [82, 65, 85, 32, 54, 23];
</script>
