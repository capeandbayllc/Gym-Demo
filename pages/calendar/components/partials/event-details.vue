<template>
  <section
    class="bg-neutral py-4 px-8 rounded-md border-2 border-secondary max-w-2xl w-full"
  >
    <SectionHeader title="Body by Bryan">
      <template #subtitle>
        <div slopt class="mt-2 flex gap-4 items-center">
          <span>Thursday, January 5</span>
          <span class="h-2 w-2 bg-white rounded-full"></span>
          <span>00:00 AM - 00:00 AM</span>
        </div>
      </template>
    </SectionHeader>
    <!-- attendees? -->
    <ul class="mt-8 flex flex-col justify-center gap-4">
      <li class="flex gap-6 text-xl">
        <div class="w-6 h-6 rounded-full bg-white"></div>
        <span>Bryan Andrews</span>
      </li>
      <li class="flex gap-6 text-xl">
        <div class="w-6 h-6 rounded-full bg-white"></div>
        <span>Tampa 675</span>
      </li>
    </ul>
    <div class="flex flex-col gap-2 mt-4">
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        architecto. Pariatur optio perferendis molestiae ad, tempora animi ipsa
        voluptas tempore saepe asperiores ducimus nihil voluptatum.</span
      >
      <button class="underline self-end">See more</button>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
</script>
