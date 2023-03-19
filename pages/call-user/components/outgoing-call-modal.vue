<template>
  <simple-card title="Make a call">
    <div class="outgoing-call-modal-container flex flex-col">
      <div class="content col-span-3">
        <div class="call-inner-content m-5 col-span-3 mb-8">
          <caller-card :user-call-setting="userCallSetting"></caller-card>
        </div>
        <div class="flex justify-between m-5">
          <select-box
            :items="callType"
            value=""
            :label="'Call type'"
            class="max-w-[15rem]"
          >
          </select-box>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded btn-sm font-medium"
              error
              outline
              @click="$emit('close')"
            >
              Cancel
            </button>
            <button class="rounded text-base-content btn-sm font-medium">
              Save
            </button>
            <button
              class="bg-success border-success rounded text-base-content btn-sm font-medium"
              @click="$emit('call-now')"
            >
              Call now
            </button>
          </div>
        </div>
      </div>
    </div>
  </simple-card>
</template>

<script setup>
import CallerCard from "./caller-card.vue";

defineEmits(["call-now"]);
const userCallSetting = {
  type: "outgoing-call",
  callType: "Outgoing Call",
  userName: "Mona Parksdale",
  phone: "+1 (123) 456-7890",
  callIcon: "/phone.png",
  callerProfileImage: "/user-caller.png",
};
const callType = [
  {
    value: "1",
    label: "Introduction",
  },
  {
    value: "2",
    label: "New Membership",
  },
  {
    value: "3",
    label: "Follow Up",
  },
  {
    value: "4",
    label: "Returning Call",
  },
];
</script>

<style scoped>
.outgoing-call-modal-container {
  @apply pl-8 pr-8 pt-8 pb-8 bg-neutral;
  .card-title {
    @apply border-b pb-2 border-base-content/50;
  }
  .content {
    @apply border border-secondary bg-black;
    .call-inner-content {
      @apply border border-gray-50;
    }
    .btn.bg-success:hover {
      @apply border-success;
    }
  }
}
</style>
