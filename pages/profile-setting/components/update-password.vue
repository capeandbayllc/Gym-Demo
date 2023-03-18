<template>
  <div class="mx-auto mt-20 w-1/2 ">
    <div class="mb-5 ml-1">
      <h5 class="text-lg font-medium">Update Password</h5>
      <p>Ensure your account is using a long, random password to stay secure</p>
    </div>
    <div class="gradient-bg p-4 page-border">
      <div class="bg-black page-border">

        <div class="grid grid-cols-1 py-2">
          <div class="w-5/6 ml-auto mr-auto mt-2 mb-4">
            <div class="grid grid-cols-1 py-2 -ml-2 gap-10 lg:gap-10 md:gap-4">
              <div v-for="item in passwordFields" :key="item.key"
                   class="mb-1 col-span-4 w-full">
                <div class="mb-1.5">
                  <span class="font-light">{{ item.label }} </span>
                </div>
                <input :class="item.class" type="password" class="rounded-xl" v-model="form[item.key]"/>
              </div>
            </div>
          </div>
        </div>

        <!-- Save section -->
        <div class="grid grid-cols-1 pt-2 pb-8">
          <div class="grid grid-cols-1 justify-items-center">
            <div class="text-center">
              <Button ghost size="sm"
                  class="mr-2 capitalize hover:bg-transparent">
                <span class="text-light text-gray-500 hover:text-blue-400"
                      @click="resetForm()">Cancel</span>
              </Button>
              <Button
                  secondary
                  size="sm"
                  class="capitalize rounded-xl font-light"
                  @click="savePassword()">
                Save
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "update-password"
}
</script>

<style scoped>
.page-border {
  @apply border border-secondary rounded-2xl;
}

input {
  @apply h-9 w-full pl-2 min-w-min;
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

<script setup>
import {ref} from 'vue';

let form = {};
const initForm = () => {
  form.value = {
    ...form.value,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  console.log('form.value: ', form.value);
  return form.value;
};

form = ref(initForm());

let passwordInfo = {};

let passwordFields = [
  {
    key: 'currentPassword',
    label: 'Current Password',
    class: 'neutral-input rounded-xl',
    required: true
  },
  {
    key: 'newPassword',
    label: 'New Password',
    class: 'neutral-input rounded-xl',
    required: true,
  },
  {
    key: 'confirmPassword',
    label: 'Confirm Password',
    class: 'neutral-input rounded-xl',
    required: true
  },
];


let resetForm = () => {
  initForm();
};

const savePassword = () => {
  passwordInfo = form.value;
  console.log('password info: ', passwordInfo);
};

</script>
