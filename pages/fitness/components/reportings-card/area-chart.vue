<template>
  <apexchart id="drafting-report-chart" type="area" :options="chartOptions" :series="chartSeries" />
</template>

<script>
const chartOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: true
    },
  zoom: {
    enabled: true,
    type: '',
  }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
  },
  fill: {
    colors: [ '#04365c', '#0275c9' , '#40c0ff'],
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
  yaxis: {
      show: true,
      showAlways: true,
      showForNullSeries: true,
      opposite: false,
      reversed: false,
      tickAmount: 10,
      forceNiceScale: false,
      floating: false,
      labels: {
          show: true,
          style: {
              colors: ['#fff'],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
          },
      },
      
  },
  markers: {
    size: 0,
    colors: undefined,
    strokeColors: '#fff',
    strokeWidth: 2,
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
}
}
export default {
  data() {
    return {
      chartOptions: {
        // chart options here
        ...chartOptions,
        tooltip: {
          custom: function({series, seriesIndex, dataPointIndex, w}) {
            console.log(seriesIndex,dataPointIndex, 'context')
            return (
              `<div class="arrow_box">
                <img src="${w.config.series[seriesIndex].data[dataPointIndex].avatar}" />
              </div>`
            );
          }
        }
      },
      chartSeries: [
        {
          name: 'Location',
          data: [
            {
              x: "January",
              y: 0,
              avatar: '/account.png' // set avatar image for this point
            },
            {
              x: "February",
              y: 1800,
              avatar:  '/account.png'
            },
            {
              x: "March",
              y: 1500,
              avatar:  '/account.png'
            },
            {
              x: "April",
              y:2500,
              avatar:  '/account.png'
            },
            {
              x: "May",
              y: 3500,
              avatar:  '/account.png'
            },
            {
              x: "June",
              y: 2500,
              avatar:  '/account.png'
            },
            {
              x: "July",
              y: 2000,
              avatar: '/account.png' // set avatar image for this point
            },
            {
              x: "August",
              y: 3000,
              avatar:  '/account.png'
            },
            {
              x: "September",
              y: 2500,
              avatar:  '/account.png'
            },
            {
              x: "October",
              y:3000,
              avatar:  '/account.png'
            },
            {
              x: "November",
              y: 3300,
              avatar:  '/account.png'
            },
            {
              x: "December",
              y: 2000,
              avatar:  '/account.png'
            }
          ],
          pointRenderer: function({ x, y, seriesIndex, dataPointIndex, w }) {
            const { avatar } = w.config.series[seriesIndex].data[dataPointIndex];
            return {
              image: {
                src: avatar,
                width: 32,
                height: 32
              },
              x,
              y,
              offsetY: -16
            };
          }
        },
        {
          name: 'Timeline',
          data: [
            {
              x: "January",
              y: 0,
              avatar: '/account.png' // set avatar image for this point
            },
            {
              x: "February",
              y: 1900,
              avatar:  '/account.png'
            },
            {
              x: "March",
              y: 1600,
              avatar:  '/account.png'
            },
            {
              x: "April",
              y:2200,
              avatar:  '/account.png'
            },
            {
              x: "May",
              y: 3000,
              avatar:  '/account.png'
            },
            {
              x: "June",
              y: 2600,
              avatar:  '/account.png'
            },
            {
              x: "July",
              y: 1800,
              avatar: '/account.png' // set avatar image for this point
            },
            {
              x: "August",
              y: 2900,
              avatar:  '/account.png'
            },
            {
              x: "September",
              y: 2200,
              avatar:  '/account.png'
            },
            {
              x: "October",
              y:2800,
              avatar:  '/account.png'
            },
            {
              x: "November",
              y: 3200,
              avatar:  '/account.png'
            },
            {
              x: "December",
              y: 1700,
              avatar:  '/account.png'
            }
          ],
          pointRenderer: function({ x, y, seriesIndex, dataPointIndex, w }) {
            const { avatar } = w.config.series[seriesIndex].data[dataPointIndex];
            return {
              image: {
                src: avatar,
                width: 32,
                height: 32
              },
              x,
              y,
              offsetY: -16
            };
          }
        },{
          name: 'Location',
          data: [
            {
              x: "January",
              y: 0,
              avatar: '/account.png' // set avatar image for this point
            },
            {
              x: "February",
              y: 1700,
              avatar:  '/account.png'
            },
            {
              x: "March",
              y: 1600,
              avatar:  '/account.png'
            },
            {
              x: "April",
              y:2000,
              avatar:  '/account.png'
            },
            {
              x: "May",
              y: 2900,
              avatar:  '/account.png'
            },
            {
              x: "June",
              y: 2200,
              avatar:  '/account.png'
            },
            {
              x: "July",
              y: 2200,
              avatar: '/account.png' // set avatar image for this point
            },
            {
              x: "August",
              y: 2700,
              avatar:  '/account.png'
            },
            {
              x: "September",
              y: 2000,
              avatar:  '/account.png'
            },
            {
              x: "October",
              y:2500,
              avatar:  '/account.png'
            },
            {
              x: "November",
              y: 3000,
              avatar:  '/account.png'
            },
            {
              x: "December",
              y: 2500,
              avatar:  '/account.png'
            }
          ],
          pointRenderer: function({ x, y, seriesIndex, dataPointIndex, w }) {
            const { avatar } = w.config.series[seriesIndex].data[dataPointIndex];
            return {
              image: {
                src: avatar,
                width: 10,
                height: 10
              },
              x,
              y,
            };
          }
        }
      ]
    };
  }
};

</script>

<style lang="postcss">
#drafting-report-chart .apexcharts-legend {
  @apply flex justify-start pt-6
}
#drafting-report-chart .apexcharts-legend-series {
  @apply bg-base-100 flex p-2 rounded-lg px-4;
}
#drafting-report-chart .apexcharts-legend-series .apexcharts-legend-marker {
  @apply rounded-[3px] mr-2;
}
#drafting-report-chart .apexcharts-legend-series .apexcharts-legend-text {
  @apply font-bold;
}
</style>