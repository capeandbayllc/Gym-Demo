<template>
    <div class="calendar-card">
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
    </div>
</template>
<style scoped>
.calendar-card {
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
}
</style>
<script setup>
import { ArrowIcon } from '~~/components/icons'
</script>