<template>
  <div id="chart" class="flex statistics items-center justify-cener">
    <apexchart type="radialBar" height="220" :options="radialChartOptions" :series="radialSeries"></apexchart>
  </div>
</template>
<script setup>
const radialSeries = [48, 56, 80]
const radialChartOptions = {
            chart: {
              type: 'radialBar',
            },
            legend: {
              show: true,
              position: 'bottom',
              labels: {
                colors: ['#fff', '#fff', '#fff'],
            },
            markers: {
              width: 12,
              height: 12,
              strokeColor: '#fff',
              fillColors: ['#3fc0ff', '#0075c9', '#04375c'],
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
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#fff',
                  offsetY: 6,
                  formatter: function (val) {
                    return val + '%'
                  }
                },
                  total: {
                    show: true,
                    label: '',
                    style: {
                      color: '#fff'
                    },
                    formatter: function (w) {
                      return  w.globals.initialSeries[0] + '%'
                    }
                  }
                },
                track: {
                  show: true,
                  background: '#0075c9',
                  strokeWidth: '100px',
                  opacity: 0.25,
                  margin: 5, 
                  dropShadow: {
                      enabled: false,
                      top: 0,
                      left: 0,
                      blur: 3,
                      opacity: 0.5
                  }
                },
              },
             
            },
            labels: ['Marketing','Finance', 'Influence'],
          }
</script>
<style>
.statistics .apexcharts-radialbar-area {
  stroke-linecap: round;
}
.statistics .apx-legend-position-bottom {
  inset: auto 0px -80px !important;
}
.statistics .apexcharts-radialbar-area {
  stroke-width: 7px;
}
.statistics .apexcharts-radial-series[seriesName="Marketing"] path{
  stroke:  #3fc0ff;
  stroke-width: 7px;
}
.statistics .apexcharts-radial-series[seriesName="Finance"] path{
  stroke: #0075c9;
  stroke-width: 7px;
}
.statistics .apexcharts-radial-series[seriesName="Influence"] path{
  stroke: #04375c;
  stroke-width: 7px;
}
</style>
