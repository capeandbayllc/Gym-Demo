<template>
    <fitness-card :title-icon="FitnessAssessmentsIcon" title="Fitness Assessments">
        <div class="assessment-container grid grid-cols-4 gap-5">
            <div class="assessments-chart col-span-1 -lg:col-span-4">
                <div class="text-md p-2 font-normal chart-header">Assessments</div>
                <div>
                    <assessments-chart />
                </div>
                <div class="px-3 py-2 bottom-3 columns-3 flex grid grid-cols-3">
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-primary"></div>
                        <span>Scheduled</span>
                    </div>
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-info-content"></div>
                        <span>Shown</span>
                    </div>
                    <div class="status-div col-span-1">
                        <div class="circled-div bg-neutral-content"></div>
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
<style scoped lang="postcss">
.assessments-search{
    @apply min-h-[44px];
}
.assessments-search .search-input{
    @apply min-w-[210px] min-h-[36px] rounded-[10px] bg-primary text-base-content float-right mt-[4px] py-[2px] px-[10px] transition-all duration-300 text-[16px];
}
.assessments-search .search-input:hover,
.assessments-search .search-input:focus{
    @apply bg-secondary;
}
.assessments-search .search-input:focus{
    box-shadow: none;
    outline: none;
}
.div-search{
    @apply p-[5px];
}
.assessments-right{
    @apply pl-[20px];
}
.assessment-container{
    @apply py-[20px] px-[30px];
}
.chart-header{
    @apply text-base-content;
}
.assessments-chart{
    @apply border-[2px] border-secondary rounded-[15px];
}
.status-div{
    @apply m-auto flex;
}
.status-div span{
    @apply text-base-content pl-[2px] text-[11px];
}
.circled-div{
    @apply w-[14px] h-[14px] rounded-full my-auto mx-[3px];
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