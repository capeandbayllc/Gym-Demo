<template>
    <div
        class="bg-base-200 absolute top-0 right-0 h-full rounded-l-3xl border-2 border-r-0 border-secondary z-50 overflow-hidden font-light tracking-wide"
        :class="{
            'w-[50%] opacity-100 p-8': showOfferUp,
            'w-[0%] opacity-0 p-0': !showOfferUp,
        }"
    >
        <div class="flex flex-row gap-2">
            <SectionHeader :title="event?.title">
                <template #subtitle>
                    <div
                        class="flex gap-4 items-center !text-[0.7rem] font-light"
                    >
                        <span class="capitalize"
                            >{{ weekdays[new Date(event?.start).getDay()] }},
                            {{ months[new Date(event?.start).getMonth()] }}
                            {{ new Date(event?.start).getDate() }}</span
                        >
                        <span class="h-2 w-2 bg-base-content rounded-full"></span>
                        <span>
                            {{ getTimeString(event?.start) }} -
                            {{ getTimeString(event?.end) }}
                        </span>
                    </div>
                </template>
            </SectionHeader>
            <CrossCircleIcon
                class="w-10 h-10 hover:text-secondary cursor-pointer hover:rotate-90 calendar-style-transition -mt-3 -mr-3"
                @click="emit('cancel')"
            />
        </div>
        <div class="flex flex-row gap-8 mt-5">
            <div class="flex gap-4">
                <span
                    class="w-12 h-12 my-auto p-1 bg-base-content rounded-xl overflow-hidden border-2 border-secondary"
                >
                    <img
                        :src="
                            event?.extendedProps.instructor.profile_photo_path
                        "
                        class="w-[calc(3rem-12px)] h-[calc(3rem-12px)]"
                        v-if="
                            event?.extendedProps.instructor.profile_photo_path
                        "
                    />
                    <UserIcon
                        v-else
                        class="w-[calc(3rem-12px)] h-[calc(3rem-12px)]"
                    />
                </span>
                <span class="flex flex-col tracking-wider">
                    <span class="text-[0.8rem] text-base-content/50">Instructor</span>
                    <span class="line-clamp-1 text-[0.9rem]">
                        {{ event?.extendedProps.instructor.first_name }}
                        {{ event?.extendedProps.instructor.last_name }}</span
                    >
                </span>
            </div>
            <div class="flex gap-4">
                <span
                    class="w-12 h-12 my-auto p-1 bg-secondary rounded-xl overflow-hidden border-2 border-secondary"
                >
                    <LocationDotIcon
                        class="w-[calc(3rem-12px)] h-[calc(3rem-12px)] fill-base-content"
                    />
                </span>
                <span class="flex flex-col tracking-wider">
                    <span class="text-[0.8rem] text-base-content/50">Address</span>
                    <span class="line-clamp-1 text-[0.9rem]">{{
                        event?.extendedProps.location.name
                    }}</span>
                </span>
            </div>
        </div>
        <div class="flex flex-col gap-5 mt-5 text-[0.8rem]">
            <h5 class="font-light tracking-wider">
                Choose one of the available times to offer up...
            </h5>
            <div
                class="flex flex-col gap-5 max-h-[50vh] overflow-y-scroll no-scrollbar"
            >
                <div
                    class="flex flex-col p-3 border-2 border-secondary bg-secondary-content rounded-2xl cursor-pointer"
                    v-for="(employee, index) in employees"
                    @click="setOpenIndex(index)"
                >
                    <div class="flex flex-row justify-between">
                        <span>{{ employee.name }}</span>
                        <ArrowIcon
                            direction="up"
                            class="my-auto calendar-style-transition"
                        />
                    </div>
                    <div
                        class="flex flex-col gap-8 justify-between overflow-y-scroll no-scrollbar calendar-style-transition"
                        :class="{
                            'max-h-[30vh] mt-3': index === openIndex,
                            'max-h-[0vh] mt-0': index !== openIndex,
                        }"
                    >
                        <div class="" v-for="dateOption in dateOptions">
                            <h5 class="text-[0.9rem] font-normal mb-2">
                                {{ dateOption.date }}
                            </h5>
                            <div
                                class="flex flex-row flex-wrap gap-3 justify-start"
                            >
                                <span
                                    class="py-0.5 px-2 border w-[90px] rounded-full text-center text-[0.7rem]"
                                    v-for="time in dateOption.times"
                                    >{{ time }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-secondary text-center text-[0.8rem] mt-5">
            Show all available instructors
        </div>
    </div>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import {
    CrossCircleIcon,
    LocationDotIcon,
    UserIcon,
    ArrowIcon,
} from "~~/components/icons";
import {
    weekdays,
    months,
    parseHour,
    parseMinutes,
    getTimeString,
} from "../../helpers/calendar-events";

const emit = defineEmits(["cancel"]);
const openIndex = ref(null);
const dateOptions = ref([
    {
        date: "MAR 20",
        times: [
            "8:00 AM",
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
            "5:00 PM",
            "6:00 PM",
            "7:00 PM",
            "8:00 PM",
        ],
    },
    {
        date: "MAR 21",
        times: [
            "8:00 AM",
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
            "5:00 PM",
            "6:00 PM",
            "7:00 PM",
            "8:00 PM",
        ],
    },
    {
        date: "MAR 22",
        times: [
            "8:00 AM",
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
            "5:00 PM",
            "6:00 PM",
            "7:00 PM",
            "8:00 PM",
        ],
    },
]);
const props = defineProps({
    event: {
        type: [Object, null],
    },
    showOfferUp: {
        type: Boolean,
    },
    employees: {
        type: Array,
        default: [],
    },
});

const setOpenIndex = (index) => {
    if (index === openIndex.value) {
        openIndex.value = null;
    } else {
        openIndex.value = index;
    }
};
</script>

<style scoped lang="postcss">
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    @apply hidden;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
