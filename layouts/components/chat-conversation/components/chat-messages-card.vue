<template>
  <div class="grid gap-5">
    <div class="message-from">
      <div
        class="text-center text-lg -lg:text-xs relative chat-heading text-base-content/70"
      >
        Today
      </div>
    </div>
    <chat-message-bubble
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>
<style scoped>
.chat-heading::before {
  content: "";
  position: absolute;
  width: 43%;
  height: 1px;
  background: #cecece;
  top: 15px;
  left: 0px;
}

.chat-heading::after {
  content: "";
  position: absolute;
  width: 43%;
  height: 1px;
  background: #cecece;
  top: 15px;
  right: 0px;
}

@media (max-width: 1024px) {
  .chat-heading::before,
  .chat-heading::after {
    top: 8px;
  }
}
</style>
<script setup>
import ChatMessageBubble from "./chat-message-bubble.vue";
const props = defineProps({
  with: {
    type: Object,
    required: true,
  },
  messages: {
    type: Array,
    required: true,
  },
});
</script>
