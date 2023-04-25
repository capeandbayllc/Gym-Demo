<template>
  <custom-cell />
</template>
<script setup>
import { h } from "vue";
const props = defineProps({
  value: {
    default: "",
  },
  data: {
    type: Object,
    default: {},
  },
  renderer: {
    type: Function,
  },
});
const customCell = () =>
  props.renderer
    ? props.renderer(props.value || props.data)
    : h("div", { class: "text-center" }, [props.value]);
</script>
