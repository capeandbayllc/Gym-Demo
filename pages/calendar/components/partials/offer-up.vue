<template>
    <div
        class="bg-[#191919]/95 absolute top-0 right-0 h-full rounded-l-3xl border-2 border-r-0 border-secondary z-50 overflow-hidden p-8"
        :class="{
            'w-[45%] opacity-100': showOfferUp,
            'w-[0%] opacity-0': !showOfferUp,
        }"
    >
        <div class="flex flex-row gap-2">
            <SectionHeader :title="event?.title">
                <template #subtitle>
                    <div
                        class="mt-2 flex gap-4 items-center !text-[0.9rem] font-light"
                    >
                        <span class="capitalize"
                            >{{ weekdays[new Date(event?.start).getDay()] }},
                            {{ months[new Date(event?.start).getMonth()] }}
                            {{ new Date(event?.start).getDate() }}</span
                        >
                        <span class="h-2 w-2 bg-white rounded-full"></span>
                        <span>
                            {{ parseHour(event?.start) }}:{{
                                parseMinutes(event?.start)
                            }}
                            - {{ parseHour(event?.end) }}:{{
                                parseMinutes(event?.end)
                            }}
                        </span>
                    </div>
                </template>
            </SectionHeader>
            <CrossCircleIcon
                class="w-10 h-10 hover:text-secondary cursor-pointer hover:rotate-90 calendar-style-transition -mt-3 -mr-3"
                @click="emit('cancel')"
            />
        </div>
    </div>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import { CrossCircleIcon } from "~~/components/icons";
import {
    weekdays,
    months,
    parseHour,
    parseMinutes,
} from "../../helpers/calendar-events";

const emit = defineEmits(["cancel"]);

const props = defineProps({
    event: {
        type: [Object, null],
    },
    showOfferUp: {
        type: Boolean,
    },
});
</script>

<style scoped>
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
