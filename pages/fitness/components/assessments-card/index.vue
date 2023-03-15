<template>
    <fitness-card :title-icon="FitnessAssessmentsIcon" title="Fitness Assessments">
        <div class="assessment-container grid grid-cols-4 gap-5">
            <div class="assessments-chart col-span-1 -lg:col-span-4">
                <div class="text-lg p-2 font-semibold chart-header">Assessments</div>
                <div>
                    <assessments-chart />
                </div>
                <div class="px-3 py-2 bottom-3 columns-3 flex grid grid-cols-3">
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-[#00375b]"></div>
                        <span>Scheduled</span>
                    </div>
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-[#0077ac]"></div>
                        <span>Shown</span>
                    </div>
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-[#cbccc9]"></div>
                        <span>Closed</span>
                    </div>
                </div>
            </div>
            <div class="assessments-right col-span-3 -lg:col-span-4 ">
                <div class="div-search grid grid-cols-10 gap-4" >
                    <FitnessPlusButton class="col-span-3" :label="'Assessment'"/>
                    <div class="col-span-3"></div>
                    <div class="assessments-search col-span-4">
                        <input class="search-input" type="text" placeholder="Search">
                    </div>
                </div>
                <member-list class=""
                ></member-list>
            </div>
        </div>
    </fitness-card>
</template>
<style scoped>
.assessments-search{
    min-height: 44px;
}
.assessments-search .search-input{
    min-height: 36px;
    border-radius: 10px;
    background : #002f53;
    margin : auto;
    color : white;
    float : right;
    margin-top: 4px;
    padding: 2px 10px;
    transition: all 0.3s;
}
.assessments-search .search-input:hover,
.assessments-search .search-input:focus{
    background : #0077cb;
}
.assessments-search .search-input:focus{
    box-shadow: none;
    outline: none;
}
.div-search{
    padding: 5px;
}
.assessments-right{
    padding-left:20px;
}
.assessment-container{
    padding: 20px 30px;
}
.chart-header{
    color : white;
}
.assessments-chart{
    border : 2px solid #0077cb;
    border-radius: 15px;
}
.status-div{
    margin : auto;
    display: flex;
}
.status-div span{
    font-size: 12px;
}
.circled-div{
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: auto 3px;
}
</style>
<script setup>
import { FitnessAssessmentsIcon } from '~~/components/icons'
import FitnessCard from '../fitness-card.vue';
import AssessmentsChart from './assessments-chart.vue';
import MemberList from './member-list.vue';
import FitnessPlusButton from '../fitness-plus-button.vue';
onMounted(async () => {
    await nextTick();
    window.dispatchEvent(new Event('resize'))
});
</script>