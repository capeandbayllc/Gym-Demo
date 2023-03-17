<template>
  <div class="grid gap-5">
    <div class="message-from">
      <div class="text-center text-lg -lg:text-xs relative chat-heading text-base-content/70">
        Today
      </div>
    </div>
    <div v-for="chat in chats" :key="chat.id" class="flex" :class="{'justify-end': chat.isMe}">
      <div class="relative">
        <div
            class="text-neutral w-52 -lg:w-52 p-4 text-sm py-3 bg-base-content text-base chat-container whitespace-pre-line"
            :class="{'rounded-bl rounded-br-none' : chat.isMe}">
          {{ chat.message }}
        </div>
        <div class="rounded-full bg-base-content p-0.5  absolute -top-5 -right-5">
          <img :src="chat.from.avatar" class="w-10 h-10 rounded-full"/>
        </div>
        <div class="text-base-content/70 text-xs font-semibold" :class="{'text-right': !chat.isMe}">
          {{ chat.created_at }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.chat-container {
  border-radius: 20px;
}
.chat-heading::before {
  content: '';
  position: absolute;
  width: 43%;
  height: 1px;
  background: #CECECE;
  top: 15px;
  left: 0px;
}

.chat-heading::after {
  content: '';
  position: absolute;
  width: 43%;
  height: 1px;
  background: #CECECE;
  top: 15px;
  right: 0px;
}

@media (max-width: 1024px) {
  .chat-heading::before, .chat-heading::after {
    top: 8px;
  }
}
</style>
<script setup>

const props = defineProps({
  me: {
    type: Object,
    required: true,
  },
  with: {
    type: Object,
    required: true,
  },
})


const chats = [
  {
    id: 1,
    from: props.me,
    message: "Hey...\n\nDo I need to bring a mat to yoga class tonight?",
    created_at: "4:40 PM",
    isMe: true
  },
  {
    id: 3,
    from: props.me,
    message: "Also, I have a friend Wanda that would like to join. Can she come too?",
    created_at: "4:46 PM",
    isMe: true
  },
  {
    id: 4,
    from: props.with,
    message: "Hi George, We have mats available but you can bring your own. Yes, Wanda can attend.  There are a few spots available.",
    created_at: "4:50 PM",
  },
]
</script>
