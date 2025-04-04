<template>
  <simple-card
    class="notification-today-card -md:text-xs"
    :closable="false"
    title="Today"
  >
    <div class="notification-container">
      <div class="notification-title">
        <div class="notification-actions">
          <select-box
            class="max-w-[200px]"
            label="Call Type"
            :items="locationsList"
            transparent
            :secondary="true"
          />
          <select-box
            class="max-w-[200px]"
            label="Call Type"
            :items="namesList"
            :secondary="true"
            transparent
          />
          <FormAppInput
            height="h-[25px] md:h-[32px]"
            width="w-full max-w-[300px]"
            placeholder="Search"
          />
        </div>
      </div>
      <div class="overflow-auto max-h-[250px] mx-auto" ref="containerTable">
        <data-table
          class="notification-today-table"
          :data="mockToday"
          :row-component="NotificationTableRow"
          :columns="columns"
        />
      </div>
    </div>
  </simple-card>
</template>
<style lang="postcss">
.notification-today-card {
  .notification-actions .select-box-btn {
    @apply rounded-xl;
  }
}
</style>
<style scoped lang="postcss">
.notification-today-card {
  @apply m-auto bg-base-300;

  .notification-container {
    @apply p-4 px-10;
  }

  .notification-title {
    @apply flex flex-row justify-end items-center;
  }

  .notification-actions {
    @apply w-full flex flex-wrap gap-3 flex-row justify-end items-center mb-2 mt-5;
  }
}
</style>
<script setup>
import NotificationTableRow from "./notification-table-row.vue";
import notification from "~/api/queries/notification";
import { useQuery } from "@vue/apollo-composable";

const currentPage = ref(1);
const notifications = ref([]);
const noMoreData = ref(false);
const userData = ref(null);
getNotifications(useState("auth"));
function getNotifications(user) {
  if (!user.value) return;
  userData.value = user.value;
  const { result } = useQuery(notification.query.browse, {
    user_id: user.value.id,
    page: currentPage.value,
  });
  watch(result, () => {
    if (result?.value?.notifications?.data.length && !noMoreData.value) {
      notifications.value = [
        ...notifications?.value,
        ...result.value.notifications.data,
      ];
    } else {
      noMoreData.value = true;
    }
  });
}

const containerTable = ref(null);

function handleScroll() {
  const container = containerTable.value;
  const isScrollingDown = container.scrollTop > scrollPosition.value;

  if (
    isScrollingDown &&
    container.scrollTop + container.clientHeight >= container.scrollHeight
  ) {
    currentPage.value++;
    getNotifications(useState("auth"));
  }

  scrollPosition.value = container.scrollTop;
}

const scrollPosition = ref(0);

onMounted(() => {
  containerTable.value.addEventListener("scroll", handleScroll);
});

const mockToday = computed(() => {
  if (notifications.value) {
    return notifications?.value.map((e, i) => {
      return {
        id: e.id,
        type: "Promo Response",
        date: "2022-09-23",
        time: "10:20 pm",
        tag: "error",
        name: userData?.value.first_name + " " + userData?.value.last_name,
        text: e.text,
        entity_type: e.entity_type,
        entity_id: e.entity_id,
        entity: e.entity,
        misc: e.misc,
      };
    });
  } else {
    return [];
  }
});

const locationsList = [
  {
    id: 1,
    label: "Location",
    value: 1,
  },
  {
    id: 2,
    value: 2,
    label: "Location",
  },
  {
    id: 3,
    value: 3,
    label: "Location",
  },
];
const namesList = [
  {
    id: 1,
    label: "Name",
    value: 1,
  },
  {
    id: 2,
    value: 2,
    label: "Name",
  },
  {
    id: 3,
    value: 3,
    label: "Name",
  },
];
const columns = ["Notification", "Date/ Time", "Tags", "Members", "", "", ""];
</script>
