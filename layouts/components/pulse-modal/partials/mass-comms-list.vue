<template>
  <div class="px-4 max-h-56 overflow-auto relative">
    <div
      class="grid grid-cols-[0.8fr_1fr_0.8fr_0.8fr] text-white/50 border-b-2 border-white pb-2 sticky top-0 bg-black"
    >
      <span>Subject</span>
      <span class="justify-self-center">Deployment Days</span>
      <span class="justify-self-center">Status</span>
    </div>
    <ul>
      <MassCommsMethod
        v-for="(contact, ix) in data"
        :key="ix"
        :context="contact.id"
        :subject="contact.subject"
        :days="contact.days"
        :status="contact.status"
        @view="(context) => $emit('view', context)"
      />
    </ul>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  @apply hidden;
}
</style>

<script setup>
import MassCommsMethod from "./mass-comms-method.vue";

const props = defineProps({
  data: {
    type: Array,
    default: [
      { id: 0, days: 4, status: "Pending", subject: "Email" },
      { id: 1, days: 2, status: "Pending", subject: "SMS Message" },
      { id: 2, days: 8, status: "Pending", subject: "Follow Up" },
      { id: 3, days: 1, status: "Pending", subject: "Follow Up" },
      { id: 4, days: 2, status: "Pending", subject: "SMS Message" },
    ],
  },
});
</script>
