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
import {faker} from "@faker-js/faker";

defineEmits(["call-now"]);
const props = defineProps({
  user: Object
})

const firstName = computed(() => props.user?.first_name ?? faker.name.firstName());
const lastName = computed(() => props.user?.last_name ?? faker.name.lastName());
const phone = computed(() => props.user?.phone ?? faker.phone.phoneNumber());
const profilePhoto = computed(() => props.user?.profile_photo_path ?? '/images/profile/member_7.jpg');
const userCallSetting = computed(() => ({
  type: "outgoing-call",
  callType: "Outgoing Call",
  userName: `${firstName} ${lastName}`,
  phone: (phone.value.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')),
  callIcon: "/phone.png",
  callerProfileImage: profilePhoto.value,
}));
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

<style scoped lang="postcss">
.outgoing-call-modal-container {
  @apply pl-8 pr-8 pt-8 pb-8 bg-neutral;
  .card-title {
    @apply border-b pb-2 border-base-content/50;
  }
  .content {
    @apply border border-secondary bg-base-300;
    .call-inner-content {
      @apply border border-base-content/90;
    }
    .btn.bg-success:hover {
      @apply border-success;
    }
  }
}
</style>
