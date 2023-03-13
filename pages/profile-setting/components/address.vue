<template>
  <div class="grid grid-cols-12 py-2">
    <div class="col-start-2 col-span-10 py-2">
      <div class="-mb-1.5"> Address </div>
      <input class="neutral-input"
             v-model="formAddress.address"
             @input="$emit('update-form-address', formAddress)"/>
    </div>
  </div>

  <!--   City, State, Zip code SECTION-->
  <div class="grid grid-cols-1 py-2">
    <div class="grid grid-cols-3 justify-items-center py-2">
      <div class="mb-5">
        <div class="-mb-1.5"> City </div>
        <input class="neutral-input"
               v-model="formAddress.city"
               @input="$emit('update-form-address', formAddress)"/>
      </div>

      <div class="mb-5">
        <div class="-mb-1.5"> State </div>
        <input class="neutral-input"
               v-model="formAddress.state"
               @input="$emit('update-form-address', formAddress)"/>
      </div>

      <div class="mb-5">
        <div class="-mb-1.5"> Zip code  </div>
        <input class="neutral-input"
               v-model="formAddress.zipcode"
               @input="$emit('update-form-address', formAddress)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

input {
  @apply h-9 rounded mt-3 w-full pl-2;
  min-width: 16rem;
}

input:focus {
  @apply outline-none;
}

.neutral-input {
  @apply bg-base-content/20;
}

input:hover {
  background-color: #0075C9;
}

</style>
<script>
export default {
  name: "profile-address-setting",
}
</script>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  formAddress: {
    type: Object,
  }
});


const emits = defineEmits(['update-form-address']);

const updateFormAddress = updatedField => {
  const updatedForm = { ...props.formAddress, ...updatedField }
  emits('update-form-address', updatedForm);
}

</script>

<style scoped>

</style>
