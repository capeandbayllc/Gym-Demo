<template>
  <div class="profile-options-container relative">
    <!-- <div class="flex flex-row gap-2 relative"> -->
<!--    <CheckInButton @click="handleCheckIn" />-->
    <!-- </div> -->
    <div class="profile-options to-primary/75 bg-gradient-to-t from-black/80">
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
    @apply flex flex-col min-w-[14rem] justify-between mt-5 text-xs h-full border-2 border-secondary rounded-3xl p-5 w-full bg-secondary/20;
  }
}
</style>

<script setup>
import { ref } from "vue";
import CheckInButton from "./check-in-button.vue";
import ProfileOptionItem from "./profile-option-item.vue";

const emit = defineEmits(["update:selected", "update:check-in"]);

const props = defineProps({
  selected: String,
});
const user = useState("auth");
const notificationCount = ref(user.value.notifications.length);

const options = reactive([
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
  },
  {
    label: "Notifications",
    key: "notification",
    selected: false,
    unread: notificationCount,
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
]);

const checkIn = ref(false);

const handleCheckIn = () => {
  checkIn.value = !checkIn;
  emit("update:check-in", checkIn);
};

watch(
  () => user.value.notifications,
  (notifications) => {
    notificationCount.value = notifications.length;
  }
);

const handleSelect = (key, value) => {
  if (value) {
    emit("update:selected", key);
  } else {
    emit("update:selected", null);
  }
};
</script>
