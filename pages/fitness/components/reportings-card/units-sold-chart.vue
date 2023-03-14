<template>
    <div class="units-sold">
        <div class="grid grid-cols-10 header">
            <label class="col-span-2 text-[12px] text-white">Units Sold</label>
            <div class="col-span-5"></div>
            <div class="col-span-3 grid grid-cols-5">
                <div class="col-span-1 flex">
                    <button class="btn-status -rotate-90">></button>
                </div>
                <div class="col-span-4 grid grid-cols-1 ml-1">
                    <span class="col-span-1 text-white text-[12px] text-left">Last Week</span>
                    <span class="col-span-1 text-[14px] text-left"> +0.10%</span>
                </div>
            </div>
        </div>
        <ClientOnly class="col-span-5">
            <apexchart 
                type="area"
                :options="options"
                :series="series"
            />
        </ClientOnly>
    </div>
</template>
<style scoped>
.btn-status{
    width: 15px;
    height: 15px;
    background : #0077ac;
    border-radius: 50%;
    color: black;
    font-size: 10px;
    font-weight: bold;
    margin : auto;
}
.units-sold{
    border : 2px solid #0077ac;
    border-radius : 15px;
    padding: 10px;
}
.header{
    margin-top: 5px;
    margin-bottom: 10px;
}
.apexcharts-grid{
    background: blue;
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
    tooltip: {
        enabled: true,
        custom: function({series, seriesIndex, dataPointIndex, w}) {
            return (
                `<div class="arrow_box p-2">
                    <span style="color: grey;">Earning</span>
                    <p>$${series[seriesIndex][dataPointIndex]}</p>
                </div>`
            )
        }
    },

};
</script>