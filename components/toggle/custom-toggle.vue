<template>
  <div class="toggle-custom mb-2" :class="{ 'toggle-active': modelValue }">
    <div @click="toggle" class="circle"></div>
    <div @click="toggle" class="line"></div>
    <span @click="toggle">
      {{ title }}
    </span>
  </div>
</template>
<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: Boolean,
  title: String,
});

const modelValue = ref(false);
watchEffect(() => {
  modelValue.value = props.modelValue;
});

watchEffect(() => {
  if (props.modelValue || !props.modelValue)
    setTimeout(() => {
      if (props.modelValue != modelValue.value) {
        modelValue.value = props.modelValue;
      }
    }, 10);
});

const toggle = () => {
  modelValue.value = !modelValue.value;
};

watch(modelValue, (val) => {
  emit("update:modelValue", val);
});
</script>
