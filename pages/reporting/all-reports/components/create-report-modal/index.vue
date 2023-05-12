<template>
  <div class="modal-container">
    <div class="modal-content">
      <div class="font-semibold text-xl mb-7">Create a Report</div>

      <div class="max-full max-h-[60vh] overflow-auto">
        <div class="select-container" v-for="(item, i) in selects" :key="i">
          <div class="select-title">
            {{ item.title }}
          </div>
          <select-box
            :items="item.values"
            :bg-secondary-opened="true"
            :show-search="false"
            :showClearList="false"
            :label="item.title"
            class="select-box"
          />
        </div>
      </div>
    </div>
    <div class="text-right pt-6 pb-4">
      <Button ghost size="sm" class="normal-case mr-2 rounded-lg">
        Cancel
      </Button>
      <Button size="sm" secondary="" class="normal-case rounded-lg">
        Save
      </Button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply p-4 bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative;

  .modal-content {
    @apply border-secondary text-base-content px-10 py-7 bg-gradient-to-b from-secondary-focus to-base-300/30 border-2 rounded-2xl max-w-[500px] w-[90vw] gap-5;
    ::-webkit-scrollbar {
      @apply hidden;
    }

    .select-container {
      @apply mb-7;

      .select-title {
        @apply pb-2 text-[15px];
      }

      .select-box {
        @apply bg-neutral-content text-base-content font-semibold rounded-lg !text-left;
      }
    }
  }
}
</style>

<script setup>
const selects = [
  {
    title: "Select Primary Modal",
    values: [
      {
        value: "leads",
        label: "Leads",
      },
      {
        value: "contacts",
        label: "Contacts",
      },
      {
        value: "accounts",
        label: "Accounts",
      },
      {
        value: "deals",
        label: "Deals",
      },
      {
        value: "tasks",
        label: "Tasks",
      },
      {
        value: "meetings",
        label: "Meetings",
      },
      {
        value: "calls",
        label: "Calls",
      },
    ],
  },
  {
    title: "Start Date",
    values: [
      {
        value: "today",
        label: "Today",
      },
      {
        value: "tomorrow",
        label: "Tomorrow",
      },
    ],
  },
  {
    title: "End Date",
    values: [
      {
        value: "today",
        label: "Today",
      },
      {
        value: "tomorrow",
        label: "Tomorrow",
      },
    ],
  },
  {
    title: "Post Rate",
    values: [
      {
        value: "csv",
        label: "CSV",
      },
      {
        value: "pdf",
        label: "PDF",
      },
    ],
  },
  {
    title: "Reocurring Report",
    values: [
      {
        value: "csv",
        label: "CSV",
      },
      {
        value: "pdf",
        label: "PDF",
      },
    ],
  },
  {
    title: "Schedule",
    values: [
      {
        value: "csv",
        label: "CSV",
      },
      {
        value: "pdf",
        label: "PDF",
      },
    ],
  },
];
</script>
