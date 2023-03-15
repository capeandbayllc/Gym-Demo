<template>
    <section
        ref="eventDetailsElement"
        class="bg-neutral py-8 px-6 rounded-2xl border-2 border-secondary max-w-2xl w-full relative font-light !tracking-wider text-[0.9rem] pointer-events-auto"
    >
        <div class="flex flex-row gap-2">
            <SectionHeader :title="event.title">
                <template #subtitle>
                    <div class="mt-2 flex gap-4 items-center">
                        <span class="capitalize"
                            >{{ weekdays[new Date(event.start).getDay()] }},
                            {{ months[new Date(event.start).getMonth()] }}
                            {{ new Date(event.start).getDate() }}</span
                        >
                        <span class="h-2 w-2 bg-white rounded-full"></span>
                        <span
                            >{{ new Date(event.start).getHours() }}:{{
                                new Date(event.start).getMinutes()
                            }}
                            - 00:00 AM</span
                        >
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
                    class="h-[34px] w-[34px] my-auto bg-white rounded-xl overflow-hidden border-2 border-secondary"
                >
                    <UserIcon class="w-[30px] h-[30px]" />
                </span>
                <span class="tracking-wider">
                    {{ event.extendedProps.instructor }}
                </span>
            </li>
            <li class="flex gap-6 text-xl">
                <span
                    class="h-[34px] w-[34px] bg-secondary my-auto rounded-xl overflow-hidden border-2 border-secondary p-1 flex flex-col justify-center"
                >
                    <LocationDotIcon
                        class="w-[20px] h-[20px] fill-white mx-auto"
                    />
                </span>
                <span class="tracking-wider">Tampa 675</span>
            </li>
        </ul>
        <div class="flex flex-col gap-2 mt-4">
            <span>{{ event.extendedProps.description }}</span>

            <div class="flex justify-between items-center mt-8">
                <button
                    class="bg-[#3D7DCF] px-2 py-1 flex flex-row gap-3 rounded-xl hover:bg-secondary calendar-style-transition"
                    type="button"
                    @click="emit('offerup')"
                >
                    <span class="my-auto">Offer Up</span>
                    <BiDirArrowIcon
                        class="stroke-white fill-white my-auto w-7"
                    />
                </button>

                <button
                    type="button"
                    @click="emit('seemore')"
                    class="underline"
                >
                    See more
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import { weekdays, months } from "../../helpers/calendar-events";
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

const eventDetailsElement = ref(null);

const ensureClickBoundary = (e) => {
    if (!eventDetailsElement.value.contains(e.target)) emit("outclick");
};

onMounted(() => {
    window.addEventListener("click", ensureClickBoundary, true);
});

onUnmounted(() => {
    window.removeEventListener("click", ensureClickBoundary, true);
});
</script>

<style scoped>
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
