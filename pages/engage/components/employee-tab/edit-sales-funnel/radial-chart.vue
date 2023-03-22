<template>
  <div id="chart">
    <apexchart type="radialBar" height="350" :options="radialChartOptions" :series="radialSeries"></apexchart>
  </div>
</template>
<script setup>
const radialSeries = [44, 55, 67]
const radialChartOptions = {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 249
                    }
                  }
                },
                track: {

                }
              }
            },
            labels: ['Apples', 'Oranges', 'Bananas'],
          }
</script>
