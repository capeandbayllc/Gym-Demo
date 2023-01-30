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
                    <!-- <div class="text-secondary">TODAY</div>
                    <div>MTD</div>
                    <div>QTD</div>
                    <div>YTD</div>
                    <div>RANGE</div> -->
                </div>
                <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
                    <div>
                        <span>
                            Compare:
                        </span>
                        <span class="ml-1">Previous Month</span>
                        <span class="mx-2">or</span>
                        <span class="ml-1">Previous Year</span>
                    </div>
                </div>
                <div class="flex justify-center text-secondary text-xl -xl:text-sm font-medium mt-3">
                    NEW MEMBERS
                </div>
                <reporting-members-line-chart  v-if="filterByRange"/>
                <div v-if="!filterByRange">
                    <reporting-members-chart></reporting-members-chart>
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
    .type-premium {
        @apply bg-accent;
    }
    .type-basic {
        @apply border-2;
    }
    .type-gold {
        @apply bg-warning/80;
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
const setFilter = (index)  => {
    activeFilter.value = index;
    filterByRange.value = index === 4 ? true : false;
}
const data = [
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
        type: "basic",
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
        type: "premium",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
    {
        id: 5,
        name: "Cassie Herman",
        type: "basic",
        date: "12.06.22",
        avatar: '/checkin/kevin.png'
    },
]
</script>
