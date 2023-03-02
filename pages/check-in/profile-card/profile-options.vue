<template>
    <div class="profile-options-container relative">
        <div class="flex flex-row gap-2 relative">
            <CheckInButton v-model="checkIn" class="text-base-content" />
        </div>
        <div class="profile-options card-gradient-bg">
            <profile-option-item
                v-for="item in options"
                :key="item.key"
                :model-value="item.key === selected"
                @update:modelValue="handleSelect(item.key, $event)"
                :label="item.label"
                :unread="item.unread"
            />
        </div>
    </div>
</template>
<style scoped>
.profile-options-container {
    @apply flex flex-col space-y-6 items-center;
    .profile-options {
        @apply flex flex-col min-w-[220px] justify-between mt-5 text-xs h-[500px] border-2 border-secondary rounded-lg p-5 w-full bg-secondary/20;
    }
    .btn-close-selection {
        @apply cursor-pointer bg-base-content rounded p-2 text-sm text-black;
    }
    .btn-check-in {
        @apply px-4 flex items-center rounded cursor-pointer bg-accent-focus/60 uppercase text-black font-medium;
    }
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import ProfileOptionItem from "./profile-option-item.vue";
import { AddIcon, NextIcon } from "@/components/icons";
import CheckInButton from "./check-in-button.vue";
const props = defineProps({
    selected: String,
});

const options = [
    {
        label: "Profile",
        key: "profile",
        selected: false,
    },
    {
        label: "POS",
        key: "pos",
        selected: false,
    },
    {
        label: "Calendar",
        key: "calendar",
        selected: false,
        unread: 3,
    },
    {
        label: "Notifications",
        key: "notification",
        selected: false,
    },
    {
        label: "Add a Guest",
        key: "guest-pass",
        selected: false,
    },
    {
        label: "Note Pad",
        key: "note",
        selected: false,
    },
    {
        label: "New Agreement",
        key: "newAgreement",
        selected: false,
    },
];

const checkIn = ref(false);

const emit = defineEmits(["update:selected"]);
const handleSelect = (key, value) => {
    if (value) {
        emit("update:selected", key);
    } else {
        emit("update:selected", null);
    }
};
</script>
