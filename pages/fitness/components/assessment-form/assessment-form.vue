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
              v-model="form[kqp.key]"
              :key="idx"
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

          <h3 class="text-secondary font-semibold text-sm mb-4">
            For office use only.
          </h3>
          <div class="finalize grid grid-cols-[1fr_0.2fr] gap-6 pb-4">
            <CostTable v-model="priceTableSelections" />
            <div
              class="grid grid-cols-2 min-w-[16rem] gap-4 p-2 border-2 border-secondary rounded-xl"
            >
              <div>
                <label for="total-due">Total Due:</label>
                <div
                  class="mt-2 before:content-['$'] before:absolute before:top-1/2 before:-translate-y-1/2 before:ml-2 before:opacity-60 before:text-base relative"
                >
                  <input
                    class="bg-secondary"
                    v-model="employeeInput.total"
                    type="number"
                    name="total due"
                    id="total-due"
                  />
                </div>
              </div>

              <fieldset>
                <legend>Paid By:</legend>
                <div class="flex items-center gap-2">
                  <input
                    value="cash"
                    type="radio"
                    name="cash"
                    id="payment-method-cash"
                    v-model="employeeInput.payment_method"
                  />
                  <label for="payment-method-cash">Cash</label>
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <input
                    value="credit_card"
                    type="radio"
                    name="credit card"
                    id="payment-method-cc"
                    v-model="employeeInput.payment_method"
                  />
                  <label for="payment-method-cc">Credit Card</label>
                </div>
              </fieldset>

              <div>
                <label for="date-paid">Date Paid:</label>
                <input
                  v-model="employeeInput.date_paid"
                  class="min-w-[5rem]"
                  type="text"
                  name="date paid"
                  id="date-paid"
                />
              </div>

              <div>
                <label for="staff-initials">Staff Initials:</label>
                <input
                  v-model="employeeInput.staff_initials"
                  type="text"
                  name="staff initials"
                  id="staff-initials"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- form actions -->
      <div class="flex justify-end gap-4 pr-12 py-6">
        <button type="button">Cancel</button>
        <button class="btn btn-sm text-primary-content" type="submit">
          save
        </button>
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

button[type="submit"] {
  @apply bg-secondary px-2 py-1 rounded-md;
}

input[type="text"],
input[type="email"],
input[type="mobile"],
input[type="number"] {
  @apply rounded-xl p-2 transition-all duration-75 mt-2 w-full outline-none border-2 border-transparent bg-base-content/20 focus-within:bg-base-content/30 focus-within:border-secondary min-w-[16rem];
}

.finalize input[type="text"],
.finalize input[type="number"] {
  @apply min-w-[4rem] bg-secondary text-primary-content/60;
  @apply focus-within:border-primary-content focus-within:text-primary-content;
  @apply selection:bg-neutral;
}

.finalize input[type="number"] {
  @apply pl-4 m-0;
}

.input-group {
  @apply flex flex-col whitespace-nowrap;
}

hr {
  @apply border-secondary my-12;
}

input[type="radio"] {
  @apply rounded-md bg-primary-content appearance-none m-0 h-5 w-5 border border-primary-content/50 outline-none;
  @apply focus:border;
}

input[type="radio"]:checked {
  @apply bg-secondary border-primary;
}

label {
  @apply capitalize;
}
</style>

<script setup lang="ts">
import {
  type IAssessmentFormData,
  assessmentFormDefaults,
  physicalActivityQuestions,
  wellnessPolicies,
  sessionSelectionDefault,
  ISelectionState,
  IEmployeeSection,
  employeeSectionDefaults,
} from "./helpers";
import Ynquestion from "./ynquestion.vue";
import CostTable from "./cost-table.vue";

interface Props {
  data: IAssessmentFormData;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => assessmentFormDefaults,
});

const form: Ref<IAssessmentFormData> = ref(props.data);
const priceTableSelections: Ref<ISelectionState> = ref(sessionSelectionDefault);
const employeeInput: Ref<IEmployeeSection> = ref(employeeSectionDefaults);

function handleSubmit() {
  let fullForm = { ...form.value, ...employeeInput.value };
  console.log("assessment submitted", fullForm);
}
</script>
