<template>
    <div>
        <ClientOnly>
            <apexchart
                type="radialBar"
                :options="options"
                width="200"
                height="200"
            />
        </ClientOnly>
    </div>
</template>
<script setup>

var options = {
  chart: {
    height: 280,
    type: "radialBar"
  },
  
  series: [67],
  
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%"
      },
     
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "13px"
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"]
};

</script>