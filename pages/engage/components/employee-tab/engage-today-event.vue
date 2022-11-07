<template>
<div class="engage-today-event-container">
    <div class="main-title">Todays Events</div>
    <div class="text-xs">At your location</div>
    <div class="event-list">
        <div class="event-list-item" v-for="item in mock" :key="item.id">
            <div class="event-item-header">
                <div class="text-warning">{{item.start}} - {{item.end}}</div>
                <div class="text-secondary">Event Type</div>
            </div>
            <div class="event-item-content">
                <div class="event-name">
                    <img :src="item.avatar" class="h-6 pr-2"/>
                    {{item.name}}
                </div>
                <div>{{item.event_name}}</div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.engage-today-event-container {
    @apply flex flex-col px-2 mt-2;
    .main-title {
        @apply text-lg font-semibold
    }
    .event-list {
        @apply flex flex-col space-y-1 pt-3 h-72 overflow-y-auto;
        .event-list-item {
            @apply flex flex-col text-sm font-semibold;
            .event-item-header {
                @apply flex flex-row justify-between border-b p-1;
            }
            .event-item-content {
                @apply flex flex-row justify-between p-1 border-b;
                .event-name {
                    @apply flex items-center;
                }
            }
        }
    }
}
</style>
<script setup>
const mock = [{
    id: 1,
    start: "5:20",
    end: "6:10",
    avatar: "/account.png",
    name: "Caleb Sauer",
    event_name: "Yoga"
}, {
    id: 2,
    start: "6:30",
    end: "6:40",
    avatar: "/account.png",
    name: "Kristy Philips",
    event_name: "PT Training"
}, {
    id: 3,
    start: "10:20",
    end: "11:10",
    avatar: "/account.png",
    name: "Delila Samuels",
    event_name: "Yoga"
}, {
    id: 4,
    start: "11:40",
    end: "12:10",
    avatar: "/account.png",
    name: "Eric Smith",
    event_name: "Yoga"
}, {
    id: 5,
    start: "5:20",
    end: "6:10",
    avatar: "/account.png",
    name: "Caleb Sauer",
    event_name: "Yoga"
}, {
    id: 6,
    start: "5:20",
    end: "6:10",
    avatar: "/account.png",
    name: "Caleb Sauer",
    event_name: "Yoga"
}, {
    id: 7,
    start: "5:20",
    end: "6:10",
    avatar: "/account.png",
    name: "Caleb Sauer",
    event_name: "Yoga"
}]
</script>