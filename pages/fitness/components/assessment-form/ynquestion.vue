<template>
  <div>
    <label for="yes">Yes</label>
    <input
      type="checkbox"
      name="yes"
      id="yes"
      :checked="localValue === Boolean(true)"
    />
  </div>
  <div>
    <label for="no">no</label>
    <input
      type="checkbox"
      name="no"
      id="no"
      :checked="localValue === Boolean(false)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: boolean | null;
  question?: string;
}

const emit = defineEmits(["update:modelValue", "update:model-value"]);

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => null,
  question: () => "",
});

const localValue: Ref<boolean | null> = ref(props.modelValue);

watch(localValue, () => emit("update:modelValue", localValue.value));
</script>
