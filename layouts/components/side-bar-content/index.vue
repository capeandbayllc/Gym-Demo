<template>
    <div class="side-bar-content-container">
        <arrow-icon direction="right" class="scale-150 self-end"/>
        <div class="mem-checkin-btn">Member Check In</div>
        <div class="divider"></div>
        <div class="active-members">
            <div class="text-lg">Active Club Members</div>
            <div class="active-member-count">24</div>
        </div>
        <select-box :items="locations" label="Location" class="w-32 self-start"/>
        <div class="divider my-6"></div>
        <div class="member-list">
            <side-bar-member
                v-for="member in members"
                :key="member.id"
				v-bind="{...member}"
            />
        </div>
    </div>
</template>
<style scoped>
.side-bar-content-container {
    @apply flex flex-col px-4 pt-6 items-center;
    .mem-checkin-btn {
        @apply w-fit px-4 py-2 my-4 font-semibold border border-accent-focus hover:bg-accent-focus/80 rounded cursor-pointer;
    }
    .divider {
        @apply h-0 border-b border-secondary;
    }
    .active-members {
        @apply flex flex-row items-center justify-between w-full;
        .active-member-count {
            @apply text-3xl font-bold p-2 rounded border-4 border-secondary bg-secondary/50;
        }
    }
    .member-list {
        @apply flex flex-col gap-5 w-full;
    }
}
</style>
<script setup>
import { ArrowIcon } from '~~/components/icons'
import SideBarMember from './side-bar-member.vue';
const locations = [{
    value: 1,
    label: "This Location"
}, {
    value: 2,
    label: "Club One"
}, {
    value: 3,
    label: "Club Two"
}]

const members = [{
    id: 1,
    name: "Kelly Arsington"
}, {
    id: 2,
    name: "Sam Williams",
    unread: 3,
}, {
    id: 3,
    name: "Walter K."
}]
</script>
