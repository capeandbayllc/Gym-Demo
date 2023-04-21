<template>
    <div class="units-sold flex flex-col justify-between">
        <div class="grid grid-cols-10 header">
            <label class="col-span-2 text-[12px] text-base-content">Units Sold</label>
            <div class="col-span-5"></div>
            <div class="col-span-3 grid grid-cols-5">
                <div class="col-span-1 flex">
                    <button class="btn-status -rotate-90">></button>
                </div>
                <div class="col-span-4 grid grid-cols-1 ml-1">
                    <span class="col-span-1 text-base-content text-[12px] text-left">Last Week</span>
                    <span class="col-span-1 text-[14px] text-left"> +0.10%</span>
                </div>
            </div>
        </div>
        <ClientOnly class="col-span-5">
            <apexchart 
                type="area"
                class="unit-sold-apex-chart"
                :options="options"
                :series="series"
            />
        </ClientOnly>
    </div>
</template>
<style lang="postcss">
.units-sold  .btn-status{
    @apply w-[15px] h-[15px] bg-info-content rounded-full text-base-300 text-[10px] font-bold m-auto;
}
.units-sold{
    @apply border-[2px] border-solid border-secondary rounded-[15px] p-[10px];
}
.units-sold .header{
    @apply mt-[5px] mb-[10px];
}

</style>
<script setup>

const series= [{
    name: 'comming',
    data: [12,68,25,48,11]
    }];
const options ={
    chart:{
        height : 350,
        type: 'area',
        background: 'linear-gradient(180deg, rgba(4,55,92,0 ) 0.00%, rgba(63,192,255,0.72 ) 100.00%)',
        toolbar:{
            show: false,
        },
        events: {
        mouseMove: function(event, chartContext, config) {
            var tooltip = chartContext.el.querySelector('.apexcharts-tooltip');
            var pointsArray = config.globals.pointsArray;
            var seriesIndex = config.seriesIndex;
            var dataPointIndex = config.dataPointIndex === -1 ? 0 : config.dataPointIndex;

            if (seriesIndex !== -1) {
                var position = pointsArray[seriesIndex][dataPointIndex];

                tooltip.style.top = position[1] + 'px';
                tooltip.style.left = position[0] + 'px';
            }
        }
    }
    },
    dataLabels: {
        enabled : false
    },
    stroke: {
        curve: 'smooth',
        width : 2,
        colors : ['#FFF']
    },
    xaxis: {
        type: 'category',
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        tooltip : {
            enabled: false
        },
        color: '#FFF',
        labels:{
            style: {
                colors: '#FFF'
            }
        },
        crosshairs: {
            show: true,
            position: 'front',
            opacity: 0.9,
        }
    },
    yaxis:{
        show : false,
    },
    grid: {
        show : false
    },
    fill:{
        type: 'gradient',
        colors: '#3FC0FF',
        gradient:{
            shade : 'light',
            type: 'vertical',
            shadeIntensity : 10,
            gradientToColors: ['#003650', '#3FC0FF'],
            inverseColors : true,
            opacityTo : 6,
            opacityFrom : 10,
        }
    },
    markers: {
        size: 0,
        strokeColors: '#fff',
        strokeWidth: 4,
        strokeOpacity: 0.9,
        radius: 2,
        hover: {
        size: 5,
        sizeOffset: 3
        }
    },
    tooltip: {
        enabled: true,
        custom: function({series, seriesIndex, dataPointIndex, w}) {
            return (
                `<div class="arrow_box p-2">
                    <span class="text-neutral-content">Earning</span>
                    <p>$${series[seriesIndex][dataPointIndex]}</p>
                </div>`
            )
        }
    },

};
</script>