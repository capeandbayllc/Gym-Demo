<template>
  <div class="modal-container">
    <div class="modal-content relative">
      <button @click="emit('close')" class="absolute top-[15px] right-[20px]">
        <close-me size="big" />
      </button>

      <div>
        <div class="overflow-visible flex flex-col gap-8 mb-5">
          <h3 class="text-lg font-semibold text-center">
            Mail Sending Options -
            <span class="font-normal">Schedule for Later</span>
          </h3>

          <div class="modal-section">
            <div class="w-[120px] font-semibold">Recipients</div>
            <div class="w-full relative">
              <input type="text" class="input-text" value="Kevin Buchanan" />
              <button
                class="input-text-icon"
                @click.stop="toggleRecipientDropdown"
              >
                <recipient-search-icon />
              </button>
              <recipient-dropdown
                @close="toggleRecipientDropdown"
                v-show="showRecipientDropdown"
              />
            </div>
          </div>

          <div class="modal-section">
            <div class="w-[120px] font-semibold">Export File As</div>
            <div class="w-full">
              <select-box
                :items="reportTypes"
                :bg-secondary-opened="true"
                :show-search="false"
                :showClearList="false"
                :label="'Leads Folder'"
                class="select-box"
              />
            </div>
          </div>

          <div class="modal-section">
            <div class="w-[120px] font-semibold">Send Options</div>
            <div class="w-full flex gap-3">
              <Datepicker
                class="custom-date-input-neutral-content w-full"
                dark
                v-model="data.startDate"
                :enable-time-picker="false"
                auto-apply
              ></Datepicker>
              <Datepicker
                class="custom-date-input-neutral-content w-full"
                dark
                v-model="data.endDate"
                :enable-time-picker="false"
                auto-apply
              ></Datepicker>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3">
          <Button
            size="sm"
            ghost
            outline
            class="normal-case rounded-xl"
            @click="emit('close')"
          >
            Cancel
          </Button>
          <Button size="sm" secondary class="normal-case rounded-xl">
            Send
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply !p-4 w-[90vw] !max-w-[700px] bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative bg-gradient-to-b from-secondary-focus to-base-300/30;
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply w-full max-h-[90vh] overflow-y-visible p-[30px] md:px-[80px] border border-secondary rounded-2xl bg-base-300 text-left max-w-full;
    .modal-section {
      @apply flex flex-col sm:flex-row sm:items-center gap-4;
      .select-box {
        @apply bg-neutral-content/70 text-base-content !h-10 py-2 rounded-lg !text-left w-full;
      }
      .input-text {
        @apply bg-neutral-content/70 text-base-content !h-10 px-3 !pr-10 rounded-lg !text-left w-full focus:outline-none;
      }
      .input-text-icon {
        @apply absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer;
      }
    }
  }
}
</style>
<style lang="postcss">
.select-box {
  .select-box-btn {
    @apply !h-10 rounded-lg !px-3;
  }
  .select-box-content {
    @apply top-[8px];
  }
}
.custom-date-input-neutral-content {
  .dp__input {
    @apply h-9 !max-w-full !w-full rounded-xl !bg-neutral-content/70 border-0;
  }
}
</style>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { RecipientSearchIcon, CloseMe } from "~/components/icons";
import RecipientDropdown from "./recipient-dropdown.vue";

const data = ref({
  startDate: "",
  endDate: "",
});

const emit = defineEmits(["close"]);

const showRecipientDropdown = ref(false);

const toggleRecipientDropdown = () => {
  showRecipientDropdown.value = !showRecipientDropdown.value;
};

const reportTypes = ref([
  {
    value: "excel",
    label: "Excel",
  },
  {
    value: "csv",
    label: "CSV",
  },
  {
    value: "pdf",
    label: "PDF",
  },
]);

const sendOptions = ref([
  {
    value: "immediately",
    label: "Send Immediately",
  },
  {
    value: "later",
    label: "Send for Later",
  },
]);
</script>
