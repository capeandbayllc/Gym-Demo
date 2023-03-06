<template>
    <card title="Reporting Widget 3" class="h-full bg-neutral"
        :options="{
            'collapse': false,
            'favorite': true,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="grid grid-cols-5 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs text-center">
                    <div class="filter-list" :class="{'text-secondary': activeFilter === index}" v-for="(item, index) in filterList" :key="index" @click="setFilter(index)">{{ item }}</div>
                </div>
                <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
                    <div>
                        <span>
                            Compare:
                        </span>
                        <span class="ml-1 cursor-pointer" @click="reportBy('Previous Month')" :class="{'text-secondary': compareReport === 'Previous Month'}">Previous Month</span>
                        <span class="mx-2">or</span>
                        <span class="cursor-pointer" @click="reportBy('Previous Year')" :class="{'text-secondary': compareReport === 'Previous Year'}">Previous Year</span>
                    </div>
                </div>
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
<style scoped>
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
import ReportingMembersLineChart from './reporting-members-line-chart.vue';
import ReportingMembersChart from './reporting-members-chart.vue';
import MembersList from './members-list-item.vue'
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
const data = ref([
    {
        id: 1,
        name: "Halima Kuphal",
        type: "gold",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
    {
        id: 2,
        name: "Nathan Sipes",
        type: "silver",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
    {
        id: 3,
        name: "Candace Wehner",
        type: "gold",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
    {
        id: 4,
        name: "Anita Greenholt",
        type: "platinum",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
    {
        id: 5,
        name: "Cassie Herman",
        type: "bronze",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
]);
const membersList = [
    {
        variation: 'Default',
        list: [
            {
                id: 1,
                name: "Halima Kuphal",
                type: "gold",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 2,
                name: "Nathan Sipes",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 3,
                name: "Candace Wehner",
                type: "gold",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 4,
                name: "Anita Greenholt",
                type: "platinum",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 5,
                name: "Cassie Herman",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
        ]
    },
    {
        variation: 'Previous Month',
        list: [
            {
                id: 1,
                name: "Halima Kuphal",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 2,
                name: "Nathan Sipes",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 3,
                name: "Candace Wehner",
                type: "gold",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 4,
                name: "Anita Greenholt",
                type: "platinum",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 5,
                name: "Cassie Herman",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
        ],
        userTotal: [14] 
    },
    {
        variation: 'Previous Year',
        list: [
            {
                id: 1,
                name: "Halima Kuphal",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 2,
                name: "Nathan Sipes",
                type: "gold",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 3,
                name: "Candace Wehner",
                type: "gold",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 4,
                name: "Anita Greenholt",
                type: "platinum",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
            {
                id: 5,
                name: "Cassie Herman",
                type: "bronze",
                date: "12.06.22",
                avatar: '/checkin/kevin.png'
            },
        ],
        userTotal: [54] 
    },
];
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
