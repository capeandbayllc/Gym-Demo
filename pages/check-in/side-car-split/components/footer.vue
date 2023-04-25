<template>
  <div class="flex justify-between mt-5 mx-3">
    <div>
      <select
        v-model="selectedoption"
        name=""
        id=""
        class="text-base-content bg-secondary-focus px-4 py-1 border rounded-2xl"
      >
        <option value="default">Default</option>
        <option
          value="call"
          class="text-base-300"
          :selected="selectedType === 'call'"
        >
          Call Type
        </option>
        <option
          value="sms"
          class="text-base-300"
          :selected="selectedType === 'sms'"
        >
          SMS Type
        </option>
        <option
          value="email"
          class="text-base-300"
          :selected="selectedType === 'email'"
        >
          Email Type
        </option>
      </select>
    </div>
    <div class="flex justify-items-end space-x-4">
      <div
        class="cursor-pointer mt-1 hover:text-success transition-all duration-200"
        @click="$emit('close')"
      >
        Cancel
      </div>
      <div
        class="cursor-pointer mt-1 hover:text-success transition-all duration-200"
        @click="$emit('saveNow')"
      >
        Save
      </div>
      <div>
        <button
          class="bg-success border-[1px] border-success hover:bg-transparent transition duration-100 px-4 py-1 rounded-2xl"
          @click="$emit('callNow')"
        >
          {{ submitTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  submitTitle: {
    type: String,
  },
  selectedType: {
    type: String,
    default: "default",
  },
});

const selectedoption = ref(props.selectedType);
</script>
