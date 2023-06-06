<template>
  <div
    ref="selectContentEl"
    :class="className"
    class="flex items-center w-full"
  >
    <button class="select-box-btn" :onClick="disabled ? null : toggleCollapsed">
      {{ value ? selected : !isCollapsed && labelOpened ? labelOpened : label }}
      <div class="flex items-center justify-end">
        <div v-if="countCircle" class="count-circle">
          <span>
            {{ countCircle }}
          </span>
        </div>
        <select-box-icon :isCollapsed="isCollapsed" :color="color" />
      </div>
    </button>
    <transition name="fade">
      <select-box-content
        class="max-h-[200px] !rounded-b-xl !rounded-t-[0px] !top-[-2px] !pt-[2px] !p-0"
        :class="{
          '!bg-neutral border-neutral': grayContent,
          '!bg-secondary border-secondary': !grayContent,
          '!overflow-y-hidden': !scrollable,
          '!overflow-y-scroll': scrollable,
        }"
        v-if="!isCollapsed"
      >
        <div class="text-base-content gap-2 flex flex-col">
          <div class="">
            <div v-for="(item, i) in items" :key="i">
              <div
                class="option"
                @click="selectValue(item.value)"
                :class="{
                  'hover:bg-secondary': grayContent,
                  'hover:bg-base-300': !grayContent,
                  'bg-secondary bg-base-300': item.label == selected,
                }"
              >
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </select-box-content>
    </transition>
  </div>
</template>
<style scoped lang="postcss">
.count-circle {
  @apply w-[22px] h-[22px] text-[12px] flex items-center justify-center rounded-full bg-neutral ml-auto z-[21];
}
.option {
  @apply text-[14px] my-1 py-2 px-3 flex items-center;
}
.select-box-btn {
  @apply flex flex-row px-2 py-1 items-center justify-between transition-colors duration-300 w-full h-[29px] !border-0;
}
.select-box-btn.bg-secondary {
  @apply border-0;
}

::-webkit-scrollbar {
  @apply hidden;
}
</style>
<script setup>
import SelectBoxIcon from "~/components/select-box/select-box-icon.vue";
import SelectBoxContent from "~/components/select-box/SelectBoxContent.vue";

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
  value: {
    type: String,
  },
  labelOpened: {
    type: String,
    default: "",
  },
  grayContent: {
    type: Boolean,
    default: false,
  },
  countCircle: {
    type: Number,
    default: null,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const selectContentEl = ref(null);
const isCollapsed = ref(true);
const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};

watchEffect(() => {
  if (props.disabled) {
    isCollapsed.value = true;
  }
});

const selectValue = (item) => {
  emit("onChange", item);
  toggleCollapsed();
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
    return (
      "select-box-wrapper " +
      props.class +
      additional +
      (props.disabled ? " text-base-content/50" : null)
    );
  },
});

const selected = computed(
  () => props.items?.filter((item) => item.value === props.value)[0]?.label
);
</script>
