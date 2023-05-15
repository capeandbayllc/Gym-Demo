<template>
  <div class="modal-container">
    <div class="modal-content">
      <div>
        <div class="max-h-[80vh] overflow-y-auto flex flex-col gap-10 mb-5">
          <h3 class="text-lg font-semibold">Rename Report Here</h3>

          <div class="flex items-center gap-4">
            <div class="w-[110px] font-semibold">Report name</div>
            <div class="w-full relative">
              <input
                type="text"
                class="input-text"
                value="Launch Party Leads_Cloned"
              />
              <i class="input-text-icon" @click.stop="toggleRecipientDropdown">
                <recipient-search-icon />
              </i>
              <recipient-dropdown
                @close="toggleRecipientDropdown"
                v-show="showRecipientDropdown"
              />
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-[110px] font-semibold mt-4">Description</div>
            <div class="w-full">
              <textarea
                class="w-full h-[200px] rounded-xl bg-secondary-focus/50 h-28 p-2 focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-24 font-semibold">Report Type</div>
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
        </div>

        <div class="flex justify-end gap-3">
          <Button size="sm" ghost outline class="normal-case rounded-xl">
            Cancel
          </Button>
          <Button size="sm" secondary class="normal-case rounded-xl">
            Export
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
    @apply w-full p-[30px] md:px-[80px] border border-secondary rounded-2xl bg-base-300 text-left max-w-full;
    .select-box {
      @apply bg-neutral-content/70 text-base-content !h-10 py-2 rounded-lg !text-left w-full;
    }
    .input-text {
      @apply bg-neutral-content/70 text-base-content !h-10 px-2 rounded-lg !text-left w-full focus:outline-none !pr-10;
    }
    .input-text-icon {
      @apply absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer;
    }
  }
}
</style>
<style lang="postcss">
.select-box {
  .select-box-btn {
    @apply !h-10 rounded-lg;
  }
  .select-box-content {
    @apply top-[8px];
  }
}
</style>

<script setup>
import { RecipientSearchIcon } from "~/components/icons";
import RecipientDropdown from "./recipient-dropdown.vue";

const showRecipientDropdown = ref(false);

const toggleRecipientDropdown = () => {
  showRecipientDropdown.value = !showRecipientDropdown.value;
};

const reportTypes = ref([
  {
    value: "Excel",
    label: "Excel",
  },
  {
    value: "CSV",
    label: "CSV",
  },
  {
    value: "PDF",
    label: "PDF",
  },
]);
</script>
