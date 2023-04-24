<template>
    <card title="Statistic 1" class="bg-base-300 text-base-content" :options="{ favorite: false, collapse: false }">
        <template #content>
            <div class="flex justify-center">
                <apexchart width="220" type="radialBar" :options="chartOptions" :series="series"></apexchart>
            </div>
            <div class="px-7 pb-3">
                <div class="text-center">
                    <h5 class="text-xl">Statistic Title</h5>
                    <p class="text-xs text-neutral-content px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cumque, nulla nihil quia ad non amet elit.</p>
                </div>
                <div class="flex flex-wrap justify-center text-sm mt-5">
                    <div class="box-container">
                        <div class="box bg-blue-400"></div>
                        Marketing
                    </div>
                    <div class="box-container">
                        <div class="box bg-blue-500"></div>
                        Finance
                    </div>
                    <div class="box-container">
                        <div class="box bg-blue-600"></div>
                        Influence
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>
  
<style scoped lang="postcss">
.box-container {
    @apply flex items-center m-1;

    .box {
        @apply w-3 h-3 mx-2 rounded;
    }
}
</style>
  
<script setup>
const chartOptions = {
    series: [44, 55, 67, 83],
    chart: {
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    offsetY: 10,
                    fontSize: '22px',
                },
                value: {
                    show: false,
                },
                total: {
                    show: true,
                    label: '48%',
                    fontSize: '27px',
                    fontWeight: 600,
                    color: 'hsl(var(--bc))',
                    formatter: function (w) {
                        return 249
                    }
                }
            }
        }
    },
    labels: ['48%', '48%', '48%'],
    fill: {
        colors: ['#04375c', '#0075c9', '#3fc0ff']
    },
    xaxis: {
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        },
    },

}

const series = [80, 50, 35]
</script>
  