<template>
  <section
    class="max-w-3xl w-full bg-neutral border-2 border-secondary p-4 h-full rounded-md"
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
        <li
          class="grid py-2 px-2 grid-cols-[5rem_1fr_5rem] items-center w-full bg-[#18203A] rounded-md border-2 border-[#073A76]"
        >
          <!-- person image -->
          <div class="p-4">
            <span class="w-12 h-12 bg-white rounded-full block"></span>
          </div>

          <!-- name/email/phone -->
          <div class="flex flex-col text-sm">
            <span>Person's Name</span>
            <span>Email</span>
            <span>Phone</span>
          </div>

          <!-- end buttons and history -->
          <div>
            <div class="flex gap-2">
              <button>sms</button>
              <button>email</button>
            </div>
            <button>History</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import BtnGroup from "./btn-group.vue";

const props = defineProps({
  event: {
    type: [Object, null],
    default: null,
  },
});

const buttonChoices = ["is_over", "show", "personal", "physical"];

const selectedStatus = ref("is_over");
</script>
