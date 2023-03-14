<template>
    <form
        class="p-10 bg-neutral border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary pointer-events-auto relative !font-light tracking-wider"
    >
        <button
            @click="emit('cancel')"
            type="button"
            class="absolute top-4 right-4"
        >
            <CrossCircleIcon class="w-7 h-7" />
        </button>

        <div class="form-group-pair">
            <input
                v-model="form.title"
                type="text"
                class="!rounded-b-none mb-3 p-2 text-black !bg-white rounded-xl mt-2"
                placeholder="Title"
            />
            <div class="w-full mx-auto">
                <BtnGroup :choices="btnChoices" v-model="form.eventType" />
            </div>
        </div>

        <div class="form-group-pair">
            <label>Member</label>
            <select
                v-model="form.member"
                placeholder="Member"
                class="w-full p-2 rounded-xl text-white mt-1 placeholder:text-black/[0.8] bg-[#555]"
            >
                <option class="text-white/[0.7]" :value="null">Member</option>
                <option v-for="mem in members" :key="mem.id">
                    {{ mem.first_name }} {{ mem.last_name }}
                </option>
            </select>
        </div>
        <div class="form-group-pair">
            <label>Instructor</label>
            <select
                v-model="form.instructor"
                placeholder="Instructor"
                class="w-full p-2 rounded-xl text-white mt-1 placeholder:text-white/[0.8] bg-[#555]"
            >
                <option class="text-white/[0.7]" :value="null">
                    Instructor
                </option>
                <option v-for="employee in employees" :key="employee.id">
                    {{ employee.first_name }} {{ employee.last_name }}
                </option>
            </select>
        </div>
        <div class="form-group-pair">
            <label>Date</label>
            <input v-model="form.time.date" id="date" type="date" />
        </div>

        <div class="form-group-pair">
            <div class="flex w-full gap-4 mt-2 flex-col">
                <div class="flex gap-4">
                    <div class="w-full flex flex-col">
                        <label>Start</label>
                        <input
                            v-model="form.time.end"
                            id="end_time"
                            type="date"
                        />
                    </div>
                    <div class="w-full flex flex-col">
                        <label>End</label>
                        <input
                            v-model="form.time.end"
                            id="end_time"
                            type="time"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group-pair">
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
                <input type="checkbox" />
                <label>Recurring event</label>
            </div>
            <div class="flex gap-2 items-center">
                <label for="">Notification</label>
                <input type="checkbox" />
            </div>
        </div>

        <div class="flex mt-8 mb-4 justify-end items-center gap-4">
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
import {
    addMinutesToDate,
    formatRandomEventTime,
} from "../helpers/calendar-events";
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
const currentDate = ref(new Date());

const btnChoices = ["event", "task", "service", "prospect"];
const form = ref({
    eventType: "event",
    title: "",
    member: null,
    instructor: null,
    time: {
        start: props.nodeContext?.start ? props.nodeContext.start : new Date(),
        end: props.nodeContext?.start
            ? formatRandomEventTime({ minute: -60 }, props.nodeContext.start)
            : formatRandomEventTime({ minute: -60 }, new Date()),
    },
    description: "",
    recurring: false,
    notify: false,
});

const handleNewEvent = () => {
    emit("createEvent", form.value);
};
</script>

<style scoped lang="postcss">
.form-group-pair {
    @apply w-full flex flex-col;

    label {
        @apply font-light mt-4;
    }

    input,
    textarea {
        @apply p-2 text-white rounded-xl mt-1 bg-[#555];
    }
}
</style>
