<template>
    <div class="page-club-container">
        <div class="-md:px-4 page-content flex-col">
            <simple-card
                title="Top Employee Ranking in All Categories"
                class="-md:text-xs"
            >
                <div class="px-3 py-3 bg-neutral">
                    <data-table
                        class="leaderboard-table"
                        :data="mock"
                        :row-component="LeaderboardTableRow"
                    />
                </div>
            </simple-card>
            <div class="flex flex-row my-4">
                <multiselect
                    :modelValue="statsFilterList"
                    @update:modelValue="$emit('update:modelValue', $event)"
                    :options="statsFilter"
                    mode="tags"
                    placeholder="States Filter"
                    :caret="true"
                    :classes="getDefaultMultiselectTWClasses()"
                    class="w-[150px] transparent"
                    :close-on-select="false"
                />
            </div>
            <simple-card title="Membership Sales">
                <div class="-md:px-4 px-12 py-3 bg-neutral">
                    <div class="flex flex-row my-4 justify-end">
                        <Button
                            secondary
                            size="sm"
                            >View All</Button
                        >
                        <select-box
                            :items="states"
                            label="States Filter"
                            class="w-36 mx-2"
                        />
                        <search-input
                            neutral
                            size="md"
                            border="neutral"
                            class="-md:w-15 w-30"
                        />
                    </div>
                    <div class="carousel-wrap">
                        <carousel
                            ref="membershipCarousel"
                            :breakpoints="breakpoints"
                        >
                            <slide
                                v-for="(member, index) in membershipData"
                                :key="index"
                            >
                                <simple-card class="px-4">
                                    <span
                                        v-if="member.isFavourite"
                                        class="text-yellow-500 text-xl absolute top-0 right-2"
                                        >&#9733;</span
                                    >
                                    <div
                                        class="flex items-center justify-center p-5"
                                    >
                                        <img
                                            class="w-14 mr-2"
                                            src="/account.png"
                                        />
                                        <div class="text-[12px] text-left">
                                            <p>{{ member.name }}</p>
                                            <p>
                                                <span class="text-secondary"
                                                    >Club Location:</span
                                                >
                                                {{ member.clubLocation }}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="p-1 border border-white rounded flex mb-4"
                                    >
                                        <div class="text-center text-sm w-2/4">
                                            <p class="text-secondary my-1">
                                                Goal:
                                                <span class="ml-1">{{
                                                    member.goalUnitSold
                                                }}</span>
                                            </p>
                                            <ClientOnly>
                                                <apexchart
                                                    type="donut"
                                                    :height="90"
                                                    :width="115"
                                                    :options="options"
                                                    :series="data"
                                                />
                                            </ClientOnly>
                                            <p class="text-secondary mb-2">
                                                Unit Sold
                                            </p>
                                            <p
                                                class="border border-sky-600 rounded w-4/5 mx-auto px-2 py-1 mb-2 text-center text-lime-500"
                                            >
                                                {{ member.unitSold }}
                                            </p>
                                        </div>
                                        <div class="text-center text-sm w-2/4">
                                            <p class="text-secondary my-1">
                                                Goal:
                                                <span class="ml-1">{{
                                                    member.goalRevenue
                                                }}</span>
                                            </p>
                                            <ClientOnly>
                                                <apexchart
                                                    type="donut"
                                                    :height="90"
                                                    :width="115"
                                                    :options="options"
                                                    :series="data"
                                                />
                                            </ClientOnly>
                                            <p class="text-secondary mb-2">
                                                Dollar Amount
                                            </p>
                                            <p
                                                class="border border-sky-600 rounded w-4/5 mx-auto px-2 text-center py-1 mb-2 text-lime-500"
                                            >
                                                {{ member.dollarAmount }}
                                            </p>
                                        </div>
                                    </div>
                                </simple-card>
                            </slide>
                        </carousel>
                        <button
                            class="-md:left-[0] text-secondary absolute text-3xl top-2/4 left-[-30px] translate-y-[-50%]"
                            @click="membershipCarousel.prev()"
                        >
                            <next-icon />
                        </button>
                        <button
                            class="-md:right-[0] text-secondary absolute text-3xl top-2/4 right-[-30px] translate-y-[-50%]"
                            @click="membershipCarousel.next()"
                        >
                            <prev-icon />
                        </button>
                    </div>
                </div>
            </simple-card>
        </div>
    </div>
</template>
<style scoped>
.page-club-container {
    @apply py-4 w-full h-fit text-center -xl:pr-6;
    .page-content {
        @apply block p-7 ;
        /* @screen xl{
            @apply inline-block
        } */
        .location-filter {
            @apply flex flex-row justify-between mb-3;
        }
        .leaderboard-table {
            @apply px-3 bg-neutral overflow-y-auto;
            height: 20vh;
        }
        .carousel-wrap {
            position: relative;
        }
    }
}
</style>
<style>
.multiselect-tag-remove-icon {
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
}
.multiselect-caret {
    background-color: var(--ms-caret-color, #999);
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 var(--ms-px, 0.875rem) 0 0;
    -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
    pointer-events: none;
    position: relative;
    transform: rotate(0deg);
    transition: transform 0.3s;
    z-index: 10;
}
</style>
<script setup>
//import { onMounted,onBeforeUnmount} from "vue";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide} from 'vue3-carousel';
import {NextIcon, PrevIcon} from '~~/components/icons';
import LeaderboardTableRow from './components/leaderboard-table-row.vue';
import Multiselect from '@vueform/multiselect';
import {getDefaultMultiselectTWClasses} from '~~/components/multi-select/getDefaultMultiselectTWClasses.js';

const columns = ['Name', 'Rank', 'Location', 'Units Sold', 'Revenue Genrated'];
const mock = new Array(10).fill({
    id: 0,
    name: 'Caleb Sauer',
    rank: 1,
    location: 123,
    units_sold: 10,
    revenue_genrated: '$1,500',
});
const data = [100];
const options = {
    chart: {
        type: 'donut',
    },
    labels: ['Unit Sold'],
    legend: {
        show: false,
    },
    stroke: {
        show: false,
        width: 0,
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        padding: {
            left: 0,
            right: 0,
        },
        margin: {
            left: 0,
            right: 0,
        },
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: false,
                    },
                    value: {
                        show: true,
                        fontSize: '16px',
                        color: 'hsl(var(--bc))',
                        fontWeight: 400,
                        offsetY: 8,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
            },
        },
    },
};
const statsFilterList = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 4', value: 'option4'},
    {label: 'Option 5', value: 'option5'},
];
const statsFilter = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
];

const breakpoints = ref({
    // 700px and up
    0: {
        itemsToShow: 1,
        snapAlign: 'start',
    },
    768: {
        itemsToShow: 2,
        snapAlign: 'start',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
});
const membershipCarousel = ref(null);
const membershipData = ref([
    {
        name: 'Caleb Sauer',
        isFavourite: true,
        clubLocation: 586,
        goalUnitSold: 100,
        unitSold: 96,
        goalRevenue: '$200',
        dollarAmount: '$1,000',
    },
    {
        name: 'Caleb Sauer',
        isFavourite: false,
        clubLocation: 165,
        goalUnitSold: 80,
        unitSold: 55,
        goalRevenue: '$180',
        dollarAmount: '$2,120',
    },
    {
        name: 'Caleb Sauer',
        isFavourite: false,
        clubLocation: 65,
        goalUnitSold: 90,
        unitSold: 85,
        goalRevenue: '$195',
        dollarAmount: '$1,200',
    },
    {
        name: 'Caleb Sauer',
        isFavourite: true,
        clubLocation: 586,
        goalUnitSold: 100,
        unitSold: 96,
        goalRevenue: '$200',
        dollarAmount: '$1,000',
    },
    {
        name: 'Caleb Sauer',
        isFavourite: false,
        clubLocation: 165,
        goalUnitSold: 80,
        unitSold: 55,
        goalRevenue: '$180',
        dollarAmount: '$2,120',
    },
    {
        name: 'Caleb Sauer',
        isFavourite: false,
        clubLocation: 65,
        goalUnitSold: 90,
        unitSold: 85,
        goalRevenue: '$195',
        dollarAmount: '$1,200',
    },
]);

onMounted(() => {
    setTimeout(() => {
        membershipCarousel.value.restartCarousel();
    }, 500);
});
</script>
