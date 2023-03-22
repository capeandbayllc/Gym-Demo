<template>
  <div class="percentage-container p-4">
      <div class="flex items-center justify-between mb-4">
        <label class="header block text-[14px] py-2 whitespace-nowrap mr-2">Drafting Report</label>
        <FormFilterButton>
          <template v-slot:filters>
            <div class="flex space-x-5">
              
              <SwitchGroup as="div" class="flex items-center">
              <Switch v-model="filters.location" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                <span aria-hidden="true" :class="[filters.location ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span class="font-medium" :class="filters.location ? 'text-[#0275c9]': 'text-[#bababa]'">Location</span>
              </SwitchLabel>
              </SwitchGroup>
              
              <SwitchGroup as="div" class="flex items-center">
              <Switch v-model="filters.type" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                <span aria-hidden="true" :class="[filters.type ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span class="font-medium" :class="filters.type ? 'text-[#0275c9]': 'text-[#bababa]'">Type</span>
              </SwitchLabel>
              </SwitchGroup>
              
              <SwitchGroup as="div" class="flex items-center">
              <Switch v-model="filters.alert" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                <span aria-hidden="true" :class="[filters.alert ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span class="font-medium" :class="filters.alert ? 'text-[#0275c9]': 'text-[#bababa]'">Alert</span>
              </SwitchLabel>
              </SwitchGroup>
              
              <SwitchGroup as="div" class="flex items-center">
              <Switch v-model="filters.segments" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2">
                <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                <span aria-hidden="true" :class="['bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                <span aria-hidden="true" :class="[filters.segments ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]' : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out']" />
              </Switch>
              <SwitchLabel as="span" class="ml-3 text-sm">
                <span class="font-medium" :class="filters.segments ? 'text-[#0275c9]': 'text-[#bababa]'">Segments</span>
              </SwitchLabel>
              </SwitchGroup>
            </div>
           
          </template>
        </FormFilterButton>
      </div>
      <div class="w-full">
        <apexchart id="drafting-report-chart" type="area" :options="chartOptions" :series="chartSeries" />
      </div>
  </div>
</template>
<style scoped>
.percentage-container{
  padding: 10px 20px;
  border : 2px solid #0077ac;
  border-radius: 15px;
}
.header{
  color : white;
  text-align: left;
}
</style>
<script>

import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
const chartOptions = {
  chart: {
    type: 'area',
    height: '200px',
    toolbar: {
      show: false
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
              y: '16%',
            },
            {
              x: "February",
              y: '50%',
            },
            {
              x: "March",
              y: '45%',
            },
            {
              x: "April",
              y: '34%',
            },
            {
              x: "May",
              y: '23%',
            },
            {
              x: "June",
              y: '22%',
            },
            {
              x: "July",
              y: '43%',
            },
            {
              x: "August",
              y: '33%',
            },
            {
              x: "September",
              y: '28%',
            },
            {
              x: "October",
              y:'31%',
            },
            {
              x: "November",
              y: '29%',
            },
            {
              x: "December",
              y: '43%',
            }
          ],
        },
        {
          name: 'Statistics 2',
          data: [
            {
              x: "January",
              y: '15%',
            },
            {
              x: "February",
              y: '47%',
            },
            {
              x: "March",
              y: '23%',
            },
            {
              x: "April",
              y: '34%',
            },
            {
              x: "May",
              y: '29%',
            },
            {
              x: "June",
              y: '12%',
            },
            {
              x: "July",
              y: '40%',
            },
            {
              x: "August",
              y: '39%',
            },
            {
              x: "September",
              y: '25%',
            },
            {
              x: "October",
              y:'39%',
            },
            {
              x: "November",
              y: '29%',
            },
            {
              x: "December",
              y: '33%',
            }
          ],
        },
        {
          name: 'Statistics 3',
          data: [
            {
              x: "January",
              y: '8%',
            },
            {
              x: "February",
              y: '40%',
            },
            {
              x: "March",
              y: '35%',
            },
            {
              x: "April",
              y: '24%',
            },
            {
              x: "May",
              y: '13%',
            },
            {
              x: "June",
              y: '22%',
            },
            {
              x: "July",
              y: '23%',
            },
            {
              x: "August",
              y: '33%',
            },
            {
              x: "September",
              y: '18%',
            },
            {
              x: "October",
              y:'31%',
            },
            {
              x: "November",
              y: '29%',
            },
            {
              x: "December",
              y: '23%',
            }
          ],
        },
      ]
    };
  },
  setup() {
    const filters = ref({
      location: false,
      type: false,
      alert: false,
      segments: false
    })
    return {
      filters
    }
  }
}


</script>
