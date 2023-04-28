<template>
  <div
    class="employee-signin border border-[#0075c9] p-3 rounded-[19px] max-w-[472px] mx-auto py-6"
  >
    <form @submit.prevent="submitSignin" class="px-12 flex flex-col gap-3">
      <!-- username -->
      <label class="text-[15px]" for="employeeID"> Employee ID* </label>
      <input
        id="employeeID"
        type="number"
        placeholder="# 123456789"
        required
        v-model="employeeID"
      />

      <!-- password -->
      <label class="mt-4 text-[15px]" for="password"> Password* </label>
      <div class="relative">
        <input
          id="password"
          :type="passwordInputType"
          class="w-full"
          placeholder="Password"
          required
          v-model="password"
        />

        <!-- reveal password -->
        <div
          class="absolute top-0 right-0 h-full flex flex-col justify-center mr-4"
        >
          <button
            :class="{
              'pass-visible': passwordInputType === 'text',
              'pass-hidden': passwordInputType === 'password',
            }"
            class="transition-all"
            type="button"
            @click="handleTogglePasswordInputType"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none"
              width="14.997"
              height="12.998"
              viewBox="0 0 14.997 12.998"
            >
              <path
                id="icon_view_password"
                data-name="icon view password"
                d="M1718.325,623.832a.573.573,0,0,1-.066-.707l.022-.03,10.821-11.133a.191.191,0,0,0,.033-.044.251.251,0,0,0,.037-.045l.688-.707a.551.551,0,0,1,.394-.165.537.537,0,0,1,.385.164.566.566,0,0,1,0,.8l-1.331,1.37a11.308,11.308,0,0,1,2.634,3.945.6.6,0,0,1,0,.444c-1.569,3.755-4.355,5.992-7.456,5.992h-.008a6.73,6.73,0,0,1-3.958-1.34l-1.42,1.46a.54.54,0,0,1-.388.165A.519.519,0,0,1,1718.325,623.832Zm4.511-3.847a2.883,2.883,0,0,0,4.057-.772,3.017,3.017,0,0,0,.511-1.714,3.094,3.094,0,0,0-.5-1.694l-.8.824a1.925,1.925,0,0,1,.205.87,1.851,1.851,0,0,1-1.821,1.877,1.777,1.777,0,0,1-.849-.21Zm-5.8-2.262a.581.581,0,0,1,0-.443c1.566-3.75,4.353-5.985,7.448-5.985h.006a6.533,6.533,0,0,1,3,.738l-2.442,2.515a3.315,3.315,0,0,0-.557-.053,2.969,2.969,0,0,0-2.925,3.012,3.562,3.562,0,0,0,.051.572l-2.708,2.786A12.149,12.149,0,0,1,1717.031,617.723Z"
                transform="translate(-1716.987 -611)"
                fill="#c0bdcc"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- filter does not work on safari -->
      <button
        id="submitbtn_disabled"
        class="w-full mt-4 relative z-10"
        type="submit"
      >
        Sign in
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["submit"]);

// data
const employeeID = ref("");
const password = ref("");
const passwordInputType = ref("password");

// Methods
const handleTogglePasswordInputType = () => {
  passwordInputType.value =
    passwordInputType.value === "password" ? "text" : "password";
};
const submitSignin = () => {
  emit("submit", true);
};
</script>
<style>
.employee-signin input {
  @apply bg-base-300 outline-none;
  @apply bg-[#0075c9] bg-opacity-30 transition-colors duration-300 rounded-[20px] px-4 py-2 h-[50px] text-opacity-50 text-white;
  @apply active:bg-secondary active:text-white;
  @apply focus-within:bg-secondary focus-within:text-white focus-within:text-opacity-100;
}

.employee-signin button[type="submit"] {
  @apply bg-black py-2 capitalize rounded-[20px] h-[56px] border border-white transition-colors duration-300;
  @apply hover:bg-secondary hover:border-secondary;
  -webkit-transform: translate3d(0, 0, 0);
  box-shadow: 0 0px 40px rgba(255, 255, 255, 0.2);
}
</style>
