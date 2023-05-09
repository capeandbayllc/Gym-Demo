<template>
  <tr class="notification-table-row">
    <td :class="statusTdClass">
      <div
        :class="statusTdClass"
        class="text-base font-semibold w-[130px] text-center"
      >
        {{ data.type }}
      </div>
    </td>
    <td :class="statusTdClass">
      <div :class="statusTdClass" class="notification-time">
        <div><calendar-icon class="w-4 mr-1" /> {{ data.date }}</div>
        <div><clock-icon class="w-4 mr-1" /> {{ data.time }}</div>
      </div>
    </td>
    <td :class="statusTdClass">
      <div :class="statusTdClass" class="w-12">
        <div
          class="tag"
          :class="{
            'bg-warning border-warning': status === 'warning',
            'bg-error border-error': status === 'error',
            'bg-green-500 border-green-500 tag-tick-icon': status === 'success',
          }"
        />
      </div>
    </td>
    <td :class="statusTdClass">
      <div :class="statusTdClass" class="notification-member">
        <div class="flex items-center">
          <img src="/account.png" class="w-7 rounded-full mr-2" />
          {{ data.name }}
        </div>
        <Button size="sm" primary class="p-2 mr-3"> &#8230;</Button>
      </div>
    </td>
    <td :class="statusTdClass">
      <div :class="statusTdClass" class="note-btn">
        <Button size="sm" class="rounded-xl">Notes</Button>
      </div>
    </td>
    <td :class="statusTdClass">
      <div :class="statusTdClass" class="px-2">
        <p class="w-[100px]">Response: Text</p>

        <Button secondary size="sm" class="rounded-xl">Reply</Button>
      </div>
    </td>
    <td :class="statusTdClass">
      <div :class="statusTdClass" class="flex gap-2 pr-1">
        <button class="mx-2">Edit</button>
        <Button
          secondary
          size="sm"
          class="rounded-xl"
          @click="readNotification()"
          >View</Button
        >
      </div>
    </td>
  </tr>
</template>
<style scoped lang="postcss">
.notification-table-row > td:first-child {
  @apply rounded-l-xl;
}
.notification-table-row > td:last-child {
  @apply !rounded-r-xl;
}
.notification-table-row {
  @apply bg-base-200;
  td {
    @apply border-y h-14 py-2 text-sm;
    .notification-time {
      @apply w-[110px] flex flex-col items-start px-2;
      > div {
        @apply flex justify-start;
      }
    }
    .note-btn {
      @apply px-2;
      .btn {
        @apply bg-base-content text-neutral text-sm hover:text-base-content hover:bg-black;
      }
    }
    .notification-member {
      @apply flex flex-row justify-between pl-1 w-[190px];
    }
    > div {
      @apply flex items-center justify-center text-sm border-r h-full;
    }
    .tag {
      @apply rounded-full w-7 h-7;
      content: "";
    }
    .tag-tick-icon::before {
      content: "✓";
      @apply w-[28px] h-[28px] text-center font-bold;
      display: inherit;
      line-height: 28px;
    }
  }
  td:first-child {
    @apply border-l;
  }
  td:last-child {
    @apply border-r;
    > div {
      @apply border-none;
    }
  }
}
</style>
<script setup>
import { CalendarIcon, ClockIcon } from "~~/components/icons";
import { useMutation } from "@vue/apollo-composable";
import notification from "~/api/mutations/notification";
const props = defineProps({
  data: Object,
});
const status = ref(props.data.tag);
const statusTdClass = computed(() => {
  if (status.value == "error") return "border-error";
  if (status.value == "warning") return "border-secondary";
  if (status.value == "success") return "border-secondary";
});

function readNotification() {
  const { mutate: updateData } = useMutation(
    notification.mutation.updateNotificationState
  );
  updateData({
    input: {
      id: props.data.id,
      user_id: props.data.user_id,
      state: "success",
    },
  }).then(() => {
    status.value = "success";
  });
}
</script>
