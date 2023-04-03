<template>
  <div>
    <TextField
      v-model="localValue['address1']"
      id="addr-line"
      label="address"
    />

    <div class="flex gap-8 mt-8">
      <TextField v-model="localValue['city']" id="city" label="city" />
      <TextField v-model="localValue['state']" id="state" label="state" />
      <TextField v-model="localValue['zip']" id="zip" label="zip code" />
    </div>
  </div>
</template>

<script setup>
import TextField from "./textfield.vue";

const emit = defineEmits(["update:modelValue", "update:model-value"]);

const props = defineProps({
  modelValue: {
    type: Object,
    default: {
      address1: "",
      city: "",
      state: "",
      zip: "",
    },
  },
});

const localValue = ref(props.modelValue);

watch(localValue, () => emit("update:modelValue", localValue.value));
</script>
