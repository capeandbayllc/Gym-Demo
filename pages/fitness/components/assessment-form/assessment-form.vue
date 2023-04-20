<template>
  <form @submit.prevent="handleSubmit">
    <div class="bg-base-300 p-4 rounded-2xl border-secondary border max-w-5xl">
      <h2 class="text-xl py-4">Fitness Assessment</h2>
      <div class="p-4 border border-primary-content rounded-2xl">
        <div class="mx-12 max-h-[24rem] overflow-y-auto pr-12">
          <h3 class="text-secondary text-lg font-semibold py-4">
            Contact Information
          </h3>

          <!-- Basic info -->

          <div class="py-2 grid grid-cols-3 gap-x-6 gap-y-10">
            <div class="input-group group">
              <label class="gr-base-label" for="first-name">first name</label>
              <input
                v-model="form.first_name"
                type="text"
                name="first name"
                id="first-name"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="middle-name">middle name</label>
              <input
                v-model="form.middle_name"
                type="text"
                name="middle name"
                id="middle-name"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="last-name">last name</label>
              <input
                v-model="form.last_name"
                type="text"
                name="last name"
                id="last-name"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="dob">date of birth</label>
              <input
                v-model="form.date_of_birth"
                type="text"
                name="date of birth"
                id="dob"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="gender">gender</label>
              <input
                v-model="form.gender"
                type="text"
                name="gender"
                id="gender"
                class="group-hover:bg-secondary"
              />
            </div>
            <div class="input-group group">
              <label class="gr-base-label" for="email">email</label>
              <input
                v-model="form.email"
                type="email"
                name="email"
                id="email"
                pattern="email"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="p-email">personal email</label>
              <input
                v-model="form.personal_email"
                type="email"
                name="personal email"
                id="p-email"
                pattern="email"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="mobile">mobile</label>
              <input
                v-model="form.mobile"
                type="mobile"
                name="mobile"
                id="mobile"
                pattern="tel"
                class="group-hover:bg-secondary"
              />
            </div>
          </div>

          <!-- Address -->

          <div class="input-group group py-10">
            <label class="gr-base-label" for="address">Address</label>
            <input
              v-model="form.address"
              type="text"
              name="address"
              id="address"
              pattern="address"
              class="group-hover:bg-secondary"
            />
          </div>

          <div class="py-2 grid grid-cols-3 gap-x-6">
            <div class="input-group group">
              <label class="gr-base-label" for="city">city</label>
              <input
                v-model="form.city"
                type="text"
                name="city"
                id="city"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="state">state</label>
              <input
                v-model="form.state"
                type="text"
                name="state"
                id="state"
                class="group-hover:bg-secondary"
              />
            </div>

            <div class="input-group group">
              <label class="gr-base-label" for="zip">zip</label>
              <input
                v-model="form.zip"
                type="text"
                name="zip"
                id="zip"
                pattern="zip"
                class="group-hover:bg-secondary"
              />
            </div>
          </div>
          <hr />

          <!-- Physical ability -->
          <div>
            <h3 class="text-secondary text-lg font-semibold pb-4">
              Physical Activity Readiness Questinnaire
            </h3>

            <Ynquestion
              v-for="(kqp, idx) in physicalActivityQuestions"
              :key="idx"
              :model-value="form[kqp.key]"
              :question="kqp.question"
            />
          </div>

          <p class="text-secondary font-semibold text-xs mt-8">
            if you answered "yes" to any of these questions, call your personal
            physician or healthcare provider before increasing your physical
            activity level.
          </p>

          <hr />
          <h3 class="text-secondary text-lg font-semibold pb-4">
            Wellness Center Policies
          </h3>
          <ul
            class="grid grid-cols-2 gap-x-8 gap-y-4 list-disc marker:text-secondary marker:text-xl mx-4 px-4"
          >
            <li v-for="(policy, idx) in wellnessPolicies" :key="idx">
              {{ policy }}
            </li>
          </ul>
          <p class="text-secondary font-semibold text-xs mt-8 text-center py-6">
            I state that I have read this document, agree with its terms and am
            signing this contract voluntarily.
          </p>

          <div class="grid grid-cols-[1fr_0.2fr] gap-6">
            <div class="input-group group">
              <label class="gr-base-label" for="signature">signature</label>
              <input
                v-model="form.signature"
                type="text"
                name="signature"
                id="signature"
                class="group-hover:bg-secondary"
              />
            </div>
            <div class="input-group group">
              <label class="gr-base-label" for="date">date</label>
              <input
                v-model="form.date"
                type="text"
                name="date"
                id="date"
                class="group-hover:bg-secondary"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>

      <!-- form actions -->
      <div class="flex justify-end gap-4 pr-12 py-6">
        <button type="button">cancel</button>
        <button type="submit">save</button>
      </div>
    </div>
  </form>
</template>

<style scoped lang="postcss">
::-webkit-scrollbar {
  @apply w-2 py-4;
}

::-webkit-scrollbar-track {
  @apply bg-gray-400/10;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary outline-secondary outline-4 outline;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-secondary/60 outline-secondary/60;
}

input[type="text"],
input[type="email"],
input[type="mobile"] {
  @apply gr-base-textfield gr-neutral-textfield min-w-[16rem];
}

.input-group {
  @apply flex flex-col whitespace-nowrap;
}

hr {
  @apply border-secondary my-12;
}
</style>

<script setup lang="ts">
import {
  type IAssessmentFormData,
  assessmentFormDefaults,
  physicalActivityQuestions,
  wellnessPolicies,
} from "./helpers";
import Ynquestion from "./ynquestion.vue";

interface Props {
  data: IAssessmentFormData;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => assessmentFormDefaults,
});

const form: Ref<IAssessmentFormData> = ref(props.data);

function handleSubmit() {
  console.log("assessment submitted", form.value);
}
</script>
