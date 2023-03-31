<template>
  <section
    class="grid grid-cols-3 gap-4 max-w-7xl px-8 bg-black py-8 rounded-b-3xl"
  >
    <TextField id="first-name" :required="true" label="first name" />
    <TextField id="middle-name" label="middle name" />
    <TextField id="last-name" label="last name" />
    <TextField id="dob" label="date of birth" />
    <TextField id="gender" label="gender" />
    <TextField id="username" label="username" />
    <TextField id="email" label="email" />
    <TextField id="email-personal" label="personal email" />
    <TextField id="mobile" label="Mobile" />
  </section>
</template>

<script setup>
import TextField from "./textfield.vue";
</script>
