<template>
  <section
    class="w-full bg-neutral border-2 h-[88vh] lg:h-[87.5vh] rounded-3xl rounded-l-none fixed top-10 right-0 font-light no-scrollbar m-8"
    :class="{
      '!w-[50%] lg:!w-[40%] xl:!w-[35%] opacity-100 z-20 overflow-y-scroll':
        eventInformationVisibibility,
      '!w-[0%] opacity-0 overflow-hidden': !eventInformationVisibibility,
    }"
  >
    <div class="flex flex-row gap-2">
      <SectionHeader :title="event?.title" :border="false">
        <template #subtitle>
          <div class="flex gap-4 items-center !text-[0.7rem] font-light">
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
        class="w-10 h-10 hover:text-secondary cursor-pointer hover:rotate-90 calendar-style-transition mt-3 mr-3 z-50"
        @click="emit('cancel')"
      />
    </div>
    <div
      class="flex flex-col justify-center h-[calc(100%-100px)]"
      v-if="eventIsLoading"
    >
      <spinner class="mx-auto" />
      <span class="mx-auto text-[0.8rem] mt-5"
        >Loading event, please wait...</span
      >
    </div>
    <div v-else>
      <div class="px-6 flex flex-col gap-5">
        <!-- who/where -->
        <div class="flex flex-col gap-5 mt-5">
          <div class="flex gap-4">
            <span
              class="w-12 h-12 my-auto p-1 bg-base-content rounded-xl overflow-hidden border-2 border-secondary"
            >
              <img
                :src="event?.extendedProps.instructor.profile_photo_path"
                class="w-[calc(3rem-12px)] h-[calc(3rem-12px)]"
                v-if="event?.extendedProps.instructor.profile_photo_path"
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

        <div class="text-[0.8rem]">
          {{ event?.extendedProps.description }}
        </div>
        <div class="flex flex-row justify-center">
          <div
            class="border-2 border-secondary bg-secondary-content px-5 gap-5 py-1.5 rounded-xl flex flex-row justify-center text-[0.7rem]"
          >
            <span
              class="w-[60px] py-1 xl:w-[70px] text-center calendar-style-transition rounded-lg cursor-pointer"
              v-for="sliderOption in sliderButtons"
              @click="alterSliderButton(sliderOption.id)"
              :class="{
                'bg-secondary ': selectedSliderButton === sliderOption.id,
              }"
            >
              {{ sliderOption.value }}
            </span>
          </div>
        </div>
        <!-- confirmed/payroll ? -->
        <div class="flex flex-col gap-5">
          <span class="text-xs"
            >This session
            {{ getDiffToEndDate(event?.end).prepend }}
            <span class="font-bold">{{
              getDiffToEndDate(event?.end).append
            }}</span></span
          >
          <div class="flex gap-8 items-center">
            <label class="text-lg font-light w-[40%]" for="slct_confirm">
              Confirmed</label
            >
            <select
              name="confirmed"
              id="slct_confirm"
              class="bg-neutral-content px-2 py-1 rounded-2xl text-base-content"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div class="flex gap-8 items-center">
            <label class="text-lg font-light w-[40%]" for="slct_payroll">
              Payroll elligible</label
            >
            <select
              name="payroll"
              id="slct_payroll"
              class="bg-neutral-content px-2 py-1 rounded-2xl text-base-content"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <select
            class="bg-neutral-content px-4 py-3 rounded-2xl text-base-content w-full mt-3"
            name="completed"
            id="slct_completed"
          >
            <option value="complete">Completed</option>
          </select>
        </div>

        <!-- attendees -->
        <div class="mt-8">
          <span class="text-xl font-semibold"
            >Attendee(s) - {{ event?.extendedProps.attendees.length }}</span
          >
          <ul
            class="flex flex-col gap-3 w-full mt-4 !max-h-[18vh] overflow-y-scroll no-scrollbar"
          >
            <AttendeeListItem
              v-for="attendee in event?.extendedProps.users"
              :attendee="attendee"
            >
              <template #tertiary>
                <div class="flex gap-2">
                  <button
                    class="p-2 border-2 border-secondary fill-base-content rounded-xl"
                  >
                    <span class="block w-3">
                      <MessageIcon class="w-3 h-3" />
                    </span>
                  </button>
                  <button
                    class="p-2 border-2 border-secondary fill-base-content rounded-xl"
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
  eventIsLoading: {
    type: Boolean,
    default: true,
  },
});

const buttonChoices = ["is_over", "show", "personal", "physical"];

const selectedStatus = ref("is_over");
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
