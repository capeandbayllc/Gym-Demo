<template>
  <button
    @click="$emit('click')"
    class="relative z-[1] w-full max-h-[4rem] h-full rounded-3xl border-2 border-secondary group"
  >
    <!-- green back -->
    <div
      class="bg-success absolute h-full w-full -z-[1] top-0 left-0 right-0 bottom-0 rounded-3xl"
    ></div>

    <!-- blue back -->
    <div
      class="bg-secondary rounded-3xl absolute h-full w-full -z-[0] scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out top-0 left-0 right-0 bottom-0"
    ></div>

    <div class="relative">
      <span
        class="h-6 w-6 absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-500 translate-x-8 group-hover:translate-x-36 group-hover:fill-base-content"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
          />
        </svg>
      </span>

      <span
        class="text-base-300 text-2xl uppercase font-semibold whitespace-nowrap group-hover:text-base-content -translate-x-12 group-hover:-translate-x-20 right-0 absolute top-1/2 -translate-y-1/2 transition-all duration-500"
        >Check in</span
      >
    </div>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
</script>
