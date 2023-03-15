<template>
  <div id="chart">
    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script setup>
const series  = [
  {
    name: 'Location',
    data: [1000, 2000, 4000, 1000, 5000, 6000, 7000, 4000, 5000, 6000, 2000, 1000]
  },
  {
    name: 'Timeline',
    data: [1000, 2500, 5500, 5000, 6000, 5000, 3000, 7000, 9000, 5000, 7000, 1000]
  },
  {
    name: 'Trainer',
    data: [1000, 2000, 8000, 7000, 4000, 5000, 4000, 7000, 6000, 5000, 5000, 1000]
  },
]
const chartOptions = {
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
  },
  fill: {
    colors: ['#40c0ff', '#0275c9', '#04365c'],
    gradient: {
      shade: 'dark',
      type: "vertical",
      shadeIntensity: .1,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 50, 100],
    },
  },
  colors: ['#40c0ff', '#0275c9', '#04365c'],
  xaxis: {
    type: 'months',
    categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    crosshairs: {
          show: true,
          width: 70,
          position: 'front',
          opacity: 0.9,        
          stroke: {
              color: '#D8E3F0',
              width: 0,
              dashArray: 0,
          },
          fill: {
              type: 'gradient',
              color: '#B1B9C4',
              gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0,
                  opacityTo: 0.8,
              },
          },
      },
  },
  markers: {
    size: 0,
    colors: undefined,
    strokeColors: '#fff',
    strokeWidth: 4,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3
    }
},
  tooltip: {
    // enabled: false,
    shared: false
  },
}
</script>
<style>
/* #SvgjsLine1162 {
  stroke-width: 60px !important;
  stroke-dasharray: none;
} */
</style>