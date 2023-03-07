<template>
  <div class="w-40">
    <button class="bg-blue-500 h-10" @click="toggleCollapsed">
      {{ name_of_button }}
      <select-box-icon
          color=""
          :isCollapsed="isCollapsed"
      />
    </button>
    <div v-if="isCollapsed">
      <select multiple >
        <option class="rounded-md text-black py-4 px-6" v-for="option in options" :value="option.label">{{ option.label }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SelectBoxIcon from "~/components/select-box/select-box-icon.vue";
import Arrow from "~/components/multiple_select/arrow.vue";

export default {
  components: {SelectBoxIcon, Arrow },
  setup() {
    const isCollapsed = ref(true);

    const toggleCollapsed = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return { isCollapsed, toggleCollapsed };
  },
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
      validator: (value) =>
          value.every(
              (option) =>
                  typeof option.label === "string" &&
                  typeof option.value !== "undefined"
          ),
    },
    name_of_button: {
      type: String,
      default: "Select...",
    },
  },
};
</script>

<style scoped>
button {
  @apply flex flex-row border rounded px-2 py-1 items-center justify-between w-full;
}

select {
  @apply cursor-pointer py-2 px-4 absolute z-20 bg-base-content text-neutral border rounded text-sm text-left w-40;
}

select:focus {
  outline: none;
}
</style>
