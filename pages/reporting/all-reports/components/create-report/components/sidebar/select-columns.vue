<template>
  <div>
    <div class="px-5 pb-5 flex flex-col h-full">
      <div class="flex flex-col gap-2 border-b border-base-content/30 pb-2">
        <h5 class="text-xl font-semibold">Columns</h5>
        <div class="flex flex-col gap-3">
          <select-box
            :items="fieldOptions"
            :label="fieldOptions.find((e) => e.value == selectedField).label"
            :show-search="false"
            :show-clear-list="false"
            class="dark-input"
          ></select-box>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              class="dark-input h-[29px] pl-8 pr-2"
              placeholder="Search Fields"
              id="searchInput"
            />
            <label for="searchInput">
              <SearchIcon
                class="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer !h-[15px] mt-[1px]"
                @click="focusSearchInput"
              />
            </label>
          </div>
        </div>
        <div class="flex justify-between">
          <span>Leads</span>
          <button class="font-semibold text-base-content/50">Clear All</button>
        </div>
      </div>

      <div class="flex-grow overflow-y-auto my-2">
        <div
          v-for="(column, i) in actualContent"
          class="mb-2 flex items-center gap-[7px]"
        >
          <input type="checkbox" v-model="column.active" :id="i" />
          <button>
            <label :for="i">{{ column.label }}</label>
          </button>
        </div>
      </div>

      <div class="flex gap-3 border-t border-base-content/30 pt-3">
        <Button
          size="sm"
          class="normal-case border border-secondary"
          secondary
          @click="saveChanges"
        >
          Continue
        </Button>
        <Button
          size="sm"
          class="normal-case border-base-content/60"
          outline
          @click="emit('changeActualSection', 'Columns')"
        >
          Cancel
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dark-input {
  @apply border border-base-content/20 rounded-[5px] bg-neutral w-full placeholder:text-base-content outline-none;
}
::-webkit-scrollbar {
  @apply !block;
}
</style>

<script setup>
import { SearchIcon } from "@/components/icons";

const props = defineProps({
  columnsContent: {
    type: Array,
    default: [],
  },
  actualSection: {
    type: String,
    default: "",
  },
  actualSubSection: {
    type: String,
    default: "",
  },
});

const searchQuery = ref(null);

const actualContent = ref(null);

watchEffect(() => {
  if (props.actualSection == "SelectColumns")
    actualContent.value = JSON.parse(
      JSON.stringify(
        props.columnsContent.find(
          (content) => content.title == props.actualSubSection
        )?.items
      )
    );
});

const saveChanges = () => {
  let columnContent = props.columnsContent.find(
    (content) => content.title == props.actualSubSection
  )?.items;

  columnContent.forEach((item) => {
    const matchingItem = actualContent.value.find(
      (ac) => ac.label === item.label
    );
    item.active = matchingItem ? matchingItem.active : false;
  });

  emit("changeActualSection", "Columns");
};

const fieldOptions = ref([
  {
    value: "1",
    label: "All fields",
  },
]);

const selectedField = ref("1");

const emit = defineEmits(["changeActualSection"]);
</script>
