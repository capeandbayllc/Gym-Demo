<template>
  <simple-card
    class="notification-leads-member-card -md:text-xs"
    :closable="false"
    title="Leads/Members"
  >
    <div class="notification-container">
      <div class="notification-title">
        <div class="notification-actions">
          <select-box
            class="max-w-[200px]"
            label="Call Type"
            :items="leadsList"
            transparent
            :secondary="true"
          />
          <select-box
            class="max-w-[200px]"
            label="Call Type"
            :items="membersList"
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
      <div class="overflow-auto max-h-[250px]" ref="containerTable">
        <data-table
          class="notification-leads-member-table"
          :data="mockLeads"
          :row-component="NotificationTableRow"
          :columns="columns"
        />
      </div>
    </div>
  </simple-card>
</template>
<style lang="postcss">
.notification-leads-member-card {
  .notification-actions .select-box-btn {
    @apply rounded-xl;
  }
}
</style>
<style scoped lang="postcss">
.notification-leads-member-card {
  @apply m-auto mt-5 bg-base-300;
  .notification-container {
    @apply p-4 lg:px-10;
  }
  .notification-title {
    @apply flex flex-row justify-end items-center;
    h3 {
      @apply text-xl font-semibold pl-4;
    }
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

const mockLeads = computed(() => {
  if (notifications.value) {
    return notifications?.value.map((e, i) => {
      console.log(e);
      return {
        id: e.id,
        type: "Promo Response",
        date: "2022-09-23",
        time: "10:20 pm",
        tag: "warning",
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

const leadsList = [
  {
    id: 1,
    label: "Leads 1",
    value: 1,
  },
  {
    id: 2,
    value: 2,
    label: "Leads 2",
  },
  {
    id: 3,
    value: 3,
    label: "Leads 3",
  },
];
const membersList = [
  {
    id: 1,
    label: "Member 1",
    value: 1,
  },
  {
    id: 2,
    value: 2,
    label: "Member 2",
  },
  {
    id: 3,
    value: 3,
    label: "Member 3",
  },
];
const columns = ["Type", "Date/ Time", "Tags", "Members", "", "", ""];
</script>
