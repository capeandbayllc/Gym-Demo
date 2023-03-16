<template>
    <card title="Reporting Widget 4" class="bg-neutral"
        :options="{
            'collapse': false,
            'favorite': true,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="flex justify-center text-secondary text-xl -xl:text-sm -lg:text-xs font-medium mt-2">
                    NEW PT CLIENTS
                </div>
                <div class="grid grid-cols-2 gap-5 text-base -xl:text-xs font-normal mt-3 text-center">
                    <div class="grid grid-cols-5">
                        <div class="text-secondary">TODAY</div>
                        <div>MTD</div>
                        <div>QTD</div>
                        <div>YTD</div>
                        <div>RANGE</div>
                    </div>
                    <div class="grid grid-cols-1">
                        <div>
                            <span>
                                Compare:
                            </span>
                            <span class="ml-1">Previous Month</span>
                            <span class="mx-2">or</span>
                            <span class="ml-1">Previous Year</span>
                        </div>
                    </div>
                </div>
                <div id="chart">
                    <ClientOnly>
                        <apexchart type="bar" height="220" :options="chartOptions" :series="series"></apexchart>
                    </ClientOnly>
                </div>
            </div>
        </template>
    </card>
</template>
<script setup>
          
    const series = [{
        name: '',
            data: [ 32,  22,  19,  12,  25,  32,  55,  60,  58,  55,  32,  32, 32, 55, 32, 7, 10, 25, 5, 34, 55]
        }
    ];
    const chartOptions = {
        chart: {
            type: 'bar',
            height: 330,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                borderRadius: 4.5,
                borderRadiusApplication: 'end',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        labels: [0, 10 , 20 , 30 , 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
        xaxis: {
            tickPlacement: 'on',
            tooltip: {
                enabled: false
            },
            labels: {
                show: true,
                style: {
                    colors: '#fff',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        yaxis: {
            tickAmount: 7,
            min: 0,
            max: 70,
            title: {
                text: ''
            },
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
        fill: {
            // opacity: 1,
            // colors:  ['#0169b4'],
            type: 'gradient',
            gradient:{
                shade : 'dark',
                type: 'vertical',
                shadeIntensity : 0,
                gradientToColors: ['#0074c8', '#042137'],
                inverseColors : false,
                opacityTo : 0.1,
                stops: [0, 100],
                opacityFrom : 1,
            },
        },
        grid : {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        }
    }
</script>
