<template>
    <card title="Statistic Title" class="bg-base-300" :options="{ favorite: false, collapse: false }">
        <template #content>
            <div class="px-5 pl-3" style="width: 100%;">
                <apexchart id="drafting-report-chart" type="bar" width="100%" height="300" :options="chartOptions"
                    :series="chartSeries"></apexchart>
            </div>
        </template>
    </card>
</template>
<script setup>
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
    plotOptions: {
        bar: {
			horizontal: false,
			columnWidth: '100%',
			barHeight: '0%',
			borderRadius: 10,
			borderRadiusApplication: 'around',
		},
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
		show: true,
		width: 10,
		colors: ['transparent']
	},
    fill: {
        colors: ['#0275c9', '#293e4d'],
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
    colors: ['#40c0ff', '#b8c0c6', '#04365c'],
    xaxis: {
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: true,
            formatter: function (val) {
                return val + 'k'
            },
            style: {
                colors: ['#fff'],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}) {
            console.log(seriesIndex,dataPointIndex, 'context')
            return (
            `<div class="px-3">
                ${series[seriesIndex][dataPointIndex]}
            </div>`
            );
        }
    }
}
const chartSeries = [
    {
        name: 'Statistic 1',
        data: [40, 50, 43, 36]
    },
    {
        name: 'Statistic 2',
        data: [30, 45, 37, 27]
    }
]
</script>

<style lang="postcss">
#drafting-report-chart .apexcharts-legend {
    @apply flex justify-start pt-6;
}

#drafting-report-chart .apexcharts-legend-series {
    @apply bg-base-content/90 flex p-2 rounded-lg px-4;
}

#drafting-report-chart .apexcharts-legend-series .apexcharts-legend-marker {
    @apply rounded-[3px] mr-2;
}

#drafting-report-chart .apexcharts-legend-series .apexcharts-legend-text {
    @apply font-bold text-base-300 text-[14px];
}</style>