<template>
  <card
    title="Statistic Title"
    class="bg-base-300 text-base-content text-left"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div
        class="px-5 pl-3 relative w-[320px] mx-auto py-5 my-3 flex justify-center"
      >
        <div
          class="absolute top-0 left-0 text-center w-full pr-2"
          :class="value >= 10 ? 'text-secondary' : 'text-base-content'"
        >
          10
        </div>
        <div
          class="absolute top-1/2 right-0 text-center"
          :class="value >= 20 ? 'text-secondary' : 'text-base-content'"
        >
          20
        </div>
        <div
          class="absolute bottom-0 left-1/2 text-center ml-[-10px]"
          :class="value >= 30 ? 'text-secondary' : 'text-base-content'"
        >
          30
        </div>
        <div
          class="absolute top-1/2 left-0 text-center"
          :class="value >= 40 ? 'text-secondary' : 'text-base-content'"
        >
          40
        </div>
        <ClientOnly>
          <div class="relative rounded-full">
            <div
              v-for="i in 30"
              class="absolute inset-0"
              :style="'transform: rotate(' + i * 12 + 'deg);'"
            >
              <div
                :class="i * 2.5 <= value ? 'bg-secondary' : 'bg-base-content'"
                class="absolute w-[1.5px] rounded h-[13px] mt-2 mx-auto left-0 right-0"
              ></div>
            </div>
            <apexchart
              width="350"
              type="radialBar"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </ClientOnly>
      </div>
    </template>
  </card>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 20,
  },
});
const chartOptions = {
  chart: {
    type: "radialBar",
  },

  legend: {
    show: false,
    position: "bottom",
    labels: {
      colors: ["#1c6aba"],
    },
    fill: {
      colors: ["#1c6aba"],
    },
    markers: {
      width: 12,
      height: 12,
      strokeColor: "#fff",
      fillColors: ["#1c6aba"],
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "75%",
        background: "#002643",
      },
      track: {
        show: true,
        background: "#3fc0ff",
        strokeWidth: "200px",
        margin: 9,
      },
      inverseOrder: true,
      dataLabels: {
        name: {
          offsetY: 30,
          color: "#eee",
          fontWeight: 300,
          fontSize: "16px",
        },
        value: {
          offsetY: -10,
          color: "#fff",
          fontSize: "35px",
          show: true,
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  fill: {
    colors: ["#1c6aba"],
  },
  labels: ["Goal"],
};
const series = [props.value * 1.3];
</script>
