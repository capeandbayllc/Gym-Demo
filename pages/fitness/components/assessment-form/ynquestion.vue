<template>
  <fieldset class="flex items-center py-2 gap-4">
    <div class="flex items-center gap-2">
      <input
        type="radio"
        :name="question"
        id="yes"
        value="yes"
        v-model="localValue"
      />
      <label for="yes">Yes</label>
    </div>
    <div class="flex items-center gap-2">
      <input
        type="radio"
        :name="question"
        id="no"
        value="no"
        v-model="localValue"
      />
      <label for="no">no</label>
    </div>
    <p class="ml-4">{{ question }}</p>
  </fieldset>
</template>

<style scoped lang="postcss">
input[type="radio"] {
  @apply rounded-md bg-primary-content appearance-none m-0 h-5 w-5 border border-primary-content/50 outline-none;
  @apply focus:border;
}

input[type="radio"]:checked {
  @apply bg-secondary border-primary;
}

label {
  @apply capitalize;
}
</style>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  question: string;
}

const emit = defineEmits(["update:modelValue", "update:model-value"]);

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => "",
  question: () => "default question",
});

const localValue: Ref<string> = ref(props.modelValue);

watch(localValue, () => emit("update:modelValue", localValue.value));
</script>
