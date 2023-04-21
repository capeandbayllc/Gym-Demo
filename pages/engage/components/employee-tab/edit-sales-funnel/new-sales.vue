<template>
  <div id="chart" class="border-2 border-secondary rounded-[15px] h-full">
    <div class="p-4 flex justify-between items-center">
      <p class="text-xs">
        Weekly Average New Sales <br>
        <span class="text-secondary font-bold">
          $1213.20
        </span>
      </p>
      <p class="text-xs">
        Last Week <br>
        <span class="text-secondary font-bold">
          +0.12%
        </span>
      </p>

    </div>
    <svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="MyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="5%" stop-color="#0074c8" />
          <stop offset="95%" stop-color="#042137" />
        </linearGradient>
      </defs>
    </svg>
      <ClientOnly>
          <apexchart
          type="bar"
          height="200"
          :options="chartOptions"
          :series="series"
          ></apexchart>
      </ClientOnly>
      </div>
</template>
<script setup>
const series = [{
  name: 'Earning',
  data: [2, 4.8, 3, 1.2, 3.4, 2.4, 4]
}]
const chartOptions = {
  grid: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 0,
      }
    },
  },

  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: '80px',
      barHeight: '0%'
    }
  },
  dataLabels: {
    enabled: false,
  },
  
  
  xaxis: {
    labels: {
      style: {
        colors: '#fff',
        fontSize: '10px'
      }
    },
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    tickPlacement: 'on',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 5,
    min: 0,
    max: 5,
    labels: {
      style: {
        colors: '#fff'
      },
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    type: 'solid',
    colors: ['#89ceff'],
    opacity: 0.30,
//       gradient:{
// 	shade : 'dark',
// 	type: 'vertical',
// 	shadeIntensity : 0,
// 	gradientToColors: ['#042137', '#042137'],
// 	inverseColors : false,
// 	opacityTo : 1,
// 	opacityFrom : 1,
// },
  }
}
</script>
<style>

.apexcharts-bar-area:hover {
  fill: url(#MyGradient) !important;
  filter: url(#MyGradient) !important;
}
</style>