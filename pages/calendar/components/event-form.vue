<template>
    <form
        class="p-10 bg-neutral border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary pointer-events-auto relative !font-light tracking-wider"
    >
        <button
            @click="emit('cancel')"
            type="button"
            class="absolute top-4 right-4 hover:rotate-180 calendar-style-transition"
        >
            <CrossCircleIcon
                class="w-7 h-7 hover:text-secondary calendar-style-transition"
            />
        </button>

        <div class="w-full flex flex-col">
            <input
                v-model="form.title"
                type="text"
                class="!rounded-b-none mb-3 p-2 !text-black !bg-white rounded-xl mt-2 placeholder:!text-[#aaa]"
                placeholder="Title"
            />
            <div class="w-full mx-auto">
                <BtnGroup :choices="btnChoices" v-model="form.eventType" />
            </div>
        </div>

        <div class="w-full flex flex-col">
            <label>Member</label>
            <select v-model="form.member" placeholder="Member">
                <option class="text-white/[0.7]" :value="null">Member</option>
                <option v-for="mem in members" :key="mem.id">
                    {{ mem.first_name }} {{ mem.last_name }}
                </option>
            </select>
        </div>
        <div class="w-full flex flex-col">
            <label>Instructor</label>
            <select v-model="form.instructor" placeholder="Instructor">
                <option class="text-white/[0.7]" :value="null">
                    Instructor
                </option>
                <option v-for="employee in employees" :key="employee.id">
                    {{ employee.first_name }} {{ employee.last_name }}
                </option>
            </select>
        </div>

        <div class="w-full flex flex-col">
            <label>Start</label>
            <div class="flex flex-row">
                <input
                    v-model="form.start.date"
                    class="border-[#191919] calendar-style-transition"
                    :class="{
                        'basis-2/3 !rounded-r-none border-r': !form.allDay,
                        'basis-[100%]': form.allDay,
                    }"
                    id="date"
                    type="date"
                />
                <input
                    v-model="form.start.time"
                    class="!rounded-l-none basis-1/3 border-l border-[#191919] calendar-style-transition"
                    :class="{
                        'basis-1/3': !form.allDay,
                        'basis-[0%] !p-0': form.allDay,
                    }"
                    id="start_time"
                    type="time"
                />
            </div>
        </div>

        <div class="w-full flex flex-col">
            <label>End</label>
            <div class="flex flex-row">
                <input
                    v-model="form.end.date"
                    class="border-[#191919] calendar-style-transition"
                    :class="{
                        'basis-2/3 !rounded-r-none border-r': !form.allDay,
                        'basis-[100%]': form.allDay,
                    }"
                    id="date"
                    type="date"
                />
                <input
                    v-model="form.end.time"
                    class="!rounded-l-none basis-1/3 border-l border-[#191919] calendar-style-transition"
                    :class="{
                        'basis-1/3': !form.allDay,
                        'basis-[0%] !p-0': form.allDay,
                    }"
                    id="start_time"
                    type="time"
                />
            </div>
        </div>

        <div class="w-full flex flex-col mt-4">
            <RadioToggle
                label="All Day"
                :isChecked="form.allDay"
                :onChange="() => (form.allDay = !form.allDay)"
                labelClass="font-light tracking-wider text-[0.9rem]"
            />
        </div>

        <div class="w-full flex flex-col">
            <label>Description</label>
            <textarea
                class="resize-none"
                rows="3"
                v-model="form.description"
                type="text"
            />
        </div>

        <div class="flex justify-between mt-4">
            <div class="flex gap-2 items-center">
                <CheckboxInput
                    :label="`Recurring event`"
                    :isChecked="form.recurring"
                    :onChange="() => (form.recurring = !form.recurring)"
                />
            </div>
            <div class="flex gap-2 items-center">
                <RadioToggle
                    label="Notification"
                    :isChecked="form.notify"
                    :onChange="() => (form.notify = !form.notify)"
                    labelClass="font-light tracking-wider text-[0.9rem]"
                />
                <!-- <label for="">Notification</label>
                <input type="checkbox" /> -->
            </div>
        </div>

        <div class="flex mt-8 justify-end items-center gap-4">
            <button type="button" @click="emit('cancel')">Cancel</button>
            <button
                @click="handleNewEvent"
                class="bg-secondary py-1 px-4 rounded-xl"
                type="button"
            >
                Add
            </button>
        </div>
    </form>
</template>

<script setup>
import BtnGroup from "./partials/btn-group.vue";
// import {
//     addMinutesToDate,
//     formatRandomEventTime,
// } from "../helpers/calendar-events";
import { CrossCircleIcon } from "~~/components/icons";

const props = defineProps({
    members: {
        type: Array,
        default: [],
    },
    employees: {
        type: Array,
        default: [],
    },
    nodeContext: {
        type: [Object, null],
        default: null,
    },
});

const emit = defineEmits(["createEvent", "cancel"]);

const btnChoices = ["event", "task", "service", "prospect"];
const form = ref({
    eventType: "event",
    title: null,
    member: null,
    instructor: null,
    start: {
        date: null,
        time: null,
    },
    end: {
        date: null,
        time: null,
    },
    description: "",
    recurring: false,
    notify: false,
    allDay: false,
});

const handleNewEvent = () => {
    emit("createEvent", form.value);
    resetInputs();
};

const resetInputs = () => {
    form.value = {
        eventType: "event",
        title: null,
        member: null,
        instructor: null,
        start: {
            date: null,
            time: null,
        },
        end: {
            date: null,
            time: null,
        },
        description: "",
        recurring: false,
        notify: false,
        allDay: false,
    };
    emit("cancel");
};
</script>

<style scoped>
input,
textarea,
select {
    @apply w-full p-2 rounded-xl text-white mt-1 placeholder:text-black/[0.8] bg-[#555] text-[0.8rem];
    color-scheme: dark;
}
.calendar-style-transition {
    @apply transition-all duration-300 ease-linear;
}

label {
    @apply font-light mt-4 text-[0.8rem];
}
</style>
