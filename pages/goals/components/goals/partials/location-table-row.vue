<template>
  <tr class="campaign-table-row group hover:bg-primary">
    <td>
      <div class="w-[100px]">
        {{ data.location }}
      </div>
    </td>
    <td>
      <div>
        <select-box
          :items="goalTypes"
          label="Goal Type"
          :rounded-xl="true"
          :showSearch="false"
          :showClearList="false"
          :value="data.goal"
          class="select-box"
        >
        </select-box>
      </div>
    </td>
    <td>
      <div>
        {{ data.goal_amount }}
      </div>
    </td>
    <td>
      <div class="gap-2">
        <Button
          v-for="amount in data.overview_amount"
          size="xs"
          class="rounded-xl border-0 normal-case"
          :success="amount > data.goal_amount"
          :warning="amount < data.goal_amount"
          :error="amount < data.goal_amount * 0.85"
        >
          {{ amount }}
        </Button>
      </div>
    </td>
    <td>
      <div class="gap-2">
        <Button
          v-for="amount in data.overview_percent_to_goals"
          size="xs"
          class="percent-to-goals-button"
        >
          {{ amount }}%
        </Button>
      </div>
    </td>
    <td>
      <div class="gap-2">
        <Button size="sm" class="notes-button">
          Notes
          <div class="w-0" v-if="data.notes_unread">
            <div class="unread"></div>
          </div>
        </Button>
      </div>
    </td>
  </tr>
</template>

<style scoped lang="postcss">
.campaign-table-row:first-child {
  td {
    @apply border-t border-secondary;
    > div {
      @apply mt-2;
    }
  }
}

.campaign-table-row {
  td {
    @apply border-b border-secondary;
    > div {
      @apply mb-2 border-l border-secondary flex items-center justify-center;
      > div {
        @apply w-auto;
      }
    }
  }
  td:first-child {
    > div {
      @apply border-none text-left;
    }
  }
  td:last-child {
    @apply text-center;
    > svg {
      display: inline-flex;
    }
  }
}
.percent-to-goals-button {
  @apply rounded-xl border-0 bg-neutral-content/80 text-base-content hover:bg-neutral-content/80 hover:text-base-content normal-case;
}
.notes-button {
  @apply rounded-xl bg-base-content text-base-100/80 px-2 mx-2 hover:text-base-100/80 hover:bg-base-content hover:border-secondary normal-case;
  .unread {
    @apply rounded-full !h-[10px] !w-[10px] bg-secondary relative bottom-[12px];
  }
}

.select-box {
  @apply bg-base-300 text-base-content rounded-xl border border-secondary !w-[200px] mx-2 text-sm;
}
</style>
<script setup>
const props = defineProps({
  data: Object,
});

const goalTypes = [
  { label: "Membership Units", value: "Membership Units" },
  { label: "Membership $", value: "Membership $" },
  { label: "Personal Training Units", value: "Personal Training Units" },
  { label: "Personal Training $", value: "Personal Training $" },
];
</script>
