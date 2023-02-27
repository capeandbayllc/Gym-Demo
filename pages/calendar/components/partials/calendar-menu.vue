<template>
  <ul class="temp">
    <!-- list header -->
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-2xl font-bold">Calendars ({{ calendars.length }})</h3>

      <!-- button group -->
      <div class="flex gap-2">
        <!-- chevron btn -->
        <button class="fill-white p-2 w-8 rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M238 82.7l22.6 22.6 192 192L475.3 320 430 365.3l-22.6-22.6L238 173.3 68.6 342.6 46 365.3 .7 320l22.6-22.6 192-192L238 82.7z"
            />
          </svg>
        </button>
        <!-- actions button (new/subscribe) -->
        <button
          class="fill-white border-secondary hover:bg-secondary border-2 p-2 w-8 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- list items (calendars) -->
    <li
      class="flex items-center gap-2 my-2"
      v-for="cal in calendars"
      :key="cal.id"
    >
      <input type="checkbox" :name="cal.title" :id="'cal_' + cal.id" />
      <label :for="'cal_' + cal.id">{{ cal.title }}</label>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  calendars: {
    type: Array,
    default: null,
  },
});
</script>

<style scoped>
.temp {
}

input[type="checkbox"] {
  @apply rounded-md bg-white appearance-none m-0 h-5 w-5 border border-[#C0BDCC] outline-none;
  @apply focus:border;
}

input[type="checkbox"]:checked {
  @apply bg-secondary border-primary;
}

label {
  @apply text-lg font-bold capitalize;
}
</style>
