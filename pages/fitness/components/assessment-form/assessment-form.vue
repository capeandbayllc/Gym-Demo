<template>
  <form @submit.prevent="handleSubmit">
    <div class="bg-base-300 p-4 rounded-2xl border-secondary border">
      <h2 class="text-xl py-4">Fitness Assessment</h2>
      <div class="p-4 border border-primary-content rounded-2xl">
        <div class="mx-12 max-h-[24rem] overflow-y-auto pr-12">
          <h3 class="text-secondary text-lg font-semibold">
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
                pattern="mobile"
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
                pattern="city"
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
                pattern="state"
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
            <h3 class="text-secondary text-lg font-semibold">
              Physical Activity Readiness Questinnaire
            </h3>

            <Ynquestion
              v-for="(tup, idx) in physicalActivityQuestions"
              :key="idx"
              :model-value="form[tup.key]"
            />
          </div>
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
import { type IAssessmentFormData, assessmentFormDefaults } from "./helpers";
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
