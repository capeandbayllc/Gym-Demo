<template>
  <simple-card title="Make a call">
    <div class="outgoing-call-modal-container flex flex-col">
      <div class="content col-span-3">
        <div class="call-inner-content m-5 col-span-3 mb-8">
          <caller-card :user-call-setting="userCallSetting"></caller-card>
        </div>
        <div class="grid justify-end m-5">
          <div>
            <button
              type="button"
              class="btn w-max rounded btn-sm font-medium ml-32 mr-3"
              error
              outline
              @click="$emit('incoming-call')"
            >
              Cancel
            </button>
            <button
              class="btn w-max rounded bg-secondary border-secondary text-base-content btn-sm font-medium mr-3"
              @click="$emit('incoming-call')"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </simple-card>
</template>

<script setup>
import CallerCard from "./caller-card.vue";
const userCallSetting = {
  type: "end-call",
  callType: "New Membership Call",
  userName: "Mona Parksdale",
  phone: "+1 (123) 456-7890",
  callIcon: "/call-end.png",
  callerProfileImage: "/user-caller.png",
  callDuration: "5 minutes 28 seconds",
};
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
    .btn.bg-secondary:hover {
      @apply border-secondary;
    }
  }
}
</style>
