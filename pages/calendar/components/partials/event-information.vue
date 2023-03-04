<template>
  <section
    class="max-w-3xl w-full bg-neutral border-2 border-secondary p-4 h-full rounded-md pointer-events-auto"
  >
    <SectionHeader title="Event Title">
      <template #subtitle>
        <div class="mt-2 flex gap-4 items-center">
          <span>Thursday, January 5</span>
          <span class="h-2 w-2 bg-white rounded-full"></span>
          <span>00:00 AM - 00:00 AM</span>
        </div>
      </template>
    </SectionHeader>

    <!-- event status? idk -->
    <div class="mt-6">
      <BtnGroup v-model="selectedStatus" :choices="buttonChoices" />
    </div>

    <!-- who/where -->
    <div class="flex gap-8 mt-8">
      <div class="flex gap-4">
        <div class="w-12 h-12 bg-white rounded-full"></div>
        <div class="flex flex-col">
          <span class="text-xs text-opacity-50 text-white">Instructor</span>
          <span class="text-xl">Bryan Andrews</span>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-12 h-12 bg-white rounded-full"></div>
        <div class="flex flex-col">
          <span class="text-xs text-opacity-50 text-white">Address</span>
          <span class="text-xl">Tampa 657</span>
        </div>
      </div>
    </div>

    <!-- confirmed/payroll ? -->
    <div class="flex flex-col gap-4 mt-8">
      <span class="text-xs"
        >This session finishes <span class="font-bold">Today</span></span
      >
      <div class="flex gap-24">
        <div class="flex gap-8 items-center">
          <label class="text-xl font-semibold" for="slct_confirm">
            Confirmed</label
          >
          <select
            name="confirmed"
            id="slct_confirm"
            class="text-black p-2 rounded-md"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <div class="flex gap-8 items-center">
          <label class="text-xl font-semibold" for="slct_payroll">
            Payroll elligible</label
          >
          <select
            name="payroll"
            id="slct_payroll"
            class="text-black p-2 rounded-md"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      </div>
    </div>

    <!-- completed?? idk.. status again or something -->
    <div class="mt-8">
      <select
        class="w-full text-black p-2 rounded-md"
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
                class="p-2 border-2 border-secondary fill-white rounded-md"
              >
                <span class="block w-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1z"
                    />
                  </svg>
                </span>
              </button>
              <button
                class="p-2 border-2 border-secondary fill-white rounded-md"
              >
                <span class="block w-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <button class="fill-white flex gap-2 items-center mt-2">
              <span>History</span>
              <span class="block w-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
                  />
                </svg>
              </span>
            </button>
          </template>
        </AttendeeListItem>
      </ul>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import BtnGroup from "./btn-group.vue";
import AttendeeListItem from "./attendee-list-item.vue";

const props = defineProps({
  event: {
    type: [Object, null],
    default: null,
  },
});

const buttonChoices = ["is_over", "show", "personal", "physical"];

const selectedStatus = ref("is_over");
</script>
