<template>
    <section
        class="w-full bg-neutral border-2 h-[88vh] lg:h-[87.5vh] rounded-3xl rounded-l-none absolute top-0 right-0 font-light no-scrollbar m-8"
        :class="{
            '!w-[50%] lg:!w-[40%] xl:!w-[35%] opacity-100 z-20 overflow-y-scroll':
                eventInformationVisibibility,
            '!w-[0%] opacity-0 overflow-hidden': !eventInformationVisibibility,
        }"
    >
        <div class="flex flex-row gap-2">
            <SectionHeader :title="event?.title" :border="false">
                <template #subtitle>
                    <div
                        class="flex gap-4 items-center !text-[0.7rem] font-light"
                    >
                        <span class="capitalize"
                            >{{ weekdays[new Date(event?.start).getDay()] }},
                            {{ months[new Date(event?.start).getMonth()] }}
                            {{ new Date(event?.start).getDate() }}</span
                        >
                        <span class="h-2 w-2 bg-white rounded-full"></span>
                        <span>
                            {{ getTimeString(event?.start) }} -
                            {{ getTimeString(event?.end) }}
                        </span>
                    </div>
                </template>
            </SectionHeader>
            <CrossCircleIcon
                class="w-10 h-10 hover:text-secondary cursor-pointer hover:rotate-90 calendar-style-transition mt-3 mr-3 z-50"
                @click="emit('cancel')"
            />
        </div>

        <div class="px-6 flex flex-col gap-5">
            <!-- who/where -->
            <div class="flex flex-col gap-5 mt-5">
                <div class="flex gap-4">
                    <span
                        class="w-12 h-12 my-auto p-1 bg-white rounded-xl overflow-hidden border-2 border-secondary"
                    >
                        <img
                            :src="
                                event?.extendedProps.instructor
                                    .profile_photo_path
                            "
                            class="w-[calc(3rem-12px)] h-[calc(3rem-12px)]"
                            v-if="
                                event?.extendedProps.instructor
                                    .profile_photo_path
                            "
                        />
                        <UserIcon
                            v-else
                            class="w-[calc(3rem-12px)] h-[calc(3rem-12px)]"
                        />
                    </span>
                    <span class="flex flex-col tracking-wider">
                        <span class="text-[0.8rem] text-white/50"
                            >Instructor</span
                        >
                        <span class="line-clamp-1 text-[0.9rem]">
                            {{ event?.extendedProps.instructor.first_name }}
                            {{
                                event?.extendedProps.instructor.last_name
                            }}</span
                        >
                    </span>
                </div>
                <div class="flex gap-4">
                    <span
                        class="w-12 h-12 my-auto p-1 bg-[#2F72C4E2] rounded-xl overflow-hidden border-2 border-secondary"
                    >
                        <LocationDotIcon
                            class="w-[calc(3rem-12px)] h-[calc(3rem-12px)] fill-white"
                        />
                    </span>
                    <span class="flex flex-col tracking-wider">
                        <span class="text-[0.8rem] text-white/50">Address</span>
                        <span class="line-clamp-1 text-[0.9rem]">{{
                            event?.extendedProps.location.name
                        }}</span>
                    </span>
                </div>
            </div>

            <div class="text-[0.8rem]">
                {{ event?.extendedProps.description }}
            </div>
            <div class="flex flex-row justify-center">
                <div
                    class="border-2 border-secondary bg-[#18203A] px-5 gap-5 py-1.5 rounded-xl flex flex-row justify-center text-[0.7rem]"
                >
                    <span
                        class="w-[60px] py-1 xl:w-[70px] text-center calendar-style-transition rounded-lg cursor-pointer"
                        v-for="sliderOption in sliderButtons"
                        @click="alterSliderButton(sliderOption.id)"
                        :class="{
                            'bg-secondary ':
                                selectedSliderButton === sliderOption.id,
                        }"
                    >
                        {{ sliderOption.value }}
                    </span>
                </div>
            </div>
            <!-- confirmed/payroll ? -->
            <div class="flex flex-col gap-5">
                <span class="text-xs"
                    >This session {{ getDiffToEndDate(event?.end).prepend }}
                    <span class="font-bold">{{
                        getDiffToEndDate(event?.end).append
                    }}</span></span
                >
                <div class="flex gap-8 items-center">
                    <label
                        class="text-lg font-light w-[40%]"
                        for="slct_confirm"
                    >
                        Confirmed</label
                    >
                    <select
                        name="confirmed"
                        id="slct_confirm"
                        class="bg-[#555] px-2 py-1 rounded-2xl text-white"
                    >
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </div>
                <div class="flex gap-8 items-center">
                    <label
                        class="text-lg font-light w-[40%]"
                        for="slct_payroll"
                    >
                        Payroll elligible</label
                    >
                    <select
                        name="payroll"
                        id="slct_payroll"
                        class="bg-[#555] px-2 py-1 rounded-2xl text-white"
                    >
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </div>
                <select
                    class="bg-[#555] px-4 py-3 rounded-2xl text-white w-full mt-3"
                    name="completed"
                    id="slct_completed"
                >
                    <option value="complete">Completed</option>
                </select>
            </div>

            <!-- attendees -->
            <div class="mt-8">
                <span class="text-xl font-semibold">Attendee(s) - 1</span>
                <ul class="flex flex-col w-full mt-4">
                    <AttendeeListItem>
                        <template #tertiary>
                            <div class="flex gap-2">
                                <button
                                    class="p-2 border-2 border-secondary fill-white rounded-xl"
                                >
                                    <span class="block w-3">
                                        <MessageIcon class="w-3 h-3" />
                                    </span>
                                </button>
                                <button
                                    class="p-2 border-2 border-secondary fill-white rounded-xl"
                                >
                                    <span class="block w-3">
                                        <EmailIcon class="w-3 h-3" />
                                    </span>
                                </button>
                            </div>
                        </template>
                    </AttendeeListItem>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import BtnGroup from "./btn-group.vue";
import AttendeeListItem from "./attendee-list-item.vue";
import {
    weekdays,
    months,
    getDiffToEndDate,
    getTimeString,
} from "../../helpers/calendar-events";
import {
    CrossCircleIcon,
    LocationDotIcon,
    UserIcon,
    MessageIcon,
    EmailIcon,
} from "~~/components/icons";

const emit = defineEmits(["outclick", "cancel"]);

const selectedSliderButton = ref("Is Over");
const sliderButtons = ref([
    { id: "Is Over", value: "Is Over" },
    { id: "Show", value: "Show" },
    { id: "Personal", value: "Personal" },
    { id: "Physical", value: "Physical" },
]);

const alterSliderButton = (value) => {
    selectedSliderButton.value = value;
};

const props = defineProps({
    event: {
        type: [Object, null],
        default: null,
    },
    eventInformationVisibibility: {
        type: Boolean,
        default: false,
    },
});

const buttonChoices = ["is_over", "show", "personal", "physical"];

const selectedStatus = ref("is_over");
</script>

<style scoped>
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
