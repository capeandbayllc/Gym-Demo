<template>
  <div
    ref="selectContentEl"
    :class="className"
    class="flex items-center w-full"
  >
    <button
      class="select-box-btn"
      :class="{
        'bg-secondary': secondary,
        'bg-transparent': transparent && !secondary,
        'rounded-t': !isCollapsed && !roundedXl,
        'rounded-t-lg': !isCollapsed && roundedXl,
        '!bg-base-100 text-white': !isCollapsed && bgGrayOpened,
        'select-box-btn-primary': !isCollapsed && bgSecondaryOpened,
        rounded: isCollapsed,
        [classButton]: classButton,
      }"
      :onClick="toggleCollapsed"
    >
      {{ value ? selected : !isCollapsed && labelOpened ? labelOpened : label }}
      <select-box-icon :isCollapsed="isCollapsed" :color="color" />
    </button>
    <transition name="fade">
      <select-box-content v-if="!isCollapsed">
        <div class="select-box-content-scrollable">
          <select-box-search-input
            v-if="showSearch"
            :secondary="false"
            :placeholder="placeholderSearch"
            size="xs"
          ></select-box-search-input>
          <select-box-item
            v-for="item in items"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            :selected="item.value === value"
            :onClick="onChange"
          />
          <p
            class="select-box-clear-btn"
            v-if="showClearList"
            :onClick="clearList"
          >
            Clear List
          </p>
        </div>
        <slot class="select-box-clear-btn"></slot>
      </select-box-content>
    </transition>
  </div>
</template>
<style lang="postcss">
.select-box-wrapper {
  @apply relative min-w-fit;
}
.select-box-btn {
  @apply flex flex-row px-2 py-1 items-center justify-between transition-colors duration-300 w-[165px] h-[29px] !border-0;
}

.select-box-filter-size {
  @apply w-[165px] h-[29px];
}

.select-box-clear-btn {
  @apply text-right font-medium mr-3 text-sm cursor-pointer;
}
.select-box-btn.bg-secondary {
  @apply border-0;
}

.btn-xs {
  @apply h-[1.5rem];
}
.btn-sm {
  @apply h-[2rem];
}
.btn-lg {
  @apply h-[4rem];
}

.select-box-btn-primary {
  @apply bg-secondary text-white;
}

.fade-enter-active,
.fade-leave-active {
  @apply opacity-100 duration-300 transition;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.select-box-content-scrollable {
  @apply overflow-y-scroll max-h-[200px] py-2;
}
</style>
<script>
export default {
  name: "select-box",
};
</script>
<script setup>
import { ref, computed } from "vue";
import SelectBoxIcon from "./select-box-icon.vue";
import SelectBoxContent from "./SelectBoxContent.vue";
import SelectBoxItem from "./SelectBoxItem.vue";

const emit = defineEmits(["onChange"]);

const props = defineProps({
  label: {
    type: String,
    default: "Select...",
  },
  placeholderSearch: {
    type: String,
    default: "Search",
  },
  items: {
    type: Array,
    default: [],
  },
  bgSecondaryOpened: {
    type: Boolean,
    default: true,
  },
  bgGrayOpened: {
    type: Boolean,
    default: false,
  },
  classButton: {
    type: String,
    default: "",
  },
  value: {
    type: String,
  },
  color: {
    type: String,
  },
  class: {
    type: String,
    default: "",
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: true,
  },
  classOpened: {
    type: String,
    default: "",
  },
  labelOpened: {
    type: String,
    default: "",
  },
  showSearch: {
    type: Boolean,
    default: true,
  },
  showClearList: {
    type: Boolean,
    default: true,
  },
  roundedXl: {
    type: Boolean,
    default: false,
  },
});

const selectContentEl = ref(null);
const isCollapsed = ref(true);
const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};

const clearList = () => {
  toggleCollapsed();
  emit("onChange", "");
};

const onChange = (value) => {
  toggleCollapsed();
  emit("onChange", value);
};

const handleOutClick = (e) => {
  if (!isCollapsed || !selectContentEl.value) return;
  console.log("ELE", selectContentEl.value);
  if (!selectContentEl.value.$el.contains(e.target)) {
    toggleCollapsed();
  }
};

onMounted(() => {
  if (props.closeOnOutclick) {
    window.addEventListener("click", handleOutClick, true);
  }
});

onUnmounted(() => {
  window.removeEventListener("click", handleOutClick, true);
});

const className = computed({
  get() {
    let additional = isCollapsed.value ? " collapsed" : "  ";
    return "select-box-wrapper " + props.class + additional;
  },
});

const selected = computed(
  () => props.items?.filter((item) => item.value === props.value)[0]?.label
);
</script>
