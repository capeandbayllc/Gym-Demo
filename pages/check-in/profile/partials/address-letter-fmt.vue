<template>
  <div>
    <TextField id="addr-line" label="address" />

    <div class="flex gap-8 mt-8">
      <TextField id="city" label="city" />
      <TextField id="state" label="state" />
      <TextField id="zip" label="zip code" />
    </div>
  </div>
</template>

<script setup>
import TextField from "./textfield.vue";
</script>
