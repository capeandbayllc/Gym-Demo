<template>
  <div class="engage-today-event-container">
    <!-- <div class="main-title">Todays Events</div>
    <div class="text-xs">At your location</div> -->
    <div class="event-list">
      <div class="event-list-item" v-for="(item, i) in mock" :key="item.id">
        <div class="event-item-header">
          <div class="text-warning">{{ item.start }} - {{ item.end }}</div>
          <div v-if="!i" class="text-secondary">Event Type</div>
        </div>
        <div class="event-item-content">
          <div class="event-name">
            <img v-if="item.avatar" :src="item.avatar" class="rounded-full border h-6 mr-2" />
            {{ item.name }}
          </div>
          <div>{{ item.event_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.engage-today-event-container {
  @apply flex flex-col px-2 mt-2;
  .main-title {
    @apply text-lg font-semibold;
  }
  .event-list {
    @apply flex flex-col space-y-1 pt-3 h-72 overflow-y-auto;
    .event-list-item {
      @apply flex flex-col text-sm;
      .event-item-header {
        @apply flex flex-row justify-between border-b p-1;
      }
      .event-item-content {
        @apply flex flex-row justify-between p-1 pb-3;
        .event-name {
          @apply flex items-center;
        }
      }
    }
  }
}
</style>
<script setup>
const mock = [
  {
    id: 1,
    start: "Monday 5:30 PM",
    end: "6:40 PM",
    avatar: "/images/profile/members_1.jpg",
    name: "Caleb Sauer",
    event_name: "Yoga",
  },
  {
    id: 2,
    start: "Monday 5:30 PM",
    end: "6:40 PM",
    avatar: "/images/profile/members_2.jpg",
    name: "Kristy Philips",
    event_name: "PT Training",
  },
  {
    id: 3,
    start: "Tuesday 10:30 AM",
    end: "11:10 AM",
    avatar: "/images/profile/members_3.jpg",
    name: "Delila Samuels",
    event_name: "Yoga",
  },
  {
    id: 4,
    start: "Tuesday 5:30 PM",
    end: "6:40 PM",
    avatar: "/images/profile/members_4.jpg",
    name: "Eric Smith",
    event_name: "Yoga",
  },
  {
    id: 5,
    start: "Tuesday 5:30 PM",
    end: "6:40 PM",
    avatar: "/images/profile/members_5.jpg",
    name: "Caleb Sauer",
    event_name: "PT Training",
  },
  {
    id: 6,
    start: "Wednesday 10:30 AM",
    end: "11:10 AM",
    avatar: "/images/profile/members_6.jpg",
    name: "Caleb Sauer",
    event_name: "PT Training",
  },
  {
    id: 7,
    start: "Wednesday 5:30 PM",
    end: "6:40 PM",
    avatar: "/images/profile/members_7.jpg",
    name: "Caleb Sauer",
    event_name: "Yoga",
  },
];
</script>
