<template>
  <card
    title="Statistic Title"
    class="bg-gradient-to-tr from-base-300 via-base-300/70 slim-text text-base-content text-left"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="px-5 pl-3" style="width: 100%">
        <div class="py-7">
          <div class="px-4 flex flex-col justify-end">
            <span class="text-sm">Page Views</span>
            <span class="text-2xl"> 45,332 </span>
            <span class="text-xs text-secondary"> +0.8% </span>
          </div>
          <div class="">
            <apexchart
              type="radialBar"
              height="220px"
              :options="options"
              :series="data"
            />
          </div>
        </div>
      </div>
    </template>
  </card>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [75],
  },
});

const options = {
  chart: {
    width: "100%",
    height: "auto",
    type: "radialBar",
    offsetY: 12,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    lineCap: "round",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
    },
    radialBar: {
      hollow: {
        margin: 9,
        size: "67%",
      },
      track: {
        startAngle: 0,
        endAngle: 0,
        strokeWidth: "20%",
        opacity: 0.5,
        margin: 0,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: 35,
          color: "white",
          offsetY: 6,
        },
      },
    },
  },
};
</script>
