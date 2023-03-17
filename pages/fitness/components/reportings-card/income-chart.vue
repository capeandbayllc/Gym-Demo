<template>
    <div class="income-chart flex flex-col justify-between">
        <div class="grid grid-cols-10 header">
            <label class="col-span-2 text-[12px] text-white">Income</label>
            <div class="col-span-5"></div>
            <div class="col-span-3 grid grid-cols-5">
                <div class="col-span-1 flex">
                    <button class="btn-status rotate-90">></button>
                </div>
                <div class="col-span-4 grid grid-cols-1 ml-1">
                    <span class="col-span-1 text-white text-[12px] text-left">Last Week</span>
                    <span class="col-span-1 text-[14px] text-left"> -0.7%</span>
                </div>
            </div>
        </div>
        <ClientOnly class="col-span-5">
            <apexchart
                class="income-apex-chart"
                type="area"
                :options="options"
                :series="series"
            />
        </ClientOnly>
    </div>
</template>
<style scoped>
.income-chart .btn-status{
    @apply w-[15px] h-[15px] bg-[#0077ac] rounded-full text-black text-[10px] font-bold m-auto;
}
.income-chart{
    @apply border-2 border-[#0077ac] rounded-[15px] p-[10px];
}
.income-chart .header{
    @apply mt-[5px] mb-[10px];
}
</style>
<script setup>

const series= [{
    name: 'comming',
    data: [31, 80, 68, 109, 92]
    }];
const options ={
    chart:{
        height : 350,
        type: 'area',
        background: 'linear-gradient(180deg, rgba(4,55,92,0 ) 0.00%, #04375c 100.00%)',
        toolbar:{
            show: false,
        },
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
        show : false
    },
    grid: {
        show : false
    },
    fill:{
        
        type: 'gradient',
        gradient:{
            shade : 'dark',
            type: 'vertical',
            shadeIntensity : 1,
            gradientToColors: ['#0C1C31', '#0077ac'],
            inverseColors : true,
            opacityTo : 1,
            opacityFrom : 1,
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
                    <span style="color: grey;">Earning</span>
                    <p>$${series[seriesIndex][dataPointIndex]}</p>
                </div>`
            );
        }
    },

};
</script>