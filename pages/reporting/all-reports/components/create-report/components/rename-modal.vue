<template>
  <div class="rename-modal-content relative">
    <button @click="emit('close')" class="absolute top-[15px] right-[20px]">
      <close-me size="big" />
    </button>
    <div class="pb-5">
      <h3 class="text-center text-xl font-semibold">Rename Report</h3>
    </div>

    <input
      type="text"
      class="dark-input"
      placeholder="Enter a name"
      maxlength="22"
      v-model="inputReportName"
    />

    <div class="flex justify-center sm:justify-end gap-4 pt-10">
      <Button
        size="sm"
        outline
        class="normal-case rounded-lg hover:text-secondary"
        @click="emit('close')"
      >
        Cancel
      </Button>
      <Button size="sm" secondary class="normal-case rounded-lg" @click="save">
        Save
      </Button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.rename-modal-content {
  @apply border-secondary text-base-content sm:px-20 py-8 bg-base-300 border-2 rounded-2xl max-w-[500px] w-[90vw];
  ::-webkit-scrollbar {
    @apply hidden;
  }
}
.dark-input {
  @apply rounded-lg h-9 bg-neutral placeholder:text-base-content/40 px-3 w-full disabled:text-base-content/50 outline-none;
}
</style>

<script setup>
import { CloseMe } from "~/components/icons";
const props = defineProps({
  reportName: {
    type: String,
    default: "",
  },
});

const inputReportName = ref("");
onMounted(() => {
  inputReportName.value = props.reportName;
});

const save = () => {
  emit("changeName", inputReportName.value);
  emit("close");
};

const emit = defineEmits(["close", "changeName"]);
</script>
