<template>
    <!-- <div class="calendar-card">
        <div class="font-semibold">Calendar</div>
        <div class="calendar-swiper">
            <div class="swiper-arrow">
                <arrow-icon direction="left" class="scale-150"/>
            </div>
            <div class="swiper-text">
                Monday
            </div>
            <div class="swiper-arrow">
                <arrow-icon direction="right" class="scale-150"/>
            </div>
        </div>
        <div class="calendar-date">Monday, September 6</div>
    </div> -->
    <div class="grid grid-cols-6 gap-4 m-2">
        <div class="col-start-1 col-end-3">
            <span class="text-lg">Calendar</span>
        </div>
        <div class="col-start-7">
            <Button secondary size="xs">View</Button>
        </div>
    </div>
    <div class="px-2 mt-4 mb-4">
        <Datepicker class="custom-date" v-model="date" inline auto-apply :enable-time-picker="false" dark/>
    </div>
    <div class="calendar-card">
        <div class="swiper-text">Monday</div>
        <div class="calendar-date">September 6</div>
    </div>
</template>
<style>
    .custom-date {
        .dp__theme_dark {
            --dp-background-color: #000000;
            --dp-menu-border-color: #FFFFFF;
        }
        .dp__calendar_header {
            width: 100%;
        }
        .dp__calendar {
            width: 100%;
            .dp__calendar_row {
                padding-left: 8px;
            }
        }
    }
</style>
<style scoped>
/* .calendar-card {
    @apply border rounded py-2 px-4;
    .calendar-swiper {
        @apply flex flex-row space-x-2 items-center;
        .swiper-arrow {
            @apply text-secondary cursor-pointer;
        }
        .swiper-text {
            @apply text-3xl font-semibold;
        }
    }
    .calendar-date {
        @apply text-secondary text-xs font-semibold;
    }
} */
.calendar-card {
    @apply py-2 px-2;
    .swiper-text {
        @apply text-3xl;
    }
    .calendar-date {
        @apply text-lg text-secondary;
    }
}
.custom-date {
    display: block !important;
}
</style>
<script setup>
import { ArrowIcon } from '~~/components/icons'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());
</script>