<template>
    <card title="Reporting Widget 3" class="h-full bg-neutral"
        :options="{
            'collapse': false,
            'favorite': false,
            'add': true,
        }"
    >
        <template #content>
            <div class="card-content  px-4 pb-3">
                <div class="grid grid-cols-5 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs text-center">
                    <div class="filter-list" :class="{'text-secondary': activeFilter === index}" v-for="(item, index) in filterList" :key="index" @click="setFilter(index)">{{ item }}</div>
                </div>

                <comparison-selector
                    label="Compare"
                    :items="['Previous Month', 'Previous Year']"
                    @change="reportBy($event)"
                    :compareReport="compareReport"
                />

                <div class="flex justify-center text-secondary text-xl -xl:text-sm font-medium mt-3">
                    NEW MEMBERS
                </div>
                <reporting-members-line-chart  v-if="filterByRange"/>
                <div v-if="!filterByRange">
                    <reporting-members-chart :total-count="totalCount"></reporting-members-chart>
                    <data-table
                        :columns="columns"
                        :data="data"
                        :row-component="MembersList"
                        class="text-xs reporting-member-tbl"
                    />
                    <div class="flex text-secondary justify-center mt-2 font-medium">
                        View All
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped >
    .filter-list{
        cursor: pointer;
    }
    .type-bronze {
        @apply border-2;
    }
    .type-silver {
        @apply bg-accent;
    }
    .type-gold {
        @apply bg-warning/80;
    }
    .type-platinum {
        @apply bg-accent;
    }
</style>
<style>
    @media (max-width:980px) {
        .reporting-member-tbl .reporting-members-list-item {
            font-size: 9px !important;
        }
        .reporting-member-tbl .membership-btn{
            padding-left: 8px !important;
            padding-right: 8px !important;
        }  
    }    
</style>
<script setup>
import ComparisonSelector from '../components/comparison-selector.vue';
import ReportingMembersLineChart from './reporting-members-line-chart.vue';
import ReportingMembersChart from './reporting-members-chart.vue';
import MembersList from './members-list-item.vue'
import {request} from "~/api/utils/request";
import member from "~/api/queries/member";
import {getRandomInt} from "~/api/utils/number";
const columns = ["Members Name", "Members Type", "Date"]
const filterList = ['TODAY', 'MTD', 'QTD', 'YTD', 'RANGE'];
const activeFilter = ref(0);
const filterByRange = ref(false);
const totalCount = ref([12]); 
const radialChatValues = [12, 24, 44, 52];
const compareReport = ref(null);
const setFilter = (index)  => {
    compareReport.value = null;
    activeFilter.value = index;
    totalCount.value = [radialChatValues[index]];
    filterByRange.value = index === 4 ? true : false;
}
const data = ref([]);
const membersList = reactive([
  {
    variation: 'Default',
    list: []
  },
  {
    variation: 'Previous Month',
    list: [],
    userTotal: [14]
  },
  {
    variation: 'Previous Year',
    list: [],
    userTotal: [54]
  },
]);

const membershipTypes = ["platinum", "gold", "silver", "bronze"];


request(member.query.browse, {first: 15}).then((response) => {
  const members = response.data.data.members.data.map(m => ({
    ...m,
    type: membershipTypes[
        getRandomInt(membershipTypes.length - 1)
    ]
  }));

  data.value = members.splice(0, 6);
  while (members.length > 0) {
    for (let i = 0; i < 3; i++) {
      membersList[i].list.push(members.shift());
    }
  }
});

const reportBy = (type) => {
    if(type !== compareReport.value) {
        const result = membersList.find(item => {
            return item.variation === type;
        });
        data.value = result.list;
        totalCount.value = result.userTotal;
        compareReport.value = type;
        filterByRange.value = false;
    }else {
        data.value = membersList[0].list;
        compareReport.value = null;
        totalCount.value = [radialChatValues[activeFilter.value]];
        filterByRange.value = activeFilter.value === 4 ? true : false;
    }
}
</script>
