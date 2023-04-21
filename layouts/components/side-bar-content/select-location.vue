<template>
  <div :class="className" class="flex items-center w-32 col-start-1 col-span-4 ">
    <button
        class="select-box-btn btn-test rounded-lg bg-[#0075C9]"
        :class="{
                'rounded-t': !isCollapsed,
                'rounded': isCollapsed
            }"
        :onClick="toggleCollapsed"
    >
      {{ value ? selected : (!isCollapsed && labelOpened ? labelOpened : label)  }}
      <select-box-icon
          :isCollapsed="isCollapsed"
          :color="color"
      />
    </button>

    <transition name="fade">
      <select-box-content v-if="!isCollapsed">
        <select-box-search-input
                                 :secondary="false"
                                 :placeholder="Search"
                                 size="xs"
                                 @update:modelValue="updateSearchTerm"
        ></select-box-search-input>
        <select-box-item
            v-for="item in items"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            :selected="item.value === value"
            :onClick="onChange"
        />
<!--        <p class="select-box-clear-btn" v-if="showClearList" :onClick="clearList">Clear List</p>-->
      </select-box-content>
    </transition>

  </div>
</template>

<style lang="postcss">
.select-box-wrapper {
  @apply relative min-w-fit;
}
.select-box-btn {
  @apply flex flex-row border px-2 py-1 items-center justify-between transition-colors duration-300 w-full h-[29px];
}

.select-box-filter-size{
  @apply w-[165px] h-[29px];
}

.select-box-clear-btn {
  @apply text-right font-medium mr-3 text-sm cursor-pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

<script>
export default {
  name: "select-location"
}
</script>


<script setup>
import { ref, computed } from "vue";
import SelectBoxIcon from "~~/components/select-box/select-box-icon.vue";
import SelectBoxContent from "~~/components/select-box/SelectBoxContent.vue";
import SelectBoxItem from "~~/components/select-box/SelectBoxItem.vue";

const emit = defineEmits(['onChange']);

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  label: {
    type: String
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
  classOpened: {
    type: String,
    default: "",
  },
  labelOpened: {
    type: String,
    default: "",
  },
  // showClearList:{
  //   type: Boolean,
  //   default: true,
  // },
});

const selectContentEl = ref(null);
const isCollapsed = ref(true);
const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};

const clearList = () => {
  toggleCollapsed();
  emit('onChange', '');
};

const onChange = (value) => {
  toggleCollapsed();
  console.info('value: ', value);
  emit('onChange', value);
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
