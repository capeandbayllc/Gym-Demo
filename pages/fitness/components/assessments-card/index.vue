<template>
    <fitness-card :title-icon="AssessmentsIcon" title="Fitness Assessments">
        <div class="assessment-container">
            <div class="assessments-chart w-full">
                <div class="text-lg p-2 font-semibold chart-header">Assessments</div>
                <div>
                    <assessments-chart />
                </div>
                <div class="px-3 py-2 bottom-3 columns-3 flex">
                    <div class="status-div">
                        <div class="circled-div bg-[#00375b]"></div>
                        <span>Scheduled</span>
                    </div>
                    <div class="status-div">
                        <div class="circled-div bg-[#0077ac]"></div>
                        <span>Shown</span>
                    </div>
                    <div class="status-div">
                        <div class="circled-div bg-[#cbccc9]"></div>
                        <span>Closed</span>
                    </div>
                </div>
            </div>
            <div class="assessments-right w-full">
                <div class="div_search" >
                    <div class="assessments-modal">
                        
                    </div>
                </div>
            </div>
        </div>
    </fitness-card>
</template>
<style scoped>
.assessments-right{
    width: 75%;
}
.div_search{

}
.assessment-container{
    padding: 20px 30px;
}
.chart-header{
    color : white;
}
.assessments-chart{
    border : 2px solid #0077cb;
    width: 25%;
    border-radius: 15px;
}
.status-div{
    margin : auto;
    display: flex;
}
.status-div span{
    font-size: 14px;
}
.circled-div{
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: auto 3px;
}
</style>
<script setup>
import FitnessCard from '../fitness-card.vue';
import AssessmentsChart from './assessments-chart.vue';
onMounted(async () => {
    await nextTick();
    window.dispatchEvent(new Event('resize'))
});
</script>