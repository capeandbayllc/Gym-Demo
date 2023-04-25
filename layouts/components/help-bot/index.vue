<template>
  <div
    class="help-bot"
    :class="{
      hidden: !showBot,
      block: showBot,
    }"
  >
    <div class="close-btn" @click="toggleBot">
      <cross-icon />
    </div>
    <div class="help-bot-info">
      <help-bot-avatar />
      <div class="help-bot-title">HelpBot</div>
      <search-input border="base-content" />
      <div class="help-bot-help">
        <div>
          <question-round-icon class="scale-50" /><b
            >Forgot Forgot Username or Password</b
          >
        </div>
        <div>
          <question-round-icon class="scale-50" /><b
            >Billing and Subscriptions</b
          >
        </div>
      </div>
    </div>
    <help-bot-chat-box />
  </div>
</template>
<style scoped>
.help-bot {
  @apply absolute right-10 top-16 bg-secondary z-50 w-72 rounded-lg;
  .close-btn {
    @apply absolute top-4 right-4 cursor-pointer hover:text-neutral;
  }
  .help-bot-info {
    @apply flex flex-col px-2 pt-5 items-center space-y-2;
    .help-bot-title {
      @apply text-xl font-bold;
    }
    .help-bot-help {
      @apply text-xs font-semibold flex flex-col pb-4;
      > div {
        @apply flex flex-row items-center;
      }
    }
  }
}
</style>
<script setup>
import { ref } from "vue";
import { CrossIcon, QuestionRoundIcon } from "~~/components/icons";
import HelpBotAvatar from "./help-bot-avatar.vue";
import HelpBotChatBox from "./help-bot-chat-box.vue";

const showBot = ref(false);

const toggleBot = () => (showBot.value = !showBot.value);
const open = () => (showBot.value = true);
defineExpose({ open });
</script>
