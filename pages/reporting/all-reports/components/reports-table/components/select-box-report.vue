<template>
  <div
    ref="selectContentEl"
    :class="className"
    class="flex items-center w-full"
  >
    <button class="select-box-btn" :onClick="toggleCollapsed">
      {{ value ? selected : !isCollapsed && labelOpened ? labelOpened : label }}
      <select-box-icon :isCollapsed="isCollapsed" :color="color" />
    </button>
    <transition name="fade">
      <select-box-content
        class="!bg-secondary border-secondary px-3 !max-h-[350px]"
        v-if="!isCollapsed"
      >
        <div class="text-base-content gap-2 flex flex-col">
          <select-box
            :items="sortOptions"
            :bg-secondary-opened="false"
            :bg-gray-opened="true"
            :show-search="false"
            :showClearList="false"
            label="Sort Entire Table"
            class="bg-base-content/60 text-neutral/80 font-semibold rounded-lg !text-left"
          />
          <input
            type="text"
            class="rounded-lg w-full font-semibold tracking-normal p-2 focus:outline-none text-neutral"
            placeholder="Search"
          />
          <div class="">
            <div v-for="(option, i) in options" :key="i">
              <div class="option">
                <div class="white-circle"></div>
                {{ option.label }}
              </div>
            </div>
          </div>

          <Button
            size="sm"
            outline=""
            class="normal-case rounded-xl text-[12px] ml-auto"
            >Confirm</Button
          >
        </div>
      </select-box-content>
    </transition>
  </div>
</template>
<style scoped lang="postcss">
.option {
  @apply text-[14px] py-3 flex items-center;
  .white-circle {
    @apply min-w-[20px] w-[20px] h-[20px] rounded-full !bg-base-content/70 mr-2;
  }
}
.select-box-btn {
  @apply flex flex-row px-2 py-1 items-center justify-between transition-colors duration-300 w-full h-[29px] !border-0;
}
.select-box-btn.bg-secondary {
  @apply border-0;
}
</style>
<script>
export default {
  name: "select-box",
};
</script>
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
  options: {
    type: Array,
    default: [],
  },
  sortOptions: {
    type: Array,
    default: [],
  },
});

const selectContentEl = ref(null);
const isCollapsed = ref(true);
const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
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
