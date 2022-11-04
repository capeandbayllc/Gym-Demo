<template>
    <card title="Calendar Reporting" class="calendar-card">
        <template #summary>
            <div class="calendar-summary">
                <h2>43</h2>
                <div class="font-bold leading-none">
                    Tours <br />Scheduled
                </div>
            </div>
        </template>
        <template #content>
            <div class="calendar-card-content">
                <div class="calendar-day-list">
                    <div
                        v-for="(date, ndx) in dates" :key="ndx"
                        class="calendar-day"
                        :class="{ 'active': ndx === 0 }"
                    >
                        <div>{{ date.getDate() }}</div>
                        <div class="text-xs">
                            {{ days[date.getDay()] }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="calendar-total-scheduled">
                        <h2>43</h2>
                        <div class="font-bold leading-none text-neutral">
                            Tours <br />Scheduled
                        </div>
                    </div>
                    <div class="calendar-todo">Campaign /To-Do</div>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et
                    </p>
                    <go-btn />
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped>
.calendar-card {
    @apply w-80;
    .calendar-summary, .calendar-total-scheduled {
        @apply flex flex-row items-center gap-3;
        h2 {
            @apply text-secondary text-4xl font-bold;
        }
    }
    .calendar-total-scheduled {
        @apply bg-primary-content h-fit rounded w-full py-2 pl-4;
    }
    .calendar-card-content {
        @apply flex flex-row gap-4 pt-3;

        ::-webkit-scrollbar {
            width: 0em;
            height: 0em;
        }
        .calendar-day-list {
            @apply w-12 flex flex-col gap-2 flex-shrink-0 h-56 overflow-y-auto;
            .calendar-day {
                @apply flex flex-col border border-secondary rounded items-center justify-center h-12 text-2xl font-bold leading-none;
            }
            .calendar-day.active {
                @apply bg-secondary border-base-content;
            }
        }
        .calendar-todo {
            @apply text-base text-secondary font-semibold mt-2;
        }
    }
}
</style>
<script setup>
import GoBtn from './go-btn.vue';

let dates = [];
for (let i = 0; i < 6; i++) {
    let date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date);
}
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

</script>