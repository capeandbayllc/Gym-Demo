<template>
    <section
        class="bg-neutral py-8 px-6 rounded-2xl border-2 border-secondary max-w-2xl w-full relative font-light !tracking-wider text-[0.9rem] !pointer-events-auto"
    >
        <div class="flex flex-row gap-2">
            <SectionHeader :title="event?.title">
                <template #subtitle>
                    <div class="mt-2 flex gap-4 items-center">
                        <span class="capitalize"
                            >{{ weekdays[new Date(event?.start).getDay()] }},
                            {{ months[new Date(event?.start).getMonth()] }}
                            {{ new Date(event?.start).getDate() }}</span
                        >
                        <span class="h-2 w-2 bg-base-content rounded-full"></span>
                        <span>
                            <span
                                >{{ getTimeString(event?.start) }} -
                                {{ getTimeString(event?.end) }}</span
                            >
                        </span>
                    </div>
                </template>
            </SectionHeader>
            <CrossCircleIcon
                class="w-10 h-10 hover:text-secondary cursor-pointer hover:rotate-90 calendar-style-transition -mt-3"
                @click="emit('cancel')"
            />
        </div>
        <!-- attendees? -->
        <ul class="mt-8 flex flex-col justify-center gap-4">
            <li class="flex gap-6 text-xl">
                <span
                    class="h-[34px] w-[34px] my-auto bg-base-content rounded-xl overflow-hidden border-2 border-secondary"
                >
                    <img
                        :src="
                            event?.extendedProps.instructor.profile_photo_path
                        "
                        class="w-[30px] h-[30px]"
                        v-if="
                            event?.extendedProps.instructor.profile_photo_path
                        "
                    />
                    <UserIcon class="w-[30px] h-[30px]" v-else />
                </span>
                <span class="tracking-wider">
                    {{ event?.extendedProps.instructor.first_name }}
                    {{ event?.extendedProps.instructor.last_name }}
                </span>
            </li>
            <li class="flex gap-6 text-xl">
                <span
                    class="h-[34px] w-[34px] bg-secondary my-auto rounded-xl overflow-hidden border-2 border-secondary p-1 flex flex-col justify-center"
                >
                    <LocationDotIcon
                        class="w-[20px] h-[20px] fill-base-content mx-auto"
                    />
                </span>
                <span class="tracking-wider">
                    {{ event?.extendedProps.location.name }}
                </span>
            </li>
        </ul>
        <div class="flex flex-col gap-2 mt-4">
            <span>{{ event?.extendedProps.description }}</span>

            <div class="flex justify-between items-center mt-8">
                <button
                    class="bg-secondary px-2 py-1 flex flex-row gap-3 rounded-xl hover:bg-secondary calendar-style-transition"
                    type="button"
                    @click="offerUp"
                >
                    <span class="my-auto">Offer Up</span>
                    <BiDirArrowIcon
                        class="stroke-base-content fill-base-content my-auto w-7"
                    />
                </button>

                <button type="button" @click="seeMore" class="underline">
                    See more
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import {
    weekdays,
    months,
    parseHour,
    parseMinutes,
    getTimeString,
} from "../../helpers/calendar-events";
import {
    CrossCircleIcon,
    LocationDotIcon,
    UserIcon,
    BiDirArrowIcon,
} from "~~/components/icons";

const emit = defineEmits(["outclick", "seemore", "cancel"]);

const props = defineProps({
    event: {
        type: [Object, null],
        default: null,
    },
});

const seeMore = () => {
    emit("seemore");
};

const offerUp = () => {
    emit("offerup");
};
</script>

<style scoped lang="postcss">
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
