<template>
  <ClientOnly>
      <apexchart
          type="donut"
          height="200"
          :options="options"
          :series=[10,40,20,48]
      />
  </ClientOnly>
</template>
<script setup>

const options = {
  chart: {
      type: "donut",
  },
  labels: ["Leads", "Calls", "Meetings", "Success"],
  colors: [
    "#04375c",
    "#cbcbcb",
    "#06538b",
    "#0075c9",
  ],
  legend: {
    show: true,
    formatter: function (val, opts) {
        console.log(opts.w.globals.initialSeries[opts.seriesIndex], 'legendsss')
        return `${val} (${opts.w.globals.initialSeries[opts.seriesIndex]}%)`
      },
    labels: {
      colors: ['#0075c9'],
    }
  },
  stroke: {
    lineCap: "round",
    show: false,
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%"
    },
  },
  grid: {
    padding: {
      left: 0,
      right: 0
    }
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        background: '#0074c863',
        labels: {
          show: true,
          
          name: {
            show: false,
            offsetY: 0,
          },
          value: {
            show: true,
            fontSize: "32px",
            color: "hsl(var(--bc))",
            fontWeight: 600,
            offsetY: 10,
            formatter: function (val) {
              return val + '%'
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: '',
            fontSize: '20px',
            fontWeight: 600,
            color: 'hsl(var(--bc))',
            formatter: function (w) {
              return Math.max(...w.globals.initialSeries) + '%'
            }
          }
        },
      },
    },
  },
};
</script>