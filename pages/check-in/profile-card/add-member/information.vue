<template>
  <simple-card class="text-center p-4 w-[450px]">
    <h2 class="text-lg font-semibold my-2 mb-6">
      Please enter your information below:
    </h2>
    <input
      class="gr-base-textfield gr-secondary-textfield"
      type="text"
      v-model="inputValue"
    />
  </simple-card>
</template>
<script setup>
const inputValue = ref("kevinbucanan@gmail.com");
</script>
