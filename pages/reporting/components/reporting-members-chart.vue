<template>
    <ClientOnly>
        <apexchart class="mt-2" type="radialBar" height="250" :options="options" :series="series"></apexchart>
    </ClientOnly>
</template>
<script setup>

const series = [75];
const options = {
    chart: {
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#1a4d72',
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },
        
            dataLabels: {
                show: true,
                name: {
                    offsetY: -25,
                    show: true,
                    color: '#ffffff',
                    fontSize: '18px'
                },
                value: {
                    formatter: function(val) {
                        return parseInt(val);
                    },
                    color: '#ffffff',
                    fontSize: '60px',
                    show: true,
                }
            }
        }
    },
    fill: {
        opacity: 0.1,
        type: "gradient",
        gradient: {
            gradientToColors: ['#0074C8'],
        },
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['Total:'],
}
</script>
