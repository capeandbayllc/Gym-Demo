<template>
  <apexchart id="graph-analysis-chart" type="area" height="230" :options="chartOptions" :series="chartSeries" />
</template>
<script>
const chartOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true,
      type: '',
    }
  },
  legend: {
    position: 'bottom',
    fontSize: '8px',
    markers:  {
      width: 10,
      height: 10
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
  },
  grid: {
    borderColor: 'rgba(255,255,255,0.2)'
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
    labels: {
      style: {
        fontSize: '7px',
        colors: '#fff',
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      width: 40,
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
      tickAmount: 9,
      min:0,
      max:45,
      forceNiceScale: false,
      floating: false,
      labels: {
          show: true,
          formatter: function (val) {
              return val + "k"
            },
          style: {
              colors: ['#fff'],
              fontSize: '10px',
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
        // tooltip: {
        //   custom: function({series, seriesIndex, dataPointIndex, w}) {
        //     console.log(seriesIndex,dataPointIndex, 'context')
        //     return (
        //       `<div class="arrow_box">
        //         <img src="${w.config.series[seriesIndex].data[dataPointIndex].avatar}" />
        //       </div>`
        //     );
        //   }
        // }
      },
      chartSeries: [
        {
          name: 'Statistics 1',
          data: [
            {
              x: "January",
              y: '16',
            },
            {
              x: "February",
              y: '37',
            },
            {
              x: "March",
              y: '45',
            },
            {
              x: "April",
              y: '34',
            },
            {
              x: "May",
              y: '23',
            },
            {
              x: "June",
              y: '22',
            },
            {
              x: "July",
              y: '43',
            },
            {
              x: "August",
              y: '33',
            },
            {
              x: "September",
              y: '28',
            },
            {
              x: "October",
              y:'31',
            },
            {
              x: "November",
              y: '29',
            },
            {
              x: "December",
              y: '43',
            }
          ],
        },
        {
          name: 'Statistics 2',
          data: [
            {
              x: "January",
              y: '15',
            },
            {
              x: "February",
              y: '28',
            },
            {
              x: "March",
              y: '23',
            },
            {
              x: "April",
              y: '34',
            },
            {
              x: "May",
              y: '29',
            },
            {
              x: "June",
              y: '12',
            },
            {
              x: "July",
              y: '40',
            },
            {
              x: "August",
              y: '39',
            },
            {
              x: "September",
              y: '25',
            },
            {
              x: "October",
              y:'39',
            },
            {
              x: "November",
              y: '29',
            },
            {
              x: "December",
              y: '33',
            }
          ],
        },
        {
          name: 'Statistics 3',
          data: [
            {
              x: "January",
              y: '8',
            },
            {
              x: "February",
              y: '40',
            },
            {
              x: "March",
              y: '35',
            },
            {
              x: "April",
              y: '24',
            },
            {
              x: "May",
              y: '13',
            },
            {
              x: "June",
              y: '22',
            },
            {
              x: "July",
              y: '23',
            },
            {
              x: "August",
              y: '33',
            },
            {
              x: "September",
              y: '18',
            },
            {
              x: "October",
              y:'31',
            },
            {
              x: "November",
              y: '29',
            },
            {
              x: "December",
              y: '23',
            }
          ],
        },
      ]
    };
  },
}
</script>
<style lang="postcss">
#graph-analysis-chart .apexcharts-legend {
  @apply flex justify-start pt-6;
}
#graph-analysis-chart .apexcharts-legend-series {
  @apply bg-base-100 flex px-2 py-1 rounded-lg;
}
#graph-analysis-chart .apexcharts-legend-series .apexcharts-legend-marker {
  @apply rounded-md mr-1 rounded-[3px];
}
#graph-analysis-chart .apexcharts-legend-series .apexcharts-legend-text {
  @apply font-bold;
}
</style>
