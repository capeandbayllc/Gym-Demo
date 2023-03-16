<template>
  <simple-card
    class="checkin-notification-card"
    :closable="true"
    title="Notifications"
  >
    <div class="notification-container card-gradient-bg">
      <div class="notification-title">
        <h3>Today</h3>
        <div class="notification-actions">
          <select-box
            class="w-full md:w-36"
            label="Locations"
            :items="locations"
            transparent
            :secondary="false"
          />
          <select-box
            class="w-full md:w-36"
            label="Names"
            :items="names"
            :secondary="false"
            transparent
          />
          <search-input size="lg" border="neutral" neutral />
        </div>
      </div>
      <data-table
        class="notification-today"
        :data="mockToday"
        :row-component="NotificationResponseRow"
        :columns="columns"
      />
      <div class="notification-title -md:mt-5">
        <h3>Leads/Members</h3>
        <div class="notification-actions">
          <select-box
            class="w-full md:w-36"
            label="Locations"
            :items="locations"
            transparent
            :secondary="false"
          />
          <select-box
            class="w-full md:w-36"
            label="Names"
            :items="names"
            :secondary="false"
            transparent
          />
          <search-input size="lg" border="neutral" neutral />
        </div>
      </div>
      <data-table
        class="notification-leads"
        :data="mockLeads"
        :row-component="NotificationResponseRow"
        :columns="columns"
      />
    </div>
  </simple-card>
</template>
<style>
.notification-today,
.notification-leads {
  @apply h-64 overflow-y-auto;
}
.notification-today .notification-table-row {
  td,
  td > div {
    @apply border-error;
  }
}
.notification-leads .notification-table-row {
  td,
  td > div {
    @apply border-secondary;
  }
}

.notification-title {
  .select-box-wrapper {
    @apply w-full m-0;
  }

  .select-box-btn {
    @apply h-auto w-full;
  }

  .search-input-wrapper {
    @apply !w-full m-0;

    .search-input {
      @apply m-0 h-auto;
    }
  }
}
</style>
<style scoped>
.checkin-notification-card {
  @apply m-auto max-w-[1120px] xl:w-[1120px] w-full;
  .notification-container {
    @apply p-4 gap-5;
  }
  .notification-title {
    @apply grid grid-cols-[1fr_2fr] mb-4 mt-2;
    h3 {
      @apply text-xl font-semibold pl-4;
    }
  }
  .notification-actions {
    @apply grid grid-cols-[1fr_1fr_2fr] gap-8;
    @screen -md {
      .select-box-wrapper {
        @apply !m-0;
      }
      .search-input-wrapper {
        @apply !w-full !m-0;
      }
      .search-input {
        @apply !w-full;
      }
    }
  }
}
</style>
<script setup>
import NotificationResponseRow from "./notification-response-row.vue";
const locations = [
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
const names = [
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
const columns = ["Type", "Date/ Time", "Tags", "Members", "", "", ""];
const mockToday = [
  {
    id: 1,
    type: "Promo Response",
    date: "2022-09-23",
    time: "10:20 pm",
    tag: "error",
    name: "Jack Smith",
  },
  {
    id: 2,
    type: "Promo Response",
    date: "2022-09-25",
    time: "7:20 pm",
    tag: "error",
    name: "George W.",
  },
  {
    id: 3,
    type: "Promo Response",
    date: "2022-09-23",
    time: "5:30 pm",
    tag: "error",
    name: "Jason Richards",
  },
];

const mockLeads = [
  {
    id: 1,
    type: "Upgrade Promo Response",
    date: "2022-09-23",
    time: "10:20 pm",
    tag: "warning",
    name: "Jack Smith",
  },
  {
    id: 2,
    type: "Upgrade Promo Response",
    date: "2022-09-25",
    time: "7:20 pm",
    tag: "warning",
    name: "George W.",
  },
  {
    id: 3,
    type: "Upgrade Promo Response",
    date: "2022-09-23",
    time: "5:30 pm",
    tag: "warning",
    name: "Jason Richards",
  },
];
</script>
