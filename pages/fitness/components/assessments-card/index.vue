<template>
    <fitness-card :title-icon="AssessmentsIcon" title="Fitness Assessments">
        <div class="assessment-container">
            <div class="assessments-chart">
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
            <div class="assessments-right">
                <div class="div-search" >
                    <div class="assessments-modal">
                        <div><span>+</span></div>
                        <div><span>Assessment</span></div>
                    </div>
                    <div class="assessments-search">
                        <input class="search-input" type="text" placeholder="Search">
                    </div>
                </div>
            </div>
        </div>
    </fitness-card>
</template>
<style scoped>
.assessments-search{
    width : 78%;
    min-height: 44px;
    display : inline-block;
}
.assessments-search .search-input{
    min-height: 36px;
    border-radius: 10px;
    background : #002f53;
    width: 50%;
    margin : auto;
    color : white;
    float : right;
    margin-top: 4px;
}
.assessments-search .search-input:focus{
    box-shadow: none;
    outline: none;
}
.assessments-search .search-input:placeholder-shown{
    padding-left: 10px;
}
.assessments-modal{
    border: 2px solid #0077cb;
    border-radius: 50px;
    width: 22%;
    display: flex;
    min-height : 44px;
    color : white;
}
.assessments-modal div{
    margin : auto;
}
.assessments-modal div span{
    margin : auto;
}
.assessments-modal span{
    display: flex;
    margin-top: 5px;
}
.assessments-modal div:first-child{
    width: 30px;
    height: 30px;
    font-size: 28px;
    border: 2px solid rgb(160, 175, 175);
    border-radius : 50%;
    color : white;
    margin : auto;
}
.assessments-modal div:first-child span{
    display: block;
    margin-top : -10px;
}
.div-search{
    padding: 5px;
    display: flex;
}
.assessments-right{
    width: 75%;
    padding-left:20px;
}
.assessment-container{
    padding: 20px 30px;
    display: flex;
    width: 100%;
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